export default async function handler(req, res) {

  const apiKey = "0f12688e638943a18c0bec2102cb718c";

  const symbols = [
    "PETR4:B3",
    "VALE3:B3",
    "IBOV:B3",
    "SPY",
    "QQQ",
    "XAU/USD",
    "USOIL"
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
