import { useState } from "react";

export default function LegalDocs() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-3 bg-[#6B1426] text-white rounded-lg shadow-lg hover:bg-[#8A1A36] transition-all duration-300 transform hover:scale-105 font-medium text-lg flex items-center justify-center mx-auto mb-4"
      >
        {isOpen ? (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            Hide Legal Documents
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            Show Privacy Policy & Terms
          </>
        )}
      </button>

      {isOpen && (
        <div className="mt-4 p-6 border-2 border-gray-100 rounded-xl bg-white shadow-xl max-h-[70vh] overflow-y-auto transition-all duration-300">
          {/* Privacy Policy Section */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-3 h-8 bg-[#6B1426] rounded-full mr-3"></div>
              <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700">
                This privacy policy applies to the <strong className="text-[#6B1426]">D Village</strong> app
                (hereby referred to as "Application") for mobile devices that was
                created by <strong className="text-[#6B1426]">Nanosoft Solutions</strong> (hereby referred
                to as "Service Provider") as a Free service. This service is intended
                for use "AS IS".
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-3 text-gray-800 border-l-4 border-[#6B1426] pl-3">
              Information Collection and Use
            </h2>
            <p className="text-gray-700 mb-3">
              The Application collects information when you download and use it.
              This information may include information such as:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li className="text-gray-700 p-2 bg-gray-50 rounded">Your device's Internet Protocol address (IP)</li>
              <li className="text-gray-700 p-2 bg-gray-50 rounded">
                The pages of the Application that you visit, the time and date of
                your visit
              </li>
              <li className="text-gray-700 p-2 bg-gray-50 rounded">The time spent on the Application</li>
              <li className="text-gray-700 p-2 bg-gray-50 rounded">The operating system you use on your mobile device</li>
            </ul>
          </div>

          {/* Terms & Conditions Section */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-3 h-8 bg-[#6B1426] rounded-full mr-3"></div>
              <h1 className="text-3xl font-bold text-gray-800">Terms & Conditions</h1>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-lg">
                <p className="text-gray-700 mb-4">
                  These terms and conditions apply to the <strong className="text-[#6B1426]">D Village</strong>{" "}
                  app (hereby referred to as "Application") for mobile devices that
                  was created by <strong className="text-[#6B1426]">Nanosoft Solutions</strong> (hereby referred
                  to as "Service Provider") as a Free service.
                </p>
                
                <p className="text-gray-700">
                  Upon downloading or utilizing the Application, you are automatically
                  agreeing to the following terms. It is strongly advised that you
                  thoroughly read and understand these terms prior to using the
                  Application.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Intellectual Property</h3>
                <p className="text-gray-700">
                  Unauthorized copying, modification of the Application, any part of the Application, 
                  or our trademarks is strictly prohibited. Any attempts to extract the source code 
                  of the Application, translate the Application into other languages, or create 
                  derivative versions are not permitted. All trademarks, copyrights, database rights, 
                  and other intellectual property rights related to the Application remain the property 
                  of the Service Provider.
                </p>
              </div>

              {/* Service Modifications */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Service Modifications</h3>
                <p className="text-gray-700">
                  The Service Provider is dedicated to ensuring that the Application is as beneficial 
                  and efficient as possible. As such, they reserve the right to modify the Application 
                  or charge for their services at any time and for any reason. The Service Provider 
                  assures you that any charges for the Application or its services will be clearly 
                  communicated to you.
                </p>
              </div>

              {/* Data Security */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Data Security</h3>
                <p className="text-gray-700 mb-3">
                  The Application stores and processes personal data that you have provided to the 
                  Service Provider in order to provide the Service. It is your responsibility to 
                  maintain the security of your phone and access to the Application.
                </p>
                <p className="text-gray-700">
                  The Service Provider strongly advise against jailbreaking or rooting your phone, 
                  which involves removing software restrictions and limitations imposed by the 
                  official operating system of your device. Such actions could expose your phone 
                  to malware, viruses, malicious programs, compromise your phone's security features, 
                  and may result in the Application not functioning correctly or at all.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Third-Party Services</h3>
                <p className="text-gray-700 mb-3">
                  Please note that the Application utilizes third-party services that have their 
                  own Terms and Conditions. Below are the links to the Terms and Conditions of the 
                  third-party service providers used by the Application:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                  <li className="text-gray-700">
                    <a href="https://expo.io/terms" target="_blank" rel="noopener noreferrer" 
                       className="text-[#6B1426] hover:underline">
                      Expo
                    </a>
                  </li>
                </ul>
              </div>

              {/* Internet Connectivity */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Internet Connectivity</h3>
                <p className="text-gray-700 mb-3">
                  Please be aware that the Service Provider does not assume responsibility for certain 
                  aspects. Some functions of the Application require an active internet connection, 
                  which can be Wi-Fi or provided by your mobile network provider. The Service Provider 
                  cannot be held responsible if the Application does not function at full capacity due 
                  to lack of access to Wi-Fi or if you have exhausted your data allowance.
                </p>
                <p className="text-gray-700">
                  If you are using the application outside of a Wi-Fi area, please be aware that your 
                  mobile network provider's agreement terms still apply. Consequently, you may incur 
                  charges from your mobile provider for data usage during the connection to the 
                  application, or other third-party charges.
                </p>
              </div>

              {/* Charges and Responsibilities */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Charges and Responsibilities</h3>
                <p className="text-gray-700 mb-3">
                  By using the application, you accept responsibility for any such charges, including 
                  roaming data charges if you use the application outside of your home territory 
                  (i.e., region or country) without disabling data roaming. If you are not the bill 
                  payer for the device on which you are using the application, they assume that you 
                  have obtained permission from the bill payer.
                </p>
                <p className="text-gray-700">
                  Similarly, the Service Provider cannot always assume responsibility for your usage 
                  of the application. For instance, it is your responsibility to ensure that your 
                  device remains charged. If your device runs out of battery and you are unable to 
                  access the Service, the Service Provider cannot be held responsible.
                </p>
              </div>

              {/* Liability */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Liability</h3>
                <p className="text-gray-700">
                  In terms of the Service Provider's responsibility for your use of the application, 
                  it is important to note that while they strive to ensure that it is updated and 
                  accurate at all times, they do rely on third parties to provide information to 
                  them so that they can make it available to you. The Service Provider accepts no 
                  liability for any loss, direct or indirect, that you experience as a result of 
                  relying entirely on this functionality of the application.
                </p>
              </div>

              {/* Updates and Termination */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Updates and Termination</h3>
                <p className="text-gray-700 mb-3">
                  The Service Provider may wish to update the application at some point. The application 
                  is currently available as per the requirements for the operating system (and for any 
                  additional systems they decide to extend the availability of the application to) may 
                  change, and you will need to download the updates if you want to continue using the 
                  application.
                </p>
                <p className="text-gray-700 mb-3">
                  The Service Provider does not guarantee that it will always update the application so 
                  that it is relevant to you and/or compatible with the particular operating system 
                  version installed on your device. However, you agree to always accept updates to the 
                  application when offered to you.
                </p>
                <p className="text-gray-700">
                  The Service Provider may also wish to cease providing the application and may terminate 
                  its use at any time without providing termination notice to you. Unless they inform you 
                  otherwise, upon any termination, (a) the rights and licenses granted to you in these 
                  terms will end; (b) you must cease using the application, and (if necessary) delete it 
                  from your device.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Changes to These Terms and Conditions</h3>
                <p className="text-gray-700 mb-3">
                  The Service Provider may periodically update their Terms and Conditions. Therefore, 
                  you are advised to review this page regularly for any changes. The Service Provider 
                  will notify you of any changes by posting the new Terms and Conditions on this page.
                </p>
                <p className="text-gray-700 font-medium">
                  These terms and conditions are effective as of 2025-09-25
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-[#6B1426]/5 p-5 rounded-lg border border-[#6B1426]/20">
                <h3 className="text-lg font-semibold text-[#6B1426] mb-3">Contact Us</h3>
                <p className="text-gray-700">
                  If you have any questions or suggestions about the Terms and Conditions, please do not 
                  hesitate to contact the Service Provider at{" "}
                  <a href="mailto:info@nanosoftsolutions.lk" className="text-[#6B1426] hover:underline font-medium">
                    info@nanosoftsolutions.lk
                  </a>.
                </p>
                <p className="text-sm text-gray-600 mt-3">
                  This Terms and Conditions page was generated by App Privacy Policy Generator
                </p>
              </div>
            </div>
          </div>

          {/* Effective Date */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 bg-[#6B1426]/5 p-3 rounded-lg text-center">
              <strong>Effective Date:</strong> 2025-09-25
            </p>
          </div>
        </div>
      )}
    </div>
  );
}