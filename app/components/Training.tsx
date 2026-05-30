// components/TrainingProgram.tsx
import React from 'react';
import { BookOpen } from 'lucide-react';
import { Topic } from '../type';

export default function Training() {
  const literacies: Topic[] = [
    { title: "Digital Literacy (डिजिटल साक्षरता)", desc: "आधुनिक प्रविधि, कम्प्युटर, इन्टरनेट र डिजिटल प्रणालीको प्रयोग सम्बन्धी ज्ञान।" },
    { title: "Financial Literacy (वित्तीय साक्षरता)", desc: "पैसाको व्यवस्थापन, बचत, लगानी र बैंकिङ कारोबार सम्बन्धी शिक्षा।" },
    { title: "SME Literacy (साना तथा मझौला उद्योग)", desc: "साना र मझौला व्यवसायहरू कसरी सुरु गर्ने, चलाउने र बढाउने भन्ने सम्बन्धी तालीम।" },
    { title: "Share Market Literacy (सेयर बजार)", desc: "सेयर बजार (Stock Market), प्राथमिक सेयर (IPO) र दोस्रो बजारमा सुरक्षित लगानी गर्ने तरिका।" },
    { title: "Insurance Literacy (बिमा साक्षरता)", desc: "जीवन तथा निर्जीवन बिमाको महत्त्व र यसका फाइदाहरू सम्बन्धी जानकारी।" },
  ];

  const philosophies: Topic[] = [
    { title: "Centrist Ideology (मध्यमार्गी विचारधारा)", desc: "न त उग्र वामपन्थी (Left), न त उग्र दक्षिणपन्थी (Right)—सबैलाई मिलाएर लैजाने सन्तुलित आर्थिक र राजनीतिक मध्यमार्गी बाटो।" },
    { title: "Citizenism (नागरिकवाद)", desc: "राज्यका नीति र विकासको केन्द्रविन्दुमा नागरिकको हकहित र कल्याणलाई राख्ने सिद्धान्त।" },
    { title: "Community-base Economic (समुदायमा आधारित अर्थतन्त्र)", desc: "स्थानीय समुदायको सहभागिता, स्रोत र साधनको अधिकतम उपयोग गरेर सामूहिक हितका लागि गरिने आर्थिक गतिविधि।" },
    { title: "Unite & Rule (एकता र नेतृत्व)", desc: "फुटाएर होइन, समाजका विभिन्न वर्ग र समुदायलाई एकजुट गराई (Unite) सही ढंगले नेतृत्व वा शासन (Rule) गर्ने नीति।" },
  ];

  return (
    <section id="training" className="py-12 md:py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-12 flex items-center justify-center gap-2">
          <BookOpen className="w-8 h-8" />
          प्रशिक्षण कार्यक्रम (Training)
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Column 1: Literacy Programs */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900">
              <span className="bg-blue-900 text-white px-3 py-1 rounded text-sm sm:text-base">क</span>
              साक्षरता कार्यक्रम (Literacy Program)
            </h3>
            
            <div className="space-y-4">
              {literacies.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-900 border border-gray-100" itemScope itemType="https://schema.org/Course">
                  <h4 className="font-bold text-lg text-blue-900" itemProp="name">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1" itemProp="description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Philosophy */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-900">
              <span className="bg-blue-900 text-white px-3 py-1 rounded text-sm sm:text-base">ख</span>
              पूर्वीय दर्शन र विचारधारा
            </h3>

            <div className="space-y-4">
              {philosophies.map((item, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500 border border-gray-100" itemScope itemType="https://schema.org/Course">
                  <h4 className="font-bold text-lg text-green-700" itemProp="name">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1" itemProp="description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}