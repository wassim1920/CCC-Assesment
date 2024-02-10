const MockData = [
  {
    userEmail: "Ste159@gmail.com",
  },
  {
    userEmail: "Ste159412@gmail.com",
  },
  {
    userEmail: "Ste159412@cayonCloud.com",
  },
];

exports.userSubscription = async (req, res) => {
  
  const { userEmail } = req.body;
  const isEmailExists = MockData.some((user) => user.userEmail === userEmail);

  if (isEmailExists) {
    return res.status(200).json({ message: "User subscribed successfully!" });
  } else {
    return res.status(400).json({ message: "Email does not correspond." });
  }
};
