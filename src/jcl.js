/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'JCL',
        aliases: ['z/OS JCL','Job Control Language'],
        case_insensitive: false,
        keywords: {
            keyword: [
                'JOB',
                'EXEC',
                'DD',
                'OUTPUT',
                'EXPORT',
                'INCLUDE',
                'NOTIFY',
                'SCHEDULE',
                'PEND',
                'SET',
                'JCLLIB',
                'ENDCTNL',
                'XMIT',
                'PROC',

                'IF',
                'THEN',
                'ELSE',
                'ENDIF'
            ],
            built_in: [
                'DSN',
                'ZFSDSN',
                'DISP',
                'PGM',
                'MSGLEVEL',
                'MSGCLASS',
                'REGION',
                'COND',
                'CCSID',
                'ACCT',
                'PARMDD',
                'DYNAMNBR',
                'PERFORM',
                'MEMLIMIT',
                'TIME',
                'RD',
                'PROC',
                'SYSOUT',
                'SYSIN',
                'DLM'
            ],
            meta: [
                '//',
                '/*'
            ]
        },
        contains: [
            hljs.COMMENT(
                /\/\/\*.*/
            ),
            {
                scope: 'string',
                begin: "'", end: "'"
            },
            {
                scope: 'operator',
                begin: /(=|\*)/
            },
            {
                scope: 'number',
                begin: /\s([0-9]+(?:(\.)[0-9]+)*)/
            },
        ]
    }
}