// components/OrganizationalStructure.tsx
import React from 'react';
import { Role } from '../type';

export default function Structure() {
  const roles: Role[] = [
    { title: "प्रदेश संयोजक", count: 7, note: "(नेपालका ७ वटा प्रदेशका लागि)" },
    { title: "जिल्ला संयोजक", count: 77, note: "(नेपालका ७७ वटा जिल्लाका लागि)" },
    { title: "संघीय निर्वाचन क्षेत्र संयोजक", count: 165, note: "(प्रतिनिधि सभाका १६५ निर्वाचन क्षेत्र)" },
    { title: "प्रदेश निर्वाचन क्षेत्र संयोजक", count: 330, note: "(प्रदेश सभाका ३३० निर्वाचन क्षेत्र)" },
    { title: "स्थानीय तह संयोजक", count: 753, note: "(नेपालका ७५३ वटा स्थानीय पालिकाहरू)" },
    { title: "वडा संयोजक", count: 6743, note: "(नेपालभरिका कुल ६,७४३ वडाहरू)" },
    { title: "क्लबका सहयोगीहरू", count: 500, note: "" },
  ];

  return (
    <section id="structure" className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 border-b-4 border-green-500 inline-block pb-2">
            संगठनात्मक संरचना (Total = 8575 Persons)
          </h2>
        </div>

        {/* Grid Framework */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" itemScope itemType="https://schema.org/ItemList">
          {roles.map((role, index) => (
            <div key={index} className="border border-gray-200 p-6 rounded-lg shadow-sm bg-gray-50 hover:shadow-md transition" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="position" content={String(index + 1)} />
              <span className="block text-4xl font-bold text-green-600 mb-2">{role.count.toLocaleString()}</span>
              <h3 className="text-xl font-semibold text-blue-900" itemProp="name">{role.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{role.note}</p>
            </div>
          ))}
        </div>

        {/* Structured Data Table */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">क्लबको संगठित ढाँचा तालिका:</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-4 font-bold text-gray-700 text-base w-1/3">पक्ष</th>
                  <th className="p-4 font-bold text-gray-700 text-base">विवरण</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">मार्गदर्शक सिद्धान्त</td>
                  <td className="p-4">मध्यमार्गी विचारधारा (Centrist Ideology) र नागरिकतन्त्र (Citizenism)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">मुख्य मोडेल</td>
                  <td className="p-4">समुदायवाद र फिजिटल अर्थतन्त्र (Phygital Economy)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50/50">आर्थिक लक्ष्य</td>
                  <td className="p-4 font-bold text-blue-900">प्रतिव्यक्ति आय $५,००० USD पुर्‍याउने लक्ष्य</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center mt-10 text-lg font-medium text-gray-700">
          जम्मा ८,५७५ जना संयोजकहरु सहभागी हुनेछन्। <br/>
          सहभागी संयोजकहरूको प्रति व्यक्ति आम्दानी $5000/- को लक्ष्य सहित प्रशिक्षणमा सहभागी हुनेछ।
        </p>
      </div>
    </section>
  );
}