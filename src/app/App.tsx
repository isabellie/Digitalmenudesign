import { MenuItem } from "./components/MenuItem";
import { MenuSection } from "./components/MenuSection";
const logo = new URL("../assets/yxlogo.png", import.meta.url).href;
const fallbackLogo = new URL(
  "../assets/cb58cee0b3cb501980db1afb6c21eea550dcb8f3.png",
  import.meta.url,
).href;
const burgerImage = new URL("../assets/burger.png", import.meta.url).href;
const lovstekImage = new URL(
  "../assets/lovstek88485_7810484135934896261_n.jpg",
  import.meta.url,
).href;
const polseImage = `${new URL("../assets/polse.png", import.meta.url).href}?v=2`;
const softisImage = new URL("../assets/softis2.jpeg", import.meta.url).href;

export default function App() {
  return (
    <div className="h-screen bg-gray-50 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="bg-[#cf112e] text-white h-24 py-0.5 px-8 shadow-lg">
        <div className="max-w-[1920px] mx-auto h-full flex items-center gap-6">
          <div className="w-20 h-20 flex items-center justify-center shrink-0">
            <img
              src={logo}
              alt="YX Logo"
              className="max-w-full max-h-full object-contain"
              onError={(event) => {
                event.currentTarget.src = fallbackLogo;
              }}
            />
          </div>
          <h1 className="text-5xl font-semibold leading-none">Nygårdsjøen</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-[1920px] mx-auto px-8 py-6 overflow-hidden">
        <div className="grid grid-cols-3 gap-5 h-full">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Burgers Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">
                Burgermeny
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div>
                  <h3 className="mb-1">Beef burger</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">100g</span>
                      <span>139,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150g</span>
                      <span>159,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g</span>
                      <span>179,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">300g</span>
                      <span>229,-</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <h3 className="mb-1">Cheese burger</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">100g</span>
                      <span>151,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150g</span>
                      <span>170,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g</span>
                      <span>190,-</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <h3 className="mb-1">Bacon & cheese burger</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">100g</span>
                      <span>174,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150g</span>
                      <span>193,-</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g</span>
                      <span>213,-</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sausages Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">
                Pølsemeny
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Burger dog</span>
                  <span>69,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Grillpølse</span>
                  <span>72,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Ost & bacon pølse</span>
                  <span>74,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Pølse m/pommes frites</span>
                  <span>95,-</span>
                </div>
              </div>
            </section>
          </div>

          {/* Middle Column */}
          <div className="space-y-4">
            {/* Plate Dishes Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">
                Tallerkenretter m/pommes frites
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Kyllingnuggets 5 stk.</span>
                  <span>149,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Biffsnadder</span>
                  <span>179,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Løvstek</span>
                  <span>179,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Kyllingtallerken</span>
                  <span>229,-</span>
                </div>
              </div>
            </section>

            {/* Extras/Sides Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">
                Tilbehør
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Sprøstekt løk / rå løk</span>
                  <span>7 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Rekesalat</span>
                  <span>10 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Potetsalat</span>
                  <span>10 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Ost</span>
                  <span>16 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Bacon</span>
                  <span>18 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Ekstra dressing</span>
                  <span>19 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Potetmos</span>
                  <span>39 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Pommes frites</span>
                  <span>55 ,-</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200">
                  <span>Drikke til maten</span>
                  <span>+30 ,-</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-4 pt-10">
            {/* Food Images Section */}
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <img
                  src={burgerImage}
                  alt="Burger"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <img
                  src={lovstekImage}
                  alt="Løvstek"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <img
                  src={polseImage}
                  alt="Pølse"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-md overflow-hidden shadow-sm">
                <img
                  src={softisImage}
                  alt="Softis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Softis Section */}
            <section>
              <h2 className="text-2xl mb-3 pb-2 border-b-2 border-[#cf112e]">
                Softis
              </h2>
              <div className="bg-white rounded-lg shadow-md p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Liten</span>
                  <span>59 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Stor</span>
                  <span>69 ,-</span>
                </div>
                <div className="flex justify-between">
                  <span>Strøssel</span>
                  <span>7 ,-</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
