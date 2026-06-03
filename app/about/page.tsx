'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumbs Navigation */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-900 transition">गृहपृष्ठ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium">हाम्रो बारेमा</span>
        </nav>

        {/* Core Introduction Panel */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">हाम्रो परिचय</h1>
          <p className="text-sm text-emerald-600 font-medium uppercase tracking-wider mb-4">Centrist Economic Club (CEC)</p>
          <div className="w-16 h-1 bg-blue-900 rounded-full mb-6"></div>
          
          <p className="text-gray-600 leading-relaxed mb-4 text-base">
            Centrist Economic Club एउटा यस्तो विशेष र संगठित सञ्जाल (Networking Body) हो, जसको स्थापना मध्यमार्गी विचारधारा (Centrist Ideology) को आर्थिक एजेन्डा र नागरिकतन्त्र (Citizenism) को जगलाई बलियो बनाउनका लागि गरिएको हो।
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            यो कुनै परम्परागत राजनीतिक दल वा साधारण क्लब नभएर आर्थिक रूपान्तरणका लागि कार्य गर्ने एउटा रणनीतिक र व्यावहारिक संयन्त्र हो।
          </p>
        </div>

        {/* Section 1: Main Goals & Targets */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-950 rounded-full inline-block"></span>
            १. मुख्य उद्देश्य र लक्ष्य (Goal)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-blue-900">
              <h3 className="font-bold text-gray-900 mb-2 text-base">#आर्थिकआत्मनिर्भरता</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                परम्परागत पूँजीवाद (Capitalism) र समाजवाद (Socialism) को कडा र अव्यावहारिक नीतिहरूभन्दा माथि उठेर एक सन्तुलित, समुदायमा आधारित आर्थिक मोडलको विकास गर्नु यसको मुख्य लक्ष्य हो।
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-emerald-600">
              <h3 className="font-bold text-gray-900 mb-2 text-base">#प्रतिव्यक्तिआयवृद्धि</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                यस क्लबको प्रमुख संकल्प यस क्लबमा भएका नागरिकहरूको औसत वार्षिक प्रतिव्यक्ति आयलाई **$५,००० USD** सम्म पुर्‍याउने वातावरण तयार गर्नु हो।
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-amber-500">
              <h3 className="font-bold text-gray-900 mb-2 text-base">#समुदायवाद (Community Economy)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                स्थानीय स्रोत, साधन र पूँजीलाई एकीकृत गर्दै समुदायकै हित र स्वामित्वमा आर्थिक गतिविधिहरू सञ्चालन गर्नु।
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Organizational Structure */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-950 rounded-full inline-block"></span>
            २. संगठनात्मक संरचना र विस्तार
          </h2>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              यो क्लब तल्लो तहदेखि केन्द्रसम्म एकदमै व्यवस्थित र गणितीय संरचनामा आधारित छ। यसको सांगठनिक ढाँचा यस प्रकार छ:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">८,५७५ आर्थिक योद्धा (Centrist Economic Warriors)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  यस अभियान अन्तर्गत देशभरिका विभिन्न प्रशासनिक निकायहरू (जस्तै: वडा, पालिका, जिल्ला र प्रदेश) मा कुल ८,५७५ जना सक्रिय र प्रशिक्षित सदस्यहरूलाई जोड्ने ठुलो लक्ष्य राखिएको छ।
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-1">१५+१ समुदाय क्लस्टर (15+1 Community Cluster)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  समाजका हरेक वर्ग र क्षेत्रको समान र व्यवस्थित प्रतिनिधित्व सुनिश्चित गर्नका लागि यसमा १६ वटा विशेष क्लस्टर (समूह) को प्रतिनिधित्व मोडल अपनाइएको छ।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Workfields & Features */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-950 rounded-full inline-block"></span>
            ३. मुख्य कार्यक्षेत्र र विशेषताहरू
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-3 font-bold text-sm">A</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">फिजिटल अर्थतन्त्र (Phygital Economy)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                परम्परागत भौतिक सीप, कृषि र उत्पादनलाई आधुनिक डिजिटल प्रविधिसँग जोडेर नयाँ युगको अर्थतन्त्र निर्माणमा जोड दिन्छ।
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-emerald-50 text-emerald-700 rounded-lg flex items-center justify-center mb-3 font-bold text-sm">B</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">सचेतना र प्रशिक्षण</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                आर्थिक क्लबका सदस्यहरूलाई व्यवसाय व्यवस्थापन, वित्तीय साक्षरता, र मध्यमार्गी आर्थिक नीतिहरूको बारेमा नियमित प्रशिक्षण दिइन्छ।
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-3 font-bold text-sm">C</div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm">नागरिक केन्द्रित लगानी</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                यसले ठुला कर्पोरेट घराना वा राज्यको एकलौटी नियन्त्रणको साटो साधारण नागरिकहरूको सामूहिक लगानी र मुनाफा वितरणमा विश्वास राख्दछ।
              </p>
            </div>
          </div>
        </div>

        {/* Summary Footer Alert */}
        <div className="bg-blue-950 rounded-2xl p-6 text-white text-center shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-900/30 rounded-full blur-xl pointer-events-none"></div>
          <h3 className="text-lg font-bold mb-2">सङ्क्षेपमा भन्नुपर्दा:</h3>
          <p className="text-sm text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Centrist Economic Club एउटा यस्तो साझा मञ्च हो, जहाँ नागरिकहरू राजनीतिक दलको इसारामा होइन, बल्कि आफ्नै आर्थिक एजेन्डा, उत्पादनशीलता र मध्यमार्गी सोचका साथ एकजुट भएर आर्थिक क्रान्तिको नेतृत्व गर्छन्।
          </p>
        </div>

      </div>
    </main>
  );
}