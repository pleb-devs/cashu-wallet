const Wallet = () => {
  return (
    <main>
      <div class="cashu-operations-container">
        <div class="section">
          <label for="mintu-url">Mintu URL:</label>
          <input type="text" className="mintu-url" />
          <button className="mint-connect-button">Set Mint</button>
        </div>

        <div class="section">
          <h2>Minting Tokens</h2>
          <label for="mint-amount">Amount:</label>
          <input type="number" id="mint-amount" className="mint-amount" />
          <button id="mint-button" className="mint-button">
            Mint
          </button>
        </div>

        <div class="section">
          <h2>Melt Tokens</h2>
          <label for="melt-invoice">Bolt11 Invoice:</label>
          <input type="text" id="melt-invoice" className="melt-invoice" />
          <button id="melt-button" className="melt-button">
            Melt
          </button>
        </div>

        <div class="section">
          <h2>Swap Tokens</h2>
          <label for="swap-amount">Amount:</label>
          <input type="number" id="swap-amount" className="swap-amount" />
          <button id="swap-send-button" className="swap-send-button">
            Swap to Send
          </button>
          <label for="swap-token">Token:</label>
          <input type="text" id="swap-token" className="swap-token" />
          <button id="swap-claim-button" className="swap-claim-button">
            Swap to Claim
          </button>
        </div>
      </div>

      <div className="data-display-container">
        <h2>Data Display</h2>
        <pre id="data-output" className="data-output">
          {}
        </pre>
      </div>
    </main>
  );
};

export default Wallet;
