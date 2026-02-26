export default async function handler(req, res) {

  const apiKey = "0f12688e638943a18c0bec2102cb718c";

  const symbols = [
    "SPY",
    "QQQ",
    "DIA",
    "XAU/USD",
    "BTC/USD"
  ];

  try {

    const response = await fetch(
      `https://api.twelvedata.com/quote?symbol=${symbols.join(",")}&apikey=${apiKey}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
}
