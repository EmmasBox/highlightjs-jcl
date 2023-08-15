/** @type LanguageFn */
export default function (hljs) {
    return {
        name: 'JCL',
        aliases: ['z/OS JCL','Job Control Language'],
        case_insensitive: false,
        keywords: {
            keyword: [
                'JOB',
                'EXEC',
                'DD'
            ],
            meta: [

            ]
        },
        contains: [

        ]
    }
}