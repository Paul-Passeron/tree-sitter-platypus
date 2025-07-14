; Keywords
"if" @keyword.conditional
"else" @keyword.conditional
"endif" @keyword.conditional
"while" @keyword.repeat
"endwhile" @keyword.repeat
"do" @keyword.repeat

; Literals
(number) @constant.numeric
(string) @string

; Comments
(comment) @comment

; Function calls and built-ins
((word) @function.builtin
 (#match? @function.builtin "^(print|println|dup|drop|swap|len|\\+|\\-|\\*|/)$"))

; Other words (variables/user-defined)
(word) @variable
