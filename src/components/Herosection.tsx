import {  MessageSquare, Upload, Zap, Shield, Clock } from 'lucide-react';
export default function Herosection() {
  return (
    <div><main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Chat With Your
              <br />
              <span className="relative">
                PDF Documents
               
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Upload your PDFs and have intelligent conversations with your documents. 
              Get instant answers powered by advanced AI technology.
            </p>

            {/* CTA Buttons - Highlighted */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a 
                href="/upload" 
                className="group relative px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <Upload className="w-5 h-5" />
                <span>Upload PDF</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
              </a>
              
              <a 
                href="/chat" 
                className="group relative px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start Chatting</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                </span>
              </a>
            </div>
          </div>

          {/* Features */}
          <div id="features" className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-black transition">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">
                Get instant responses to your questions with our optimized RAG pipeline.
              </p>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-black transition">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your documents are processed securely and remain completely private.
              </p>
            </div>

            <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-black transition">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Access</h3>
              <p className="text-gray-600">
                Access your documents and chat with them anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </main>
      </div>
  )
}
