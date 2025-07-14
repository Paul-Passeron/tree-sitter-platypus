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
                $.if_statement,
                $.while_statement,
                $.do_statement,
            ),

        number: ($) => /\d+/,

        string: ($) => /"[^"]*"/,

        word: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,

        comment: ($) => /#.*/,

        if_statement: ($) =>
            seq(
                "if",
                repeat($._statement),
                optional(seq("else", repeat($._statement))),
                "endif",
            ),

        while_statement: ($) => seq("while", repeat($._statement), "endwhile"),

        do_statement: ($) => seq("do", repeat($._statement), "endwhile"),
    },
});
