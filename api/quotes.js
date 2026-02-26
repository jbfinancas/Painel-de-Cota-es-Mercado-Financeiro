export default async function handler(req, res) {
  const symbols =
    "PETR4.SA,VALE3.SA,^BVSP,^GSPC,^IXIC,^DJI,GC=F,SI=F,CL=F,BZ=F";

  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbols}`
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
}
