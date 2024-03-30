/** @type LanguageFn */

/* Made by Emma Skovgaard */

export default function (hljs) {
    return {
        name: 'JCL',
        aliases: ['z/OS JCL', 'Job Control Language'],
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
                'SPACE',
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
                'DLM',
                "RLS",
                "PATH",
                "PATHDISP",
                "PATHMODE",
                "PATHOPTS",
                "PROTECT",
                "RECFM",
                "RECORG",
                "REFDD",
                "RETPD",
                "ROACCESS",
                "TERM",
                "UCS",
                "UNIT",
                "VOLUME",
                "SPIN",
                "MAXGENS",
                "MGMTCLASS",
                "FCB",
                "FILEDATA",
                "FLASH",
                "FREE",
                "FREEVOL",
                "GDGORDER",
                "HOLD",
                "DATA",
                "DATACLAS",
                "CHARS",
                "DEST",
                "DDNAME",
                "DCB",
                "LIKE",
                "LRECL",
                "LABEL",
                "LGSTREAM",
                "KEYOFF",
                "KEYLEN",
                "KEYLABL1",
                "KEYLABL2",
                "KEYENCD1",
                "KEYENCD2",
                "EATTR",
                "EXPDT",
            ],
            type: [
                "NEW",
                "MOD",
                "OLD",
                "DELETE",
                "CATLG",
                "UNCATLG",
                "PASS",
                "SHR",

                "TRK",
                "CYL",
                "blklgth",
                "reclgth"
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