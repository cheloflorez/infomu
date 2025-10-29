import React from 'react';
import { Calculator, Sword } from 'lucide-react';
import { Link } from '../../contexts/RouterContext';
import { PageTemplate } from '../../components/common/PageTemplate';

export const toolsPages = () => (
  <PageTemplate title="Tools">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to="/tools/exp-calculator">
        <div className="bg-blue-700 p-6 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105">
          <Calculator className="w-12 h-12 text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">EXP Calculator</h3>
          <p className="text-blue-100">Calculate experience points needed for leveling.</p>
        </div>
      </Link>
      <Link to="/tools/build-simulator">
        <div className="bg-red-700 p-6 rounded-xl hover:opacity-90 transition-all duration-300 hover:scale-105">
          <Sword className="w-12 h-12 text-white mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Build Simulator</h3>
          <p className="text-red-100">Plan and simulate your character builds.</p>
        </div>
      </Link>
    </div>
  </PageTemplate>
);