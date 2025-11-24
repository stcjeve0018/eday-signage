export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-white">Eday 一代廣告</h3>
            <p className="text-gray-500 text-sm mt-1">專業招牌設計與製作，點亮您的品牌。</p>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eday Advertising. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}