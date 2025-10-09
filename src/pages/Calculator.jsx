import React, { useState } from 'react';
import { Calculator, Trash2, Clock, Target, Zap, BarChart3 } from 'lucide-react';
// Importar los datos de experiencia desde el JSON
import expData from '../data/expData.json'; // Ajusta la ruta según tu estructura

export const ExpCalculator = () => {
  const [formData, setFormData] = useState({
    currentLevel: '',
    targetLevel: '',
    expPerSecond: '',
    expBar: '0'
  });

  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateExperience = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const nivelInicial = parseInt(formData.currentLevel);
      const nivelDeseado = parseInt(formData.targetLevel);
      const ex = parseFloat(formData.expPerSecond);
      let barra = parseInt(formData.expBar) * 10; // Convertir 0-9 a 0-90%

      // Validaciones
      if (!nivelInicial || !nivelDeseado || !ex || nivelInicial >= nivelDeseado) {
        alert('Por favor, verifica que todos los campos estén completos y que el nivel objetivo sea mayor al actual.');
        setIsCalculating(false);
        return;
      }

      // Ajustes automáticos (como en tu bot)
      if (nivelInicial >= 400 && barra > 99) barra = 99;

      // Usar los datos reales del JSON
      const { exp, nExp, masterExp, mExp } = expData;

      // Función de cálculo exacta de tu bot
      function calcularTiempo() {
        const t = nivelInicial;
        const n = nivelDeseado;

        function getExpByBar() {
          return t >= 400 ? masterExp[t - 400] * (barra / 100) : 0;
        }

        let tiempo;

        if (t < 400) {
          if (n <= 400) {
            tiempo = (nExp[n - 1] - nExp[t - 1]) / ex;
          } else {
            const expnorm = nExp[399] - nExp[t - 1]; // hasta nivel 400
            const tiemponormal = expnorm / ex;
            const expmaster = mExp[n - 401]; // master desde 401
            tiempo = tiemponormal + (expmaster / ex);
          }
        } else if (t === 400) {
          tiempo = (mExp[n - 401] - getExpByBar()) / ex;
        } else {
          tiempo = (mExp[n - 401] - mExp[t - 401] - getExpByBar()) / ex;
        }

        const totalHoras = Math.floor(tiempo / 3600);
        const dias = Math.floor(totalHoras / 24);
        const horas = totalHoras % 24;
        const minutos = Math.floor((tiempo % 3600) / 60);
        const segundos = Math.floor(tiempo % 60);

        return { dias, horas, minutos, segundos, tiempoTotal: tiempo };
      }

      const { dias, horas, minutos, segundos, tiempoTotal } = calcularTiempo();

      // Calcular experiencia total necesaria
      let totalExpNeeded = 0;
      if (nivelInicial < 400) {
        if (nivelDeseado <= 400) {
          totalExpNeeded = nExp[nivelDeseado - 1] - nExp[nivelInicial - 1];
        } else {
          totalExpNeeded = (nExp[399] - nExp[nivelInicial - 1]) + mExp[nivelDeseado - 401];
        }
      } else if (nivelInicial === 400) {
        totalExpNeeded = mExp[nivelDeseado - 401] - (masterExp[nivelInicial - 400] * (barra / 100));
      } else {
        totalExpNeeded = mExp[nivelDeseado - 401] - mExp[nivelInicial - 401] - (masterExp[nivelInicial - 400] * (barra / 100));
      }

      setResults({
        totalExpNeeded: Math.floor(totalExpNeeded),
        dias,
        horas,
        minutos,
        segundos,
        tiempoTotal: Math.floor(tiempoTotal),
        expPerHour: Math.floor(ex * 3600),
        nivelInicial,
        nivelDeseado,
        expSegundos: ex,
        porcentaje: barra
      });

      setIsCalculating(false);
    }, 500);
  };

  const clearForm = () => {
    setFormData({
      currentLevel: '',
      targetLevel: '',
      expPerSecond: '',
      expBar: '0'
    });
    setResults(null);
  };

  const formatTime = (seconds) => {
    if (seconds < 60) return `${seconds} segundos`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutos`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)} horas`;
    return `${Math.floor(seconds / 86400)} días`;
  };

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700/50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <Calculator className="w-8 h-8 mr-3 text-cyan-400" />
          EXP Calculator
        </h1>
        <p className="text-gray-400">Calculate the time needed to reach your desired level in MU Online</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <div className="space-y-6">
          <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2 text-cyan-400" />
              Datos del Personaje
            </h3>
            
            <div className="space-y-4">
              {/* Nivel Inicial */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Nivel Inicial
                </label>
                <input
                  type="number"
                  name="currentLevel"
                  value={formData.currentLevel}
                  onChange={handleInputChange}
                  placeholder="Ej: 150"
                  min="1"
                  max="400"
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Nivel Deseado */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Nivel Deseado
                </label>
                <input
                  type="number"
                  name="targetLevel"
                  value={formData.targetLevel}
                  onChange={handleInputChange}
                  placeholder="Ej: 200"
                  min="1"
                  max="400"
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Experiencia por segundo */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Experiencia por Segundo
                </label>
                <input
                  type="number"
                  name="expPerSecond"
                  value={formData.expPerSecond}
                  onChange={handleInputChange}
                  placeholder="Ej: 1500"
                  min="1"
                  step="0.1"
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Barra de Experiencia */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Barra de Experiencia Actual
                </label>
                <select
                  name="expBar"
                  value={formData.expBar}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>{i}/10 ({i * 10}%)</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botones */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={calculateExperience}
                disabled={isCalculating}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                {isCalculating ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4 mr-2" />
                    Calcular
                  </>
                )}
              </button>

              <button
                onClick={clearForm}
                className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Borrar
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="space-y-6">
          {results ? (
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-green-400" />
                Resultados del Cálculo
              </h3>
              
              <div className="space-y-4">
                {/* Datos Ingresados */}
                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-4 rounded-lg border border-blue-700/30 mb-4">
                  <h4 className="text-cyan-400 font-medium mb-3">Datos Ingresados:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Nivel inicial: <span className="text-cyan-400 font-medium">{results.nivelInicial}</span></div>
                    <div>Nivel deseado: <span className="text-cyan-400 font-medium">{results.nivelDeseado}</span></div>
                    <div>EXP/segundo: <span className="text-cyan-400 font-medium">{results.expSegundos}</span></div>
                    <div>Porcentaje inicial: <span className="text-cyan-400 font-medium">{results.porcentaje}%</span></div>
                  </div>
                </div>

                {/* Experiencia Total Necesaria */}
                <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg border border-purple-700/30">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Experiencia Total Necesaria:</span>
                    <span className="text-purple-400 font-bold text-lg">
                      {results.totalExpNeeded.toLocaleString()} EXP
                    </span>
                  </div>
                </div>

                {/* Tiempo Estimado - Formato como tu bot */}
                <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-lg border border-green-700/30">
                  <div className="flex items-center mb-3">
                    <Clock className="w-4 h-4 mr-2 text-green-400" />
                    <span className="text-gray-300 font-medium">Tiempo Estimado:</span>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/30 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">
                      {results.dias} Días {results.horas} Horas {results.minutos} Minutos
                    </div>
                    <div className="text-sm text-gray-400">
                      Total: {results.tiempoTotal.toLocaleString()} segundos
                    </div>
                  </div>
                </div>

                {/* Estadísticas Adicionales */}
                <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-4 rounded-lg border border-orange-700/30">
                  <div className="flex items-center mb-2">
                    <Zap className="w-4 h-4 mr-2 text-orange-400" />
                    <span className="text-gray-300 font-medium">Estadísticas:</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">EXP por Hora:</span>
                      <span className="text-orange-400 font-medium">{results.expPerHour.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">EXP por Día:</span>
                      <span className="text-orange-400 font-medium">{(results.expPerHour * 24).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 text-center">
              <Calculator className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">
                Completa los datos del formulario y haz clic en "Calcular" para ver los resultados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};