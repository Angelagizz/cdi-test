exports.alphabetSort = (req, res) => {
    const str = req.body.words;
    const x = str.split("");
    const result = x.sort().join("");
    return res.status(200).json({
        statusText: "Ok",
        message: "Success Sort Alphabet",
        result,
    });
};

// www.heroku.applicationCache.com/digital/castellum/api/alphabet/sort