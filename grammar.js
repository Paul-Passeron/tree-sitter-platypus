module.exports = grammar({
  name: "platypus",

  rules: {
    source_file: ($) => repeat($._statement),

    _statement: ($) =>
      choice(
        $.number,
        $.string,
        $.word,
        $.comment,
        $.op,
        $.if_statement,
        $.while_statement,
      ),

    number: ($) => /\d+/,

    string: ($) => /"[^"]*"/,

    word: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,

    comment: ($) => /\/\/.*/,

    if_statement: ($) =>
      seq(
        "if",
        repeat($._statement),
        optional(seq("else", repeat($._statement))),
        "endif",
      ),

    op: ($) => /[+\-*/%]/,

    while_statement: ($) =>
      seq(
        "while",
        repeat($._statement),
        "do",
        repeat($._statement),
        "endwhile",
      ),
  },
});
