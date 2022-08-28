const sleep = (t) => new Promise((resolve) => setTimeout(resolve, t));

export default async function handler(req, res) {
  await sleep(400); // fake server side handling
  if (req.method === "POST") {
    const { name, email } = req.body;
    if (name === "testing" && email === "testing@tandm.ai") {
      return res.status(200).json({ name, email });
    } else {
      return res
        .status(403)
        .json({ msg: "Please ensure to input right name with email" });
    }
  }
}
