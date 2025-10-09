import React from 'react';
import {
    Sword, Shield, Clock, Users, Target, AlertTriangle,
    Crown, Gem, Trophy, Map, Info, Zap, Star, CheckCircle,
    ArrowRight, Calendar, Timer
} from 'lucide-react';

export const BloodCastle = () => {
    return (
        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 flex justify-center">
                    {/* Placeholder para imagen */}
                    <div className="w-full max-w-sm h-72 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-xl border border-red-700/30 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <div className="text-4xl mb-2">🏰</div>
                            <div className="text-sm">Blood Castle Image</div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Blood Castle</h2>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            El Arcángel, uno de los guerreros más poderosos del Continente de MU, ha estado protegiendo
                            en secreto las tierras que juró defender. Mientras la presencia de Kundun se acerca, el
                            Arcángel ha estado rechazando a todos los monstruos que intentan invadir el Continente.
                        </p>

                        <p>
                            Pero lamentablemente, nuestro Guardián Arcángel no puede defenderse solo para siempre.
                            El ejército de Kundun ha invadido su castillo y ha superado la fuerza del Arcángel.
                            Herido y en peligro, convoca a los guerreros de MU para que lo ayuden en su momento de mayor necesidad.
                        </p>

                        <p>
                            Sin poder recuperar sus fuerzas sin su Arma Divina del Arcángel, se te ha pedido infiltrarte
                            en este castillo ahora dominado y recuperar su arma. Lucha a través del puente, gana entrada
                            al castillo, sé el primero en recuperar el Arma Divina y devuélvesela para completar el evento.
                        </p>

                        <div className="bg-red-900/20 p-4 rounded-lg border border-red-700/30 mt-4">
                            <p className="text-red-300 font-medium">
                                Con la Capa de Invisibilidad, tendrás acceso a los terrenos del castillo.
                                ¿Podrás infiltrarte y recuperar lo necesario sin temor?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};