export default async function handler(req, res) {

  const apiKey = "Oay6GI5jATMcfGjq7f7Z9vYDFxwsDCjF";

  const symbols = [
    "PETR4.SA",
    "VALE3.SA",
    "^BVSP",
    "^GSPC",
    "GCUSD",
    "CLUSD"
  ];

  try {
    const response = await fetch(
      `https://financialmodelingprep.com/api/v3/quote/${symbols.join(",")}?apikey=${apiKey}`
    );

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
}
