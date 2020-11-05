


// [].map()

////////////////// EXAMPLE 1 ///////////////////////////

const programming_languages_names = [
    'c++',
    'python',
    'javascript',
    'typescript',
    'java',
    'ruby',
    'c#',
    'pascal'
]

// common way
let programming_languages = []
for (const language_name of programming_languages_names) {

    programming_languages.push({
        language_name
    })
}

console.log(
    programming_languages
)





