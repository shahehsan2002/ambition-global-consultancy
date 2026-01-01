import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFlag, FaUniversity, FaBriefcase, FaMoneyBillWave, FaPassport } from 'react-icons/fa';

const CountryComparator = () => {
    const [countryA, setCountryA] = useState('UK');
    const [countryB, setCountryB] = useState('Canada');

    const data = {
        'UK': {
            tuition: '£12,000 - £25,000',
            living: '£12,000 / year',
            work: '20hrs/week (Term time)',
            psw: '2 Years (Graduate Route)',
            pr: 'Hard (Requires 5yr Skilled Worker)',
            flag: '🇬🇧'
        },
        'Canada': {
            tuition: 'CAD 15,000 - 35,000',
            living: 'CAD 15,000 / year',
            work: '20hrs/week',
            psw: 'Up to 3 Years (PGWP)',
            pr: 'High (Points based Express Entry)',
            flag: '🇨🇦'
        },
        'USA': {
            tuition: '$20,000 - $50,000',
            living: '$15,000 / year',
            work: 'On-Campus Only',
            psw: '1-3 Years (OPT)',
            pr: 'Very Hard (H1B Lottery)',
            flag: '🇺🇸'
        },
        'Australia': {
            tuition: 'AUD 30,000 - 45,000',
            living: 'AUD 21,000 / year',
            work: '48hrs/fortnight',
            psw: '2-4 Years',
            pr: 'Moderate (Regional pathways)',
            flag: '🇦🇺'
        }
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                <FaFlag className="text-primary" /> Country Comparator
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <select 
                    value={countryA} 
                    onChange={(e) => setCountryA(e.target.value)}
                    className="select select-bordered w-full bg-slate-50 dark:bg-slate-700 dark:text-white"
                >
                    {Object.keys(data).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <select 
                    value={countryB} 
                    onChange={(e) => setCountryB(e.target.value)}
                    className="select select-bordered w-full bg-slate-50 dark:bg-slate-700 dark:text-white"
                >
                    {Object.keys(data).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-slate-500 dark:text-slate-400">
                            <th>Feature</th>
                            <th className="text-primary font-bold text-lg">{data[countryA].flag} {countryA}</th>
                            <th className="text-secondary font-bold text-lg">{data[countryB].flag} {countryB}</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-700 dark:text-slate-300">
                        <tr>
                            <td className="font-semibold"><div className="flex items-center gap-2"><FaUniversity /> Tuition</div></td>
                            <td>{data[countryA].tuition}</td>
                            <td>{data[countryB].tuition}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold"><div className="flex items-center gap-2"><FaMoneyBillWave /> Living Cost</div></td>
                            <td>{data[countryA].living}</td>
                            <td>{data[countryB].living}</td>
                        </tr>
                         <tr>
                            <td className="font-semibold"><div className="flex items-center gap-2"><FaBriefcase /> Work Rights</div></td>
                            <td>{data[countryA].work}</td>
                            <td>{data[countryB].work}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold"><div className="flex items-center gap-2"><FaPassport /> Post-Study Visa</div></td>
                            <td>{data[countryA].psw}</td>
                            <td>{data[countryB].psw}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold"><div className="flex items-center gap-2">PR Opportunity</div></td>
                            <td className={data[countryA].pr.includes('High') ? 'text-green-600 font-bold' : ''}>{data[countryA].pr}</td>
                            <td className={data[countryB].pr.includes('High') ? 'text-green-600 font-bold' : ''}>{data[countryB].pr}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CountryComparator;
