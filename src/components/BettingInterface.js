export default function BettingInterface() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Is Eugene Ng going to get sentenced to death in Singapore?</h2>
        
        <div className="grid grid-cols-1 gap-3 mb-6">
          <button className="bg-green-500 hover:bg-green-600 p-3 rounded-lg flex justify-between items-center w-full">
            <span className="flex items-center gap-2 font-semibold">51.1% Yes</span>
            <div className="text-sm">
              <div>1.96</div>
              <div className="text-green-300">-104.00</div>
            </div>
          </button>
          
          <button className="bg-red-500 hover:bg-red-600 p-3 rounded-lg flex justify-between items-center w-full">
            <span className="flex items-center gap-2 font-semibold">48.9% No</span>
            <div className="text-sm">
              <div>2.04</div>
              <div className="text-red-300">104.00</div>
            </div>
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-300">
              There are receipts...
            </p>
          </div>

          <div className="flex justify-between text-sm text-gray-400">
            <div>
              <div>Source:</div>
              <div>cointelegraph.com</div>
            </div>
            <div>
              <div>Time Zone:</div>
              <div>America/New_York (EST)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800/50 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">Amount</label>
          <div className="mb-4">
            <div className="bg-gray-700/50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Attention</span>
              </div>
              <p className="text-sm text-gray-300">
                Payout value for your wager will change in real-time based on total combined action prior to a prediction market event closing.
              </p>
            </div>
          </div>
          <div className="relative">
            <input
              type="number"
              className="w-full bg-gray-700/50 rounded-lg p-3 text-white pr-16"
              placeholder="0"
            />
            <button className="absolute right-2 top-2 bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm">
              Max
            </button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm">
            <span>Potential win</span>
            <span>$0</span>
          </div>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg font-semibold">
          Log in
        </button>
        
        <div className="mt-4 flex justify-center">
          <img src="/images/retardio-casino.svg" alt="Retardio Casino" className="h-12" />
        </div>
      </div>
    </div>
  );
}