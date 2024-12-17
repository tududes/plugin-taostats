Project Path: eliza-plugin-starter

Source Tree:

```
eliza-plugin-starter
├── pnpm-lock.yaml
├── package.json
├── docs
│   └── PLUGIN_GUIDE.md
├── tsconfig.json
├── src
│   ├── plugins
│   │   ├── exa
│   │   │   └── index.ts
│   │   └── tavily
│   │       └── index.ts
│   ├── index.ts
│   └── common
│       ├── types.ts
│       └── utils.ts
├── README.md
├── dist
│   ├── plugins
│   │   ├── exa
│   │   │   ├── index.js
│   │   │   └── index.d.ts
│   │   └── tavily
│   │       ├── index.js
│   │       └── index.d.ts
│   ├── common
│   │   ├── utils.js
│   │   ├── types.js
│   │   ├── utils.d.ts
│   │   └── types.d.ts
│   ├── index.js
│   └── index.d.ts
├── IMPLEMENTATION_PLAN.md
├── node_modules
│   ├── @eslint-community
│   │   ├── eslint-utils
│   │   └── regexpp
│   ├── jest
│   ├── typescript
│   ├── eslint-scope
│   ├── ts-jest
│   ├── prettier
│   ├── @ai16z
│   │   └── eliza
│   ├── @types
│   │   ├── jest
│   │   └── node
│   ├── eslint
│   ├── @typescript-eslint
│   │   ├── types
│   │   ├── visitor-keys
│   │   ├── typescript-estree
│   │   ├── type-utils
│   │   ├── utils
│   │   ├── parser
│   │   ├── scope-manager
│   │   └── eslint-plugin
│   ├── eslint-visitor-keys
│   └── @eslint
│       ├── js
│       └── eslintrc
└── eliza-plugin-starter.zip

```

`/home/anon/repos/eliza/eliza-plugin-starter/pnpm-lock.yaml`:

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@ai16z/eliza':
        specifier: 0.1.6-alpha.4
        version: 0.1.6-alpha.4(@google-cloud/vertexai@1.9.2)(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))(react@18.3.1)(sswr@2.1.0(svelte@5.14.2))(svelte@5.14.2)(vue@3.5.13(typescript@5.7.2))
    devDependencies:
      '@types/jest':
        specifier: ^29.5.14
        version: 29.5.14
      '@types/node':
        specifier: ^20.17.10
        version: 20.17.10
      '@typescript-eslint/eslint-plugin':
        specifier: ^6.21.0
        version: 6.21.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.7.2))(eslint@8.57.1)(typescript@5.7.2)
      '@typescript-eslint/parser':
        specifier: ^6.21.0
        version: 6.21.0(eslint@8.57.1)(typescript@5.7.2)
      eslint:
        specifier: ^8.57.1
        version: 8.57.1
      jest:
        specifier: ^29.7.0
        version: 29.7.0(@types/node@20.17.10)
      prettier:
        specifier: ^3.4.2
        version: 3.4.2
      ts-jest:
        specifier: ^29.2.5
        version: 29.2.5(@babel/core@7.26.0)(@jest/transform@29.7.0)(@jest/types@29.6.3)(babel-jest@29.7.0(@babel/core@7.26.0))(jest@29.7.0(@types/node@20.17.10))(typescript@5.7.2)
      typescript:
        specifier: ^5.7.2
        version: 5.7.2

packages:

  '@ai-sdk/anthropic@0.0.56':
    resolution: {integrity: sha512-FC/XbeFANFp8rHH+zEZF34cvRu9T42rQxw9QnUzJ1LXTi1cWjxYOx2Zo4vfg0iofxxqgOe4fT94IdT2ERQ89bA==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0

  '@ai-sdk/google-vertex@0.0.43':
    resolution: {integrity: sha512-lmZukH74m6MUl4fbyfz3T4qs5ukDUJ6YB5Dedtu+aK+Mdp05k9qTHAXxWiB8i/VdZqWlS+DEo/+b7pOPX0V7wA==}
    engines: {node: '>=18'}
    peerDependencies:
      '@google-cloud/vertexai': ^1.6.0
      zod: ^3.0.0

  '@ai-sdk/google@0.0.55':
    resolution: {integrity: sha512-dvEMS8Ex2H0OeuFBiT4Q1Kfrxi1ckjooy/PazNLjRQ3w9o9VQq4O24eMQGCuW1Z47qgMdXjhDzsH6qD0HOX6Cw==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0

  '@ai-sdk/groq@0.0.3':
    resolution: {integrity: sha512-Iyj2p7/M0TVhoPrQfSiwfvjTpZFfc17a6qY/2s22+VgpT0yyfai9dVyLbfUAdnNlpGGrjDpxPHqK1L03r4KlyA==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0

  '@ai-sdk/openai@1.0.5':
    resolution: {integrity: sha512-JDCPBJQx9o3LgboBPaA55v+9EZ7Vm/ozy0+J5DIr2jJF8WETjeCnigdxixyzEy/Od4wX871jOTSuGffwNIi0kA==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0

  '@ai-sdk/provider-utils@1.0.20':
    resolution: {integrity: sha512-ngg/RGpnA00eNOWEtXHenpX1MsM2QshQh4QJFjUfwcqHpM5kTfG7je7Rc3HcEDP+OkRVv2GF+X4fC1Vfcnl8Ow==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0
    peerDependenciesMeta:
      zod:
        optional: true

  '@ai-sdk/provider-utils@1.0.22':
    resolution: {integrity: sha512-YHK2rpj++wnLVc9vPGzGFP3Pjeld2MwhKinetA0zKXOoHAT/Jit5O8kZsxcSlJPu9wvcGT1UGZEjZrtO7PfFOQ==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0
    peerDependenciesMeta:
      zod:
        optional: true

  '@ai-sdk/provider-utils@2.0.2':
    resolution: {integrity: sha512-IAvhKhdlXqiSmvx/D4uNlFYCl8dWT+M9K+IuEcSgnE2Aj27GWu8sDIpAf4r4Voc+wOUkOECVKQhFo8g9pozdjA==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0
    peerDependenciesMeta:
      zod:
        optional: true

  '@ai-sdk/provider@0.0.24':
    resolution: {integrity: sha512-XMsNGJdGO+L0cxhhegtqZ8+T6nn4EoShS819OvCgI2kLbYTIvk0GWFGD0AXJmxkxs3DrpsJxKAFukFR7bvTkgQ==}
    engines: {node: '>=18'}

  '@ai-sdk/provider@0.0.26':
    resolution: {integrity: sha512-dQkfBDs2lTYpKM8389oopPdQgIU007GQyCbuPPrV+K6MtSII3HBfE0stUIMXUb44L+LK1t6GXPP7wjSzjO6uKg==}
    engines: {node: '>=18'}

  '@ai-sdk/provider@1.0.1':
    resolution: {integrity: sha512-mV+3iNDkzUsZ0pR2jG0sVzU6xtQY5DtSCBy3JFycLp6PwjyLw/iodfL3MwdmMCRJWgs3dadcHejRnMvF9nGTBg==}
    engines: {node: '>=18'}

  '@ai-sdk/react@0.0.70':
    resolution: {integrity: sha512-GnwbtjW4/4z7MleLiW+TOZC2M29eCg1tOUpuEiYFMmFNZK8mkrqM0PFZMo6UsYeUYMWqEOOcPOU9OQVJMJh7IQ==}
    engines: {node: '>=18'}
    peerDependencies:
      react: ^18 || ^19 || ^19.0.0-rc
      zod: ^3.0.0
    peerDependenciesMeta:
      react:
        optional: true
      zod:
        optional: true

  '@ai-sdk/solid@0.0.54':
    resolution: {integrity: sha512-96KWTVK+opdFeRubqrgaJXoNiDP89gNxFRWUp0PJOotZW816AbhUf4EnDjBjXTLjXL1n0h8tGSE9sZsRkj9wQQ==}
    engines: {node: '>=18'}
    peerDependencies:
      solid-js: ^1.7.7
    peerDependenciesMeta:
      solid-js:
        optional: true

  '@ai-sdk/svelte@0.0.57':
    resolution: {integrity: sha512-SyF9ItIR9ALP9yDNAD+2/5Vl1IT6kchgyDH8xkmhysfJI6WrvJbtO1wdQ0nylvPLcsPoYu+cAlz1krU4lFHcYw==}
    engines: {node: '>=18'}
    peerDependencies:
      svelte: ^3.0.0 || ^4.0.0 || ^5.0.0
    peerDependenciesMeta:
      svelte:
        optional: true

  '@ai-sdk/ui-utils@0.0.50':
    resolution: {integrity: sha512-Z5QYJVW+5XpSaJ4jYCCAVG7zIAuKOOdikhgpksneNmKvx61ACFaf98pmOd+xnjahl0pIlc/QIe6O4yVaJ1sEaw==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0
    peerDependenciesMeta:
      zod:
        optional: true

  '@ai-sdk/vue@0.0.59':
    resolution: {integrity: sha512-+ofYlnqdc8c4F6tM0IKF0+7NagZRAiqBJpGDJ+6EYhDW8FHLUP/JFBgu32SjxSxC6IKFZxEnl68ZoP/Z38EMlw==}
    engines: {node: '>=18'}
    peerDependencies:
      vue: ^3.3.4
    peerDependenciesMeta:
      vue:
        optional: true

  '@ai16z/eliza@0.1.6-alpha.4':
    resolution: {integrity: sha512-hr7EPzw57Dqx98WfDSPSZNJ9Ve9emWnk+d0/3Mq6G32Rzs2yxrNWYM2Ye3tOWxfAo9Gqk+Gzg1PD1VlzKzDdMg==}

  '@ampproject/remapping@2.3.0':
    resolution: {integrity: sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==}
    engines: {node: '>=6.0.0'}

  '@anthropic-ai/sdk@0.30.1':
    resolution: {integrity: sha512-nuKvp7wOIz6BFei8WrTdhmSsx5mwnArYyJgh4+vYu3V4J0Ltb8Xm3odPm51n1aSI0XxNCrDl7O88cxCtUdAkaw==}

  '@anush008/tokenizers-darwin-universal@0.0.0':
    resolution: {integrity: sha512-SACpWEooTjFX89dFKRVUhivMxxcZRtA3nJGVepdLyrwTkQ1TZQ8581B5JoXp0TcTMHfgnDaagifvVoBiFEdNCQ==}
    engines: {node: '>= 10'}
    os: [darwin]

  '@anush008/tokenizers-linux-x64-gnu@0.0.0':
    resolution: {integrity: sha512-TLjByOPWUEq51L3EJkS+slyH57HKJ7lAz/aBtEt7TIPq4QsE2owOPGovByOLIq1x5Wgh9b+a4q2JasrEFSDDhg==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [linux]

  '@anush008/tokenizers-win32-x64-msvc@0.0.0':
    resolution: {integrity: sha512-/5kP0G96+Cr6947F0ZetXnmL31YCaN15dbNbh2NHg7TXXRwfqk95+JtPP5Q7v4jbR2xxAmuseBqB4H/V7zKWuw==}
    engines: {node: '>= 10'}
    cpu: [x64]
    os: [win32]

  '@anush008/tokenizers@0.0.0':
    resolution: {integrity: sha512-IQD9wkVReKAhsEAbDjh/0KrBGTEXelqZLpOBRDaIRvlzZ9sjmUP+gKbpvzyJnei2JHQiE8JAgj7YcNloINbGBw==}
    engines: {node: '>= 10'}

  '@babel/code-frame@7.26.2':
    resolution: {integrity: sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==}
    engines: {node: '>=6.9.0'}

  '@babel/compat-data@7.26.3':
    resolution: {integrity: sha512-nHIxvKPniQXpmQLb0vhY3VaFb3S0YrTAwpOWJZh1wn3oJPjJk9Asva204PsBdmAE8vpzfHudT8DB0scYvy9q0g==}
    engines: {node: '>=6.9.0'}

  '@babel/core@7.26.0':
    resolution: {integrity: sha512-i1SLeK+DzNnQ3LL/CswPCa/E5u4lh1k6IAEphON8F+cXt0t9euTshDru0q7/IqMa1PMPz5RnHuHscF8/ZJsStg==}
    engines: {node: '>=6.9.0'}

  '@babel/generator@7.26.3':
    resolution: {integrity: sha512-6FF/urZvD0sTeO7k6/B15pMLC4CHUv1426lzr3N01aHJTl046uCAh9LXW/fzeXXjPNCJ6iABW5XaWOsIZB93aQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-compilation-targets@7.25.9':
    resolution: {integrity: sha512-j9Db8Suy6yV/VHa4qzrj9yZfZxhLWQdVnRlXxmKLYlhWUVB1sB2G5sxuWYXk/whHD9iW76PmNzxZ4UCnTQTVEQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-imports@7.25.9':
    resolution: {integrity: sha512-tnUA4RsrmflIM6W6RFTLFSXITtl0wKjgpnLgXyowocVPrbYrLUXSBXDgTs8BlbmIzIdlBySRQjINYs2BAkiLtw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-module-transforms@7.26.0':
    resolution: {integrity: sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0

  '@babel/helper-plugin-utils@7.25.9':
    resolution: {integrity: sha512-kSMlyUVdWe25rEsRGviIgOWnoT/nfABVWlqt9N19/dIPWViAOW2s9wznP5tURbs/IDuNk4gPy3YdYRgH3uxhBw==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-string-parser@7.25.9':
    resolution: {integrity: sha512-4A/SCr/2KLd5jrtOMFzaKjVtAei3+2r/NChoBNoZ3EyP/+GlhoaEGoWOZUmFmoITP7zOJyHIMm+DYRd8o3PvHA==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.25.9':
    resolution: {integrity: sha512-Ed61U6XJc3CVRfkERJWDz4dJwKe7iLmmJsbOGu9wSloNSFttHV0I8g6UAgb7qnK5ly5bGLPd4oXZlxCdANBOWQ==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-option@7.25.9':
    resolution: {integrity: sha512-e/zv1co8pp55dNdEcCynfj9X7nyUKUXoUEwfXqaZt0omVOmDe9oOTdKStH4GmAw6zxMFs50ZayuMfHDKlO7Tfw==}
    engines: {node: '>=6.9.0'}

  '@babel/helpers@7.26.0':
    resolution: {integrity: sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.26.3':
    resolution: {integrity: sha512-WJ/CvmY8Mea8iDXo6a7RK2wbmJITT5fN3BEkRuFlxVyNx8jOKIIhmC4fSkTcPcf8JyavbBwIe6OpiCOBXt/IcA==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/plugin-syntax-async-generators@7.8.4':
    resolution: {integrity: sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-bigint@7.8.3':
    resolution: {integrity: sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-class-properties@7.12.13':
    resolution: {integrity: sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-class-static-block@7.14.5':
    resolution: {integrity: sha512-b+YyPmr6ldyNnM6sqYeMWE+bgJcJpO6yS4QD7ymxgH34GBPNDM/THBh8iunyvKIZztiwLH4CJZ0RxTk9emgpjw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-attributes@7.26.0':
    resolution: {integrity: sha512-e2dttdsJ1ZTpi3B9UYGLw41hifAubg19AtCu/2I/F1QNVclOBr1dYpTdmdyZ84Xiz43BS/tCUkMAZNLv12Pi+A==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-import-meta@7.10.4':
    resolution: {integrity: sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-json-strings@7.8.3':
    resolution: {integrity: sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-jsx@7.25.9':
    resolution: {integrity: sha512-ld6oezHQMZsZfp6pWtbjaNDF2tiiCYYDqQszHt5VV437lewP9aSi2Of99CK0D0XB21k7FLgnLcmQKyKzynfeAA==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-logical-assignment-operators@7.10.4':
    resolution: {integrity: sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-nullish-coalescing-operator@7.8.3':
    resolution: {integrity: sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-numeric-separator@7.10.4':
    resolution: {integrity: sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-object-rest-spread@7.8.3':
    resolution: {integrity: sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-optional-catch-binding@7.8.3':
    resolution: {integrity: sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-optional-chaining@7.8.3':
    resolution: {integrity: sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-private-property-in-object@7.14.5':
    resolution: {integrity: sha512-0wVnp9dxJ72ZUJDV27ZfbSj6iHLoytYZmh3rFcxNnvsJF3ktkzLDZPy/mA17HGsaQT3/DQsWYX1f1QGWkCoVUg==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-top-level-await@7.14.5':
    resolution: {integrity: sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/plugin-syntax-typescript@7.25.9':
    resolution: {integrity: sha512-hjMgRy5hb8uJJjUcdWunWVcoi9bGpJp8p5Ol1229PoN6aytsLwNMgmdftO23wnCLMfVmTwZDWMPNq/D1SY60JQ==}
    engines: {node: '>=6.9.0'}
    peerDependencies:
      '@babel/core': ^7.0.0-0

  '@babel/template@7.25.9':
    resolution: {integrity: sha512-9DGttpmPvIxBb/2uwpVo3dqJ+O6RooAFOS+lB+xDqoE2PVCE8nfoHMdZLpfCQRLwvohzXISPZcgxt80xLfsuwg==}
    engines: {node: '>=6.9.0'}

  '@babel/traverse@7.26.4':
    resolution: {integrity: sha512-fH+b7Y4p3yqvApJALCPJcwb0/XaOSgtK4pzV6WVjPR5GLFQBRI7pfoX2V2iM48NXvX07NUxxm1Vw98YjqTcU5w==}
    engines: {node: '>=6.9.0'}

  '@babel/types@7.26.3':
    resolution: {integrity: sha512-vN5p+1kl59GVKMvTHt55NzzmYVxprfJD+ql7U9NFIfKCBkYE55LYtS+WtPlaYOyzydrKI8Nezd+aZextrd+FMA==}
    engines: {node: '>=6.9.0'}

  '@bcoe/v8-coverage@0.2.3':
    resolution: {integrity: sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw==}

  '@cfworker/json-schema@4.0.3':
    resolution: {integrity: sha512-ZykIcDTVv5UNmKWSTLAs3VukO6NDJkkSKxrgUTDPBkAlORVT3H9n5DbRjRl8xIotklscHdbLIa0b9+y3mQq73g==}

  '@eslint-community/eslint-utils@4.4.1':
    resolution: {integrity: sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    peerDependencies:
      eslint: ^6.0.0 || ^7.0.0 || >=8.0.0

  '@eslint-community/regexpp@4.12.1':
    resolution: {integrity: sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==}
    engines: {node: ^12.0.0 || ^14.0.0 || >=16.0.0}

  '@eslint/eslintrc@2.1.4':
    resolution: {integrity: sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@eslint/js@8.57.1':
    resolution: {integrity: sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  '@fal-ai/client@1.2.0':
    resolution: {integrity: sha512-MNCnE5icY+OM5ahgYJItmydZ7AxhtzhgA5tQI13jVntzhLT0z+tetHIlAL1VA0XFZgldDzqxeTf9Pr5TW3VErg==}
    engines: {node: '>=18.0.0'}

  '@google-cloud/vertexai@1.9.2':
    resolution: {integrity: sha512-pJSUG3r5QIvCFNfkz7/y7kEqvEJaVAk0jZbZoKbcPCRUnXaUeAq7p8I0oklqetGyxbUcZ2FOGpt+Y+4uIltVPg==}
    engines: {node: '>=18.0.0'}

  '@humanwhocodes/config-array@0.13.0':
    resolution: {integrity: sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==}
    engines: {node: '>=10.10.0'}
    deprecated: Use @eslint/config-array instead

  '@humanwhocodes/module-importer@1.0.1':
    resolution: {integrity: sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==}
    engines: {node: '>=12.22'}

  '@humanwhocodes/object-schema@2.0.3':
    resolution: {integrity: sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==}
    deprecated: Use @eslint/object-schema instead

  '@isaacs/cliui@8.0.2':
    resolution: {integrity: sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==}
    engines: {node: '>=12'}

  '@istanbuljs/load-nyc-config@1.1.0':
    resolution: {integrity: sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==}
    engines: {node: '>=8'}

  '@istanbuljs/schema@0.1.3':
    resolution: {integrity: sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA==}
    engines: {node: '>=8'}

  '@jest/console@29.7.0':
    resolution: {integrity: sha512-5Ni4CU7XHQi32IJ398EEP4RrB8eV09sXP2ROqD4bksHrnTree52PsxvX8tpL8LvTZ3pFzXyPbNQReSN41CAhOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/core@29.7.0':
    resolution: {integrity: sha512-n7aeXWKMnGtDA48y8TLWJPJmLmmZ642Ceo78cYWEpiD7FzDgmNDV/GCVRorPABdXLJZ/9wzzgZAlHjXjxDHGsg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  '@jest/environment@29.7.0':
    resolution: {integrity: sha512-aQIfHDq33ExsN4jP1NWGXhxgQ/wixs60gDiKO+XVMd8Mn0NWPWgc34ZQDTb2jKaUWQ7MuwoitXAsN2XVXNMpAw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/expect-utils@29.7.0':
    resolution: {integrity: sha512-GlsNBWiFQFCVi9QVSx7f5AgMeLxe9YCCs5PuP2O2LdjDAA8Jh9eX7lA1Jq/xdXw3Wb3hyvlFNfZIfcRetSzYcA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/expect@29.7.0':
    resolution: {integrity: sha512-8uMeAMycttpva3P1lBHB8VciS9V0XAr3GymPpipdyQXbBcuhkLQOSe8E/p92RyAdToS6ZD1tFkX+CkhoECE0dQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/fake-timers@29.7.0':
    resolution: {integrity: sha512-q4DH1Ha4TTFPdxLsqDXK1d3+ioSL7yL5oCMJZgDYm6i+6CygW5E5xVr/D1HdsGxjt1ZWSfUAs9OxSB/BNelWrQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/globals@29.7.0':
    resolution: {integrity: sha512-mpiz3dutLbkW2MNFubUGUEVLkTGiqW6yLVTA+JbP6fI6J5iL9Y0Nlg8k95pcF8ctKwCS7WVxteBs29hhfAotzQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/reporters@29.7.0':
    resolution: {integrity: sha512-DApq0KJbJOEzAFYjHADNNxAE3KbhxQB1y5Kplb5Waqw6zVbuWatSnMjE5gs8FUgEPmNsnZA3NCWl9NG0ia04Pg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  '@jest/schemas@29.6.3':
    resolution: {integrity: sha512-mo5j5X+jIZmJQveBKeS/clAueipV7KgiX1vMgCxam1RNYiqE1w62n0/tJJnHtjW8ZHcQco5gY85jA3mi0L+nSA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/source-map@29.6.3':
    resolution: {integrity: sha512-MHjT95QuipcPrpLM+8JMSzFx6eHp5Bm+4XeFDJlwsvVBjmKNiIAvasGK2fxz2WbGRlnvqehFbh07MMa7n3YJnw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/test-result@29.7.0':
    resolution: {integrity: sha512-Fdx+tv6x1zlkJPcWXmMDAG2HBnaR9XPSd5aDWQVsfrZmLVT3lU1cwyxLgRmXR9yrq4NBoEm9BMsfgFzTQAbJYA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/test-sequencer@29.7.0':
    resolution: {integrity: sha512-GQwJ5WZVrKnOJuiYiAF52UNUJXgTZx1NHjFSEB0qEMmSZKAkdMoIzw/Cj6x6NF4AvV23AUqDpFzQkN/eYCYTxw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/transform@29.7.0':
    resolution: {integrity: sha512-ok/BTPFzFKVMwO5eOHRrvnBVHdRy9IrsrW1GpMaQ9MCnilNLXQKmAX8s1YXDFaai9xJpac2ySzV0YeRRECr2Vw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jest/types@29.6.3':
    resolution: {integrity: sha512-u3UPsIilWKOM3F9CXtrG8LEJmNxwoCQC/XVj4IKYXvvpx7QIi/Kg1LI5uDmDpKlac62NUtX7eLjRh+jVZcLOzw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  '@jridgewell/gen-mapping@0.3.8':
    resolution: {integrity: sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/set-array@1.2.1':
    resolution: {integrity: sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.0':
    resolution: {integrity: sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==}

  '@jridgewell/trace-mapping@0.3.25':
    resolution: {integrity: sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==}

  '@langchain/core@0.3.24':
    resolution: {integrity: sha512-xd7+VSJCwFNwt57poYjl18SbAb51mLWvq7OvQhkUQXv20LdnrO8Y5e2NhVKpNcYE306fFfAu+ty9ncPyKCpMZA==}
    engines: {node: '>=18'}

  '@langchain/openai@0.3.14':
    resolution: {integrity: sha512-lNWjUo1tbvsss45IF7UQtMu1NJ6oUKvhgPYWXnX9f/d6OmuLu7D99HQ3Y88vLcUo9XjjOy417olYHignMduMjA==}
    engines: {node: '>=18'}
    peerDependencies:
      '@langchain/core': '>=0.2.26 <0.4.0'

  '@langchain/textsplitters@0.1.0':
    resolution: {integrity: sha512-djI4uw9rlkAb5iMhtLED+xJebDdAG935AdP4eRTB02R7OB/act55Bj9wsskhZsvuyQRpO4O1wQOp85s6T6GWmw==}
    engines: {node: '>=18'}
    peerDependencies:
      '@langchain/core': '>=0.2.21 <0.4.0'

  '@msgpack/msgpack@3.0.0-beta2':
    resolution: {integrity: sha512-y+l1PNV0XDyY8sM3YtuMLK5vE3/hkfId+Do8pLo/OPxfxuFAUwcGz3oiiUuV46/aBpwTzZ+mRWVMtlSKbradhw==}
    engines: {node: '>= 14'}

  '@nodelib/fs.scandir@2.1.5':
    resolution: {integrity: sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==}
    engines: {node: '>= 8'}

  '@nodelib/fs.stat@2.0.5':
    resolution: {integrity: sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==}
    engines: {node: '>= 8'}

  '@nodelib/fs.walk@1.2.8':
    resolution: {integrity: sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==}
    engines: {node: '>= 8'}

  '@opentelemetry/api@1.9.0':
    resolution: {integrity: sha512-3giAOQvZiH5F9bMlMiv8+GSPMeqg0dbaeo58/0SlA9sxSqZhnUtxzX9/2FzyhS9sWQf5S0GJE0AKBrFqjpeYcg==}
    engines: {node: '>=8.0.0'}

  '@sinclair/typebox@0.27.8':
    resolution: {integrity: sha512-+Fj43pSMwJs4KRrH/938Uf+uAELIgVBmQzg/q1YG10djyfA3TnrU8N8XzqCh/okZdszqBQTZf96idMfE5lnwTA==}

  '@sinonjs/commons@3.0.1':
    resolution: {integrity: sha512-K3mCHKQ9sVh8o1C9cxkwxaOmXoAMlDxC1mYyHrjqOWEcBjYr76t96zL2zlj5dUGZ3HSw240X1qgH3Mjf1yJWpQ==}

  '@sinonjs/fake-timers@10.3.0':
    resolution: {integrity: sha512-V4BG07kuYSUkTCSBHG8G8TNhM+F19jXFWnQtzj+we8DrkpSBCee9Z3Ms8yiGer/dlmhe35/Xdgyo3/0rQKg7YA==}

  '@types/babel__core@7.20.5':
    resolution: {integrity: sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==}

  '@types/babel__generator@7.6.8':
    resolution: {integrity: sha512-ASsj+tpEDsEiFr1arWrlN6V3mdfjRMZt6LtK/Vp/kreFLnr5QH5+DhvD5nINYZXzwJvXeGq+05iUXcAzVrqWtw==}

  '@types/babel__template@7.4.4':
    resolution: {integrity: sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==}

  '@types/babel__traverse@7.20.6':
    resolution: {integrity: sha512-r1bzfrm0tomOI8g1SzvCaQHo6Lcv6zu0EA+W2kHrt8dyrHQxGzBBL4kdkzIS+jBMV+EYcMAEAqXqYaLJq5rOZg==}

  '@types/diff-match-patch@1.0.36':
    resolution: {integrity: sha512-xFdR6tkm0MWvBfO8xXCSsinYxHcqkQUlcHeSpMC2ukzOb6lwQAfDmW+Qt0AvlGd8HpsS28qKsB+oPeJn9I39jg==}

  '@types/estree@1.0.6':
    resolution: {integrity: sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==}

  '@types/graceful-fs@4.1.9':
    resolution: {integrity: sha512-olP3sd1qOEe5dXTSaFvQG+02VdRXcdytWLAZsAq1PecU8uqQAhkrnbli7DagjtXKW/Bl7YJbUsa8MPcuc8LHEQ==}

  '@types/istanbul-lib-coverage@2.0.6':
    resolution: {integrity: sha512-2QF/t/auWm0lsy8XtKVPG19v3sSOQlJe/YHZgfjb/KBBHOGSV+J2q/S671rcq9uTBrLAXmZpqJiaQbMT+zNU1w==}

  '@types/istanbul-lib-report@3.0.3':
    resolution: {integrity: sha512-NQn7AHQnk/RSLOxrBbGyJM/aVQ+pjj5HCgasFxc0K/KhoATfQ/47AyUl15I2yBUpihjmas+a+VJBOqecrFH+uA==}

  '@types/istanbul-reports@3.0.4':
    resolution: {integrity: sha512-pk2B1NWalF9toCRu6gjBzR69syFjP4Od8WRAX+0mmf9lAjCRicLOWc+ZrxZHx/0XRjotgkF9t6iaMJ+aXcOdZQ==}

  '@types/jest@29.5.14':
    resolution: {integrity: sha512-ZN+4sdnLUbo8EVvVc2ao0GFW6oVrQRPn4K2lglySj7APvSrgzxHiNNK99us4WDMi57xxA2yggblIAMNhXOotLQ==}

  '@types/json-schema@7.0.15':
    resolution: {integrity: sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==}

  '@types/node-fetch@2.6.12':
    resolution: {integrity: sha512-8nneRWKCg3rMtF69nLQJnOYUcbafYeFSjqkw3jCRLsqkWFlHaoQrr5mXmofFGOx3DKn7UfmBMyov8ySvLRVldA==}

  '@types/node@18.19.68':
    resolution: {integrity: sha512-QGtpFH1vB99ZmTa63K4/FU8twThj4fuVSBkGddTp7uIL/cuoLWIUSL2RcOaigBhfR+hg5pgGkBnkoOxrTVBMKw==}

  '@types/node@20.17.10':
    resolution: {integrity: sha512-/jrvh5h6NXhEauFFexRin69nA0uHJ5gwk4iDivp/DeoEua3uwCUto6PC86IpRITBOs4+6i2I56K5x5b6WYGXHA==}

  '@types/retry@0.12.0':
    resolution: {integrity: sha512-wWKOClTTiizcZhXnPY4wikVAwmdYHp8q6DmC+EJUzAMsycb7HB32Kh9RN4+0gExjmPmZSAQjgURXIGATPegAvA==}

  '@types/semver@7.5.8':
    resolution: {integrity: sha512-I8EUhyrgfLrcTkzV3TSsGyl1tSuPrEDzr0yd5m90UgNxQkyDXULk3b6MlQqTCpZpNtWe1K0hzclnZkTcLBe2UQ==}

  '@types/stack-utils@2.0.3':
    resolution: {integrity: sha512-9aEbYZ3TbYMznPdcdr3SmIrLXwC/AKZXQeCf9Pgao5CKb8CyHuEX5jzWPTkvregvhRJHcpRO6BFoGW9ycaOkYw==}

  '@types/uuid@10.0.0':
    resolution: {integrity: sha512-7gqG38EyHgyP1S+7+xomFtL+ZNHcKv6DwNaCZmJmo1vgMugyF3TCnXVg4t1uk89mLNwnLtnY3TpOpCOyp1/xHQ==}

  '@types/yargs-parser@21.0.3':
    resolution: {integrity: sha512-I4q9QU9MQv4oEOz4tAHJtNz1cwuLxn2F3xcc2iV5WdqLPpUnj30aUuxt1mAxYTG+oe8CZMV/+6rU4S4gRDzqtQ==}

  '@types/yargs@17.0.33':
    resolution: {integrity: sha512-WpxBCKWPLr4xSsHgz511rFJAM+wS28w2zEO1QDNY5zM/S8ok70NNfztH0xwhqKyaK0OHCbN98LDAZuy1ctxDkA==}

  '@typescript-eslint/eslint-plugin@6.21.0':
    resolution: {integrity: sha512-oy9+hTPCUFpngkEZUSzbf9MxI65wbKFoQYsgPdILTfbUldp5ovUuphZVe4i30emU9M/kP+T64Di0mxl7dSw3MA==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      '@typescript-eslint/parser': ^6.0.0 || ^6.0.0-alpha
      eslint: ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/parser@6.21.0':
    resolution: {integrity: sha512-tbsV1jPne5CkFQCgPBcDOt30ItF7aJoZL997JSF7MhGQqOeT3svWRYxiqlfA5RUdlHN6Fi+EI9bxqbdyAUZjYQ==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/scope-manager@6.21.0':
    resolution: {integrity: sha512-OwLUIWZJry80O99zvqXVEioyniJMa+d2GrqpUTqi5/v5D5rOrppJVBPa0yKCblcigC0/aYAzxxqQ1B+DS2RYsg==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@typescript-eslint/type-utils@6.21.0':
    resolution: {integrity: sha512-rZQI7wHfao8qMX3Rd3xqeYSMCL3SoiSQLBATSiVKARdFGCYSRvmViieZjqc58jKgs8Y8i9YvVVhRbHSTA4VBag==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/types@6.21.0':
    resolution: {integrity: sha512-1kFmZ1rOm5epu9NZEZm1kckCDGj5UJEf7P1kliH4LKu/RkwpsfqqGmY2OOcUs18lSlQBKLDYBOGxRVtrMN5lpg==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@typescript-eslint/typescript-estree@6.21.0':
    resolution: {integrity: sha512-6npJTkZcO+y2/kr+z0hc4HwNfrrP4kNYh57ek7yCNlrBjWQ1Y0OS7jiZTkgumrvkX5HkEKXFZkkdFNkaW2wmUQ==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  '@typescript-eslint/utils@6.21.0':
    resolution: {integrity: sha512-NfWVaC8HP9T8cbKQxHcsJBY5YE1O33+jpMwN45qzWWaPDZgLIbo12toGMWnmhvCpd3sIxkpDw3Wv1B3dYrbDQQ==}
    engines: {node: ^16.0.0 || >=18.0.0}
    peerDependencies:
      eslint: ^7.0.0 || ^8.0.0

  '@typescript-eslint/visitor-keys@6.21.0':
    resolution: {integrity: sha512-JJtkDduxLi9bivAB+cYOVMtbkqdPOhZ+ZI5LC47MIRrDV4Yn2o+ZnW10Nkmr28xRpSpdJ6Sm42Hjf2+REYXm0A==}
    engines: {node: ^16.0.0 || >=18.0.0}

  '@ungap/structured-clone@1.2.1':
    resolution: {integrity: sha512-fEzPV3hSkSMltkw152tJKNARhOupqbH96MZWyRjNaYZOMIzbrTeQDG+MTc6Mr2pgzFQzFxAfmhGDNP5QK++2ZA==}

  '@vue/compiler-core@3.5.13':
    resolution: {integrity: sha512-oOdAkwqUfW1WqpwSYJce06wvt6HljgY3fGeM9NcVA1HaYOij3mZG9Rkysn0OHuyUAGMbEbARIpsG+LPVlBJ5/Q==}

  '@vue/compiler-dom@3.5.13':
    resolution: {integrity: sha512-ZOJ46sMOKUjO3e94wPdCzQ6P1Lx/vhp2RSvfaab88Ajexs0AHeV0uasYhi99WPaogmBlRHNRuly8xV75cNTMDA==}

  '@vue/compiler-sfc@3.5.13':
    resolution: {integrity: sha512-6VdaljMpD82w6c2749Zhf5T9u5uLBWKnVue6XWxprDobftnletJ8+oel7sexFfM3qIxNmVE7LSFGTpv6obNyaQ==}

  '@vue/compiler-ssr@3.5.13':
    resolution: {integrity: sha512-wMH6vrYHxQl/IybKJagqbquvxpWCuVYpoUJfCqFZwa/JY1GdATAQ+TgVtgrwwMZ0D07QhA99rs/EAAWfvG6KpA==}

  '@vue/reactivity@3.5.13':
    resolution: {integrity: sha512-NaCwtw8o48B9I6L1zl2p41OHo/2Z4wqYGGIK1Khu5T7yxrn+ATOixn/Udn2m+6kZKB/J7cuT9DbWWhRxqixACg==}

  '@vue/runtime-core@3.5.13':
    resolution: {integrity: sha512-Fj4YRQ3Az0WTZw1sFe+QDb0aXCerigEpw418pw1HBUKFtnQHWzwojaukAs2X/c9DQz4MQ4bsXTGlcpGxU/RCIw==}

  '@vue/runtime-dom@3.5.13':
    resolution: {integrity: sha512-dLaj94s93NYLqjLiyFzVs9X6dWhTdAlEAciC3Moq7gzAc13VJUdCnjjRurNM6uTLFATRHexHCTu/Xp3eW6yoog==}

  '@vue/server-renderer@3.5.13':
    resolution: {integrity: sha512-wAi4IRJV/2SAW3htkTlB+dHeRmpTiVIK1OGLWV1yeStVSebSQQOwGwIq0D3ZIoBj2C2qpgz5+vX9iEBkTdk5YA==}
    peerDependencies:
      vue: 3.5.13

  '@vue/shared@3.5.13':
    resolution: {integrity: sha512-/hnE/qP5ZoGpol0a5mDi45bOd7t3tjYJBjsgCsivow7D48cJeV5l05RD82lPqi7gRiphZM37rnhW1l6ZoCNNnQ==}

  abort-controller@3.0.0:
    resolution: {integrity: sha512-h8lQ8tacZYnR3vNQTgibj+tODHI5/+l06Au2Pcriv/Gmet0eaj4TwWH41sO9wnHDiQsEj19q0drzdWdeAHtweg==}
    engines: {node: '>=6.5'}

  acorn-jsx@5.3.2:
    resolution: {integrity: sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==}
    peerDependencies:
      acorn: ^6.0.0 || ^7.0.0 || ^8.0.0

  acorn-typescript@1.4.13:
    resolution: {integrity: sha512-xsc9Xv0xlVfwp2o7sQ+GCQ1PgbkdcpWdTzrwXxO3xDMTAywVS3oXVOcOHuRjAPkS4P9b+yc/qNF15460v+jp4Q==}
    peerDependencies:
      acorn: '>=8.9.0'

  acorn@8.14.0:
    resolution: {integrity: sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==}
    engines: {node: '>=0.4.0'}
    hasBin: true

  agent-base@7.1.3:
    resolution: {integrity: sha512-jRR5wdylq8CkOe6hei19GGZnxM6rBGwFl3Bg0YItGDimvjGtAvdZk4Pu6Cl4u4Igsws4a1fd1Vq3ezrhn4KmFw==}
    engines: {node: '>= 14'}

  agentkeepalive@4.5.0:
    resolution: {integrity: sha512-5GG/5IbQQpC9FpkRGsSvZI5QYeSCzlJHdpBQntCsuTOxhKD8lqKhrleg2Yi7yvMIf82Ycmmqln9U8V9qwEiJew==}
    engines: {node: '>= 8.0.0'}

  ai@3.4.33:
    resolution: {integrity: sha512-plBlrVZKwPoRTmM8+D1sJac9Bq8eaa2jiZlHLZIWekKWI1yMWYZvCCEezY9ASPwRhULYDJB2VhKOBUUeg3S5JQ==}
    engines: {node: '>=18'}
    peerDependencies:
      openai: ^4.42.0
      react: ^18 || ^19 || ^19.0.0-rc
      sswr: ^2.1.0
      svelte: ^3.0.0 || ^4.0.0 || ^5.0.0
      zod: ^3.0.0
    peerDependenciesMeta:
      openai:
        optional: true
      react:
        optional: true
      sswr:
        optional: true
      svelte:
        optional: true
      zod:
        optional: true

  ajv@6.12.6:
    resolution: {integrity: sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==}

  ansi-escapes@4.3.2:
    resolution: {integrity: sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==}
    engines: {node: '>=8'}

  ansi-regex@5.0.1:
    resolution: {integrity: sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==}
    engines: {node: '>=8'}

  ansi-regex@6.1.0:
    resolution: {integrity: sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==}
    engines: {node: '>=12'}

  ansi-styles@4.3.0:
    resolution: {integrity: sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==}
    engines: {node: '>=8'}

  ansi-styles@5.2.0:
    resolution: {integrity: sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA==}
    engines: {node: '>=10'}

  ansi-styles@6.2.1:
    resolution: {integrity: sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==}
    engines: {node: '>=12'}

  anthropic-vertex-ai@1.0.2:
    resolution: {integrity: sha512-4YuK04KMmBGkx6fi2UjnHkE4mhaIov7tnT5La9+DMn/gw/NSOLZoWNUx+13VY3mkcaseKBMEn1DBzdXXJFIP7A==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  argparse@1.0.10:
    resolution: {integrity: sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==}

  argparse@2.0.1:
    resolution: {integrity: sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  array-union@2.1.0:
    resolution: {integrity: sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==}
    engines: {node: '>=8'}

  async@3.2.6:
    resolution: {integrity: sha512-htCUDlxyyCLMgaM3xXg0C0LW2xqfuQ6p05pCEIsXuyQ+a1koYKTuBMzRNwmybfLgvJDMd0r1LTn4+E0Ti6C2AA==}

  asynckit@0.4.0:
    resolution: {integrity: sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==}

  axobject-query@4.1.0:
    resolution: {integrity: sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==}
    engines: {node: '>= 0.4'}

  babel-jest@29.7.0:
    resolution: {integrity: sha512-BrvGY3xZSwEcCzKvKsCi2GgHqDqsYkOP4/by5xCgIwGXQxIEh+8ew3gmrE1y7XRR6LHZIj6yLYnUi/mm2KXKBg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@babel/core': ^7.8.0

  babel-plugin-istanbul@6.1.1:
    resolution: {integrity: sha512-Y1IQok9821cC9onCx5otgFfRm7Lm+I+wwxOx738M/WLPZ9Q42m4IG5W0FNX8WLL2gYMZo3JkuXIH2DOpWM+qwA==}
    engines: {node: '>=8'}

  babel-plugin-jest-hoist@29.6.3:
    resolution: {integrity: sha512-ESAc/RJvGTFEzRwOTT4+lNDk/GNHMkKbNzsvT0qKRfDyyYTskxB5rnU2njIDYVxXCBHHEI1c0YwHob3WaYujOg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  babel-preset-current-node-syntax@1.1.0:
    resolution: {integrity: sha512-ldYss8SbBlWva1bs28q78Ju5Zq1F+8BrqBZZ0VFhLBvhh6lCpC2o3gDJi/5DRLs9FgYZCnmPYIVFU4lRXCkyUw==}
    peerDependencies:
      '@babel/core': ^7.0.0

  babel-preset-jest@29.6.3:
    resolution: {integrity: sha512-0B3bhxR6snWXJZtR/RliHTDPRgn1sNHOR0yVtq/IiQFyuOVjFS+wuio/R4gSNkyYmKmJB4wGZv2NZanmKmTnNA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@babel/core': ^7.0.0

  balanced-match@1.0.2:
    resolution: {integrity: sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==}

  base64-js@1.5.1:
    resolution: {integrity: sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==}

  bignumber.js@9.1.2:
    resolution: {integrity: sha512-2/mKyZH9K85bzOEfhXDBFZTGd1CTs+5IHpeFQo9luiBG7hghdC851Pj2WAhb6E3R6b9tZj/XKhbg4fum+Kepug==}

  brace-expansion@1.1.11:
    resolution: {integrity: sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==}

  brace-expansion@2.0.1:
    resolution: {integrity: sha512-XnAIvQ8eM+kC6aULx6wuQiwVsnzsi9d3WxzV3FpWTGA19F621kwdbsAcFKXgKUHZWsy+mY6iL1sHTxWEFCytDA==}

  braces@3.0.3:
    resolution: {integrity: sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==}
    engines: {node: '>=8'}

  browserslist@4.24.3:
    resolution: {integrity: sha512-1CPmv8iobE2fyRMV97dAcMVegvvWKxmq94hkLiAkUGwKVTyDLw33K+ZxiFrREKmmps4rIw6grcCFCnTMSZ/YiA==}
    engines: {node: ^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7}
    hasBin: true

  bs-logger@0.2.6:
    resolution: {integrity: sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==}
    engines: {node: '>= 6'}

  bser@2.1.1:
    resolution: {integrity: sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==}

  buffer-equal-constant-time@1.0.1:
    resolution: {integrity: sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==}

  buffer-from@1.1.2:
    resolution: {integrity: sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ==}

  callsites@3.1.0:
    resolution: {integrity: sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==}
    engines: {node: '>=6'}

  camelcase@5.3.1:
    resolution: {integrity: sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==}
    engines: {node: '>=6'}

  camelcase@6.3.0:
    resolution: {integrity: sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==}
    engines: {node: '>=10'}

  caniuse-lite@1.0.30001689:
    resolution: {integrity: sha512-CmeR2VBycfa+5/jOfnp/NpWPGd06nf1XYiefUvhXFfZE4GkRc9jv+eGPS4nT558WS/8lYCzV8SlANCIPvbWP1g==}

  chalk@4.1.2:
    resolution: {integrity: sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==}
    engines: {node: '>=10'}

  chalk@5.3.0:
    resolution: {integrity: sha512-dLitG79d+GV1Nb/VYcCDFivJeK1hiukt9QjRNVOsUtTy1rR1YJsmpGGTZ3qJos+uw7WmWF4wUwBd9jxjocFC2w==}
    engines: {node: ^12.17.0 || ^14.13 || >=16.0.0}

  char-regex@1.0.2:
    resolution: {integrity: sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw==}
    engines: {node: '>=10'}

  chownr@2.0.0:
    resolution: {integrity: sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==}
    engines: {node: '>=10'}

  ci-info@3.9.0:
    resolution: {integrity: sha512-NIxF55hv4nSqQswkAeiOi1r83xy8JldOFDTWiug55KBu9Jnblncd2U6ViHmYgHf01TPZS77NJBhBMKdWj9HQMQ==}
    engines: {node: '>=8'}

  cjs-module-lexer@1.4.1:
    resolution: {integrity: sha512-cuSVIHi9/9E/+821Qjdvngor+xpnlwnuwIyZOaLmHBVdXL+gP+I6QQB9VkO7RI77YIcTV+S1W9AreJ5eN63JBA==}

  client-only@0.0.1:
    resolution: {integrity: sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==}

  cliui@8.0.1:
    resolution: {integrity: sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==}
    engines: {node: '>=12'}

  co@4.6.0:
    resolution: {integrity: sha512-QVb0dM5HvG+uaxitm8wONl7jltx8dqhfU33DcqtOZcLSVIKSDDLDi7+0LbAKiyI8hD9u42m2YxXSkMGWThaecQ==}
    engines: {iojs: '>= 1.0.0', node: '>= 0.12.0'}

  collect-v8-coverage@1.0.2:
    resolution: {integrity: sha512-lHl4d5/ONEbLlJvaJNtsF/Lz+WvB07u2ycqTYbdrq7UypDXailES4valYb2eWiJFxZlVmpGekfqoxQhzyFdT4Q==}

  color-convert@2.0.1:
    resolution: {integrity: sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==}
    engines: {node: '>=7.0.0'}

  color-name@1.1.4:
    resolution: {integrity: sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==}

  combined-stream@1.0.8:
    resolution: {integrity: sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==}
    engines: {node: '>= 0.8'}

  commander@10.0.1:
    resolution: {integrity: sha512-y4Mg2tXshplEbSGzx7amzPwKKOCGuoSRP/CjEdwwk0FOGlUbq6lKuoyDZTNZkmxHdJtp54hdfY/JUrdL7Xfdug==}
    engines: {node: '>=14'}

  concat-map@0.0.1:
    resolution: {integrity: sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==}

  convert-source-map@2.0.0:
    resolution: {integrity: sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==}

  create-jest@29.7.0:
    resolution: {integrity: sha512-Adz2bdH0Vq3F53KEMJOoftQFutWCukm6J24wbPWRO4k1kMY7gS7ds/uoJkNuV8wDCtWWnuwGcJwpWcih+zEW1Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true

  cross-spawn@7.0.6:
    resolution: {integrity: sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==}
    engines: {node: '>= 8'}

  csstype@3.1.3:
    resolution: {integrity: sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==}

  debug@4.4.0:
    resolution: {integrity: sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==}
    engines: {node: '>=6.0'}
    peerDependencies:
      supports-color: '*'
    peerDependenciesMeta:
      supports-color:
        optional: true

  decamelize@1.2.0:
    resolution: {integrity: sha512-z2S+W9X73hAUUki+N+9Za2lBlun89zigOyGrsax+KUQ6wKW4ZoWpEYBkGhQjwAjjDCkWxhY0VKEhk8wzY7F5cA==}
    engines: {node: '>=0.10.0'}

  dedent@1.5.3:
    resolution: {integrity: sha512-NHQtfOOW68WD8lgypbLA5oT+Bt0xXJhiYvoR6SmmNXZfpzOGXwdKWmcwG8N7PwVVWV3eF/68nmD9BaJSsTBhyQ==}
    peerDependencies:
      babel-plugin-macros: ^3.1.0
    peerDependenciesMeta:
      babel-plugin-macros:
        optional: true

  deep-is@0.1.4:
    resolution: {integrity: sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==}

  deepmerge@4.3.1:
    resolution: {integrity: sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==}
    engines: {node: '>=0.10.0'}

  delayed-stream@1.0.0:
    resolution: {integrity: sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==}
    engines: {node: '>=0.4.0'}

  detect-newline@3.1.0:
    resolution: {integrity: sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA==}
    engines: {node: '>=8'}

  diff-match-patch@1.0.5:
    resolution: {integrity: sha512-IayShXAgj/QMXgB0IWmKx+rOPuGMhqm5w6jvFxmVenXKIzRqTAAsbBPT3kWQeGANj3jGgvcvv4yK6SxqYmikgw==}

  diff-sequences@29.6.3:
    resolution: {integrity: sha512-EjePK1srD3P08o2j4f0ExnylqRs5B9tJjcp9t1krH2qRi8CCdsYfwe9JgSLurFBWwq4uOlipzfk5fHNvwFKr8Q==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  dir-glob@3.0.1:
    resolution: {integrity: sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==}
    engines: {node: '>=8'}

  doctrine@3.0.0:
    resolution: {integrity: sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==}
    engines: {node: '>=6.0.0'}

  eastasianwidth@0.2.0:
    resolution: {integrity: sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==}

  ecdsa-sig-formatter@1.0.11:
    resolution: {integrity: sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==}

  ejs@3.1.10:
    resolution: {integrity: sha512-UeJmFfOrAQS8OJWPZ4qtgHyWExa088/MtK5UEyoJGFH67cDEXkZSviOiKRCZ4Xij0zxI3JECgYs3oKx+AizQBA==}
    engines: {node: '>=0.10.0'}
    hasBin: true

  electron-to-chromium@1.5.74:
    resolution: {integrity: sha512-ck3//9RC+6oss/1Bh9tiAVFy5vfSKbRHAFh7Z3/eTRkEqJeWgymloShB17Vg3Z4nmDNp35vAd1BZ6CMW4Wt6Iw==}

  emittery@0.13.1:
    resolution: {integrity: sha512-DeWwawk6r5yR9jFgnDKYt4sLS0LmHJJi3ZOnb5/JdbYwj3nW+FxQnHIjhBKz8YLC7oRNPVM9NQ47I3CVx34eqQ==}
    engines: {node: '>=12'}

  emoji-regex@8.0.0:
    resolution: {integrity: sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==}

  emoji-regex@9.2.2:
    resolution: {integrity: sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==}

  entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  error-ex@1.3.2:
    resolution: {integrity: sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  escape-string-regexp@2.0.0:
    resolution: {integrity: sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w==}
    engines: {node: '>=8'}

  escape-string-regexp@4.0.0:
    resolution: {integrity: sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==}
    engines: {node: '>=10'}

  eslint-scope@7.2.2:
    resolution: {integrity: sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint-visitor-keys@3.4.3:
    resolution: {integrity: sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  eslint@8.57.1:
    resolution: {integrity: sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}
    deprecated: This version is no longer supported. Please see https://eslint.org/version-support for other options.
    hasBin: true

  esm-env@1.2.1:
    resolution: {integrity: sha512-U9JedYYjCnadUlXk7e1Kr+aENQhtUaoaV9+gZm1T8LC/YBAPJx3NSPIAurFOC0U5vrdSevnUJS2/wUVxGwPhng==}

  espree@9.6.1:
    resolution: {integrity: sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==}
    engines: {node: ^12.22.0 || ^14.17.0 || >=16.0.0}

  esprima@4.0.1:
    resolution: {integrity: sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==}
    engines: {node: '>=4'}
    hasBin: true

  esquery@1.6.0:
    resolution: {integrity: sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==}
    engines: {node: '>=0.10'}

  esrap@1.2.3:
    resolution: {integrity: sha512-ZlQmCCK+n7SGoqo7DnfKaP1sJZa49P01/dXzmjCASSo04p72w8EksT2NMK8CEX8DhKsfJXANioIw8VyHNsBfvQ==}

  esrecurse@4.3.0:
    resolution: {integrity: sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==}
    engines: {node: '>=4.0'}

  estraverse@5.3.0:
    resolution: {integrity: sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==}
    engines: {node: '>=4.0'}

  estree-walker@2.0.2:
    resolution: {integrity: sha512-Rfkk/Mp/DL7JVje3u18FxFujQlTNR2q6QfMSMB7AvCBx91NGj/ba3kCfza0f6dVDbw7YlRf/nDrn7pQrCCyQ/w==}

  esutils@2.0.3:
    resolution: {integrity: sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==}
    engines: {node: '>=0.10.0'}

  event-target-shim@5.0.1:
    resolution: {integrity: sha512-i/2XbnSz/uxRCU6+NdVJgKWDTM427+MqYbkQzD321DuCQJUqOuJKIA0IM2+W2xtYHdKOmZ4dR6fExsd4SXL+WQ==}
    engines: {node: '>=6'}

  eventemitter3@4.0.7:
    resolution: {integrity: sha512-8guHBZCwKnFhYdHr2ysuRWErTwhoN2X8XELRlrRwpmfeY2jjuUN4taQMsULKUVo1K4DvZl+0pgfyoysHxvmvEw==}

  eventsource-parser@1.1.2:
    resolution: {integrity: sha512-v0eOBUbiaFojBu2s2NPBfYUoRR9GjcDNvCXVaqEf5vVfpIAh9f8RCo4vXTP8c63QRKCFwoLpMpTdPwwhEKVgzA==}
    engines: {node: '>=14.18'}

  eventsource-parser@3.0.0:
    resolution: {integrity: sha512-T1C0XCUimhxVQzW4zFipdx0SficT651NnkR0ZSH3yQwh+mFMdLfgjABVi4YtMTtaL4s168593DaoaRLMqryavA==}
    engines: {node: '>=18.0.0'}

  execa@5.1.1:
    resolution: {integrity: sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==}
    engines: {node: '>=10'}

  exit@0.1.2:
    resolution: {integrity: sha512-Zk/eNKV2zbjpKzrsQ+n1G6poVbErQxJ0LBOJXaKZ1EViLzH+hrLu9cdXI4zw9dBQJslwBEpbQ2P1oS7nDxs6jQ==}
    engines: {node: '>= 0.8.0'}

  expect@29.7.0:
    resolution: {integrity: sha512-2Zks0hf1VLFYI1kbh0I5jP3KHHyCHpkfyHBzsSXRFgl/Bg9mWYfMW8oD+PdMPlEwy5HNsR9JutYy6pMeOh61nw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  extend@3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-glob@3.3.2:
    resolution: {integrity: sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==}
    engines: {node: '>=8.6.0'}

  fast-json-stable-stringify@2.1.0:
    resolution: {integrity: sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==}

  fast-levenshtein@2.0.6:
    resolution: {integrity: sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==}

  fastembed@1.14.1:
    resolution: {integrity: sha512-Y14v+FWZwjNUpQ7mRGYu4N5yF+hZkF7zqzPWzzLbwdIEtYsHy0DSpiVJ+Fg6Oi1fQjrBKASQt0hdSMSjw1/Wtw==}

  fastestsmallesttextencoderdecoder@1.0.22:
    resolution: {integrity: sha512-Pb8d48e+oIuY4MaM64Cd7OW1gt4nxCHs7/ddPPZ/Ic3sg8yVGM7O9wDvZ7us6ScaUupzM+pfBolwtYhN1IxBIw==}

  fastq@1.17.1:
    resolution: {integrity: sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==}

  fb-watchman@2.0.2:
    resolution: {integrity: sha512-p5161BqbuCaSnB8jIbzQHOlpgsPmK5rJVDfDKO91Axs5NC1uu3HRQm6wt9cd9/+GtQQIO53JdGXXoyDpTAsgYA==}

  file-entry-cache@6.0.1:
    resolution: {integrity: sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==}
    engines: {node: ^10.12.0 || >=12.0.0}

  filelist@1.0.4:
    resolution: {integrity: sha512-w1cEuf3S+DrLCQL7ET6kz+gmlJdbq9J7yXCSjK/OZCPA+qEN1WyF4ZAf0YYJa4/shHJra2t/d/r8SV4Ji+x+8Q==}

  fill-range@7.1.1:
    resolution: {integrity: sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==}
    engines: {node: '>=8'}

  find-up@4.1.0:
    resolution: {integrity: sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==}
    engines: {node: '>=8'}

  find-up@5.0.0:
    resolution: {integrity: sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==}
    engines: {node: '>=10'}

  flat-cache@3.2.0:
    resolution: {integrity: sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==}
    engines: {node: ^10.12.0 || >=12.0.0}

  flatted@3.3.2:
    resolution: {integrity: sha512-AiwGJM8YcNOaobumgtng+6NHuOqC3A7MixFeDafM3X9cIUM+xUXoS5Vfgf+OihAYe20fxqNM9yPBXJzRtZ/4eA==}

  foreground-child@3.3.0:
    resolution: {integrity: sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==}
    engines: {node: '>=14'}

  form-data-encoder@1.7.2:
    resolution: {integrity: sha512-qfqtYan3rxrnCk1VYaA4H+Ms9xdpPqvLZa6xmMgFvhO32x7/3J/ExcTd6qpxM0vH2GdMI+poehyBZvqfMTto8A==}

  form-data@4.0.1:
    resolution: {integrity: sha512-tzN8e4TX8+kkxGPK8D5u0FNmjPUjw3lwC9lSLxxoB/+GtsJG91CO8bSWy73APlgAZzZbXEYZJuxjkHH2w+Ezhw==}
    engines: {node: '>= 6'}

  formdata-node@4.4.1:
    resolution: {integrity: sha512-0iirZp3uVDjVGt9p49aTaqjk84TrglENEDuqfdlZQ1roC9CWlPk6Avf8EEnZNcAqPonwkG35x4n3ww/1THYAeQ==}
    engines: {node: '>= 12.20'}

  fs-minipass@2.1.0:
    resolution: {integrity: sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==}
    engines: {node: '>= 8'}

  fs.realpath@1.0.0:
    resolution: {integrity: sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  function-bind@1.1.2:
    resolution: {integrity: sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==}

  gaxios@6.7.1:
    resolution: {integrity: sha512-LDODD4TMYx7XXdpwxAVRAIAuB0bzv0s+ywFonY46k126qzQHT9ygyoa9tncmOiQmmDrik65UYsEkv3lbfqQ3yQ==}
    engines: {node: '>=14'}

  gcp-metadata@6.1.0:
    resolution: {integrity: sha512-Jh/AIwwgaxan+7ZUUmRLCjtchyDiqh4KjBJ5tW3plBZb5iL/BPcso8A5DlzeD9qlw0duCamnNdpFjxwaT0KyKg==}
    engines: {node: '>=14'}

  gensync@1.0.0-beta.2:
    resolution: {integrity: sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==}
    engines: {node: '>=6.9.0'}

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  get-package-type@0.1.0:
    resolution: {integrity: sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q==}
    engines: {node: '>=8.0.0'}

  get-stream@6.0.1:
    resolution: {integrity: sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg==}
    engines: {node: '>=10'}

  glob-parent@5.1.2:
    resolution: {integrity: sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==}
    engines: {node: '>= 6'}

  glob-parent@6.0.2:
    resolution: {integrity: sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==}
    engines: {node: '>=10.13.0'}

  glob@11.0.0:
    resolution: {integrity: sha512-9UiX/Bl6J2yaBbxKoEBRm4Cipxgok8kQYcOPEhScPwebu2I0HoQOuYdIO6S3hLuWoZgpDpwQZMzTFxgpkyT76g==}
    engines: {node: 20 || >=22}
    hasBin: true

  glob@7.2.3:
    resolution: {integrity: sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==}
    deprecated: Glob versions prior to v9 are no longer supported

  globals@11.12.0:
    resolution: {integrity: sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==}
    engines: {node: '>=4'}

  globals@13.24.0:
    resolution: {integrity: sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==}
    engines: {node: '>=8'}

  globby@11.1.0:
    resolution: {integrity: sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==}
    engines: {node: '>=10'}

  google-auth-library@9.15.0:
    resolution: {integrity: sha512-7ccSEJFDFO7exFbO6NRyC+xH8/mZ1GZGG2xxx9iHxZWcjUjJpjWxIMw3cofAKcueZ6DATiukmmprD7yavQHOyQ==}
    engines: {node: '>=14'}

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  graphemer@1.4.0:
    resolution: {integrity: sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==}

  gtoken@7.1.0:
    resolution: {integrity: sha512-pCcEwRi+TKpMlxAQObHDQ56KawURgyAf6jtIY046fJ5tIv3zDe/LEIubckAO8fj6JnAxLdmWkUfNyulQ2iKdEw==}
    engines: {node: '>=14.0.0'}

  handlebars@4.7.8:
    resolution: {integrity: sha512-vafaFqs8MZkRrSX7sFVUdo3ap/eNiLnb4IakshzvP56X5Nr1iGKAIqdX6tMlm6HcNRIkr6AxO5jFEoJzzpT8aQ==}
    engines: {node: '>=0.4.7'}
    hasBin: true

  has-flag@4.0.0:
    resolution: {integrity: sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==}
    engines: {node: '>=8'}

  hasown@2.0.2:
    resolution: {integrity: sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==}
    engines: {node: '>= 0.4'}

  html-escaper@2.0.2:
    resolution: {integrity: sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg==}

  https-proxy-agent@7.0.6:
    resolution: {integrity: sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==}
    engines: {node: '>= 14'}

  human-signals@2.1.0:
    resolution: {integrity: sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw==}
    engines: {node: '>=10.17.0'}

  humanize-ms@1.2.1:
    resolution: {integrity: sha512-Fl70vYtsAFb/C06PTS9dZBo7ihau+Tu/DNCk/OyHhea07S+aeMWpFFkUaXRa8fI+ScZbEI8dfSxwY7gxZ9SAVQ==}

  ignore@5.3.2:
    resolution: {integrity: sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==}
    engines: {node: '>= 4'}

  import-fresh@3.3.0:
    resolution: {integrity: sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==}
    engines: {node: '>=6'}

  import-local@3.2.0:
    resolution: {integrity: sha512-2SPlun1JUPWoM6t3F0dw0FkCF/jWY8kttcY4f599GLTSjh2OCuuhdTkJQsEcZzBqbXZGKMK2OqW1oZsjtf/gQA==}
    engines: {node: '>=8'}
    hasBin: true

  imurmurhash@0.1.4:
    resolution: {integrity: sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==}
    engines: {node: '>=0.8.19'}

  inflight@1.0.6:
    resolution: {integrity: sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==}
    deprecated: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

  inherits@2.0.4:
    resolution: {integrity: sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==}

  is-arrayish@0.2.1:
    resolution: {integrity: sha512-zz06S8t0ozoDXMG+ube26zeCTNXcKIPJZJi8hBrF4idCLms4CG9QtK7qBl1boi5ODzFpjswb5JPmHCbMpjaYzg==}

  is-core-module@2.16.0:
    resolution: {integrity: sha512-urTSINYfAYgcbLb0yDQ6egFm6h3Mo1DcF9EkyXSRjjzdHbsulg01qhwWuXdOoUBuTkbQ80KDboXa0vFJ+BDH+g==}
    engines: {node: '>= 0.4'}

  is-extglob@2.1.1:
    resolution: {integrity: sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==}
    engines: {node: '>=0.10.0'}

  is-fullwidth-code-point@3.0.0:
    resolution: {integrity: sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==}
    engines: {node: '>=8'}

  is-generator-fn@2.1.0:
    resolution: {integrity: sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ==}
    engines: {node: '>=6'}

  is-glob@4.0.3:
    resolution: {integrity: sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==}
    engines: {node: '>=0.10.0'}

  is-number@7.0.0:
    resolution: {integrity: sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==}
    engines: {node: '>=0.12.0'}

  is-path-inside@3.0.3:
    resolution: {integrity: sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==}
    engines: {node: '>=8'}

  is-reference@3.0.3:
    resolution: {integrity: sha512-ixkJoqQvAP88E6wLydLGGqCJsrFUnqoH6HnaczB8XmDH1oaWU+xxdptvikTgaEhtZ53Ky6YXiBuUI2WXLMCwjw==}

  is-stream@2.0.1:
    resolution: {integrity: sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg==}
    engines: {node: '>=8'}

  isexe@2.0.0:
    resolution: {integrity: sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==}

  istanbul-lib-coverage@3.2.2:
    resolution: {integrity: sha512-O8dpsF+r0WV/8MNRKfnmrtCWhuKjxrq2w+jpzBL5UZKTi2LeVWnWOmWRxFlesJONmc+wLAGvKQZEOanko0LFTg==}
    engines: {node: '>=8'}

  istanbul-lib-instrument@5.2.1:
    resolution: {integrity: sha512-pzqtp31nLv/XFOzXGuvhCb8qhjmTVo5vjVk19XE4CRlSWz0KoeJ3bw9XsA7nOp9YBf4qHjwBxkDzKcME/J29Yg==}
    engines: {node: '>=8'}

  istanbul-lib-instrument@6.0.3:
    resolution: {integrity: sha512-Vtgk7L/R2JHyyGW07spoFlB8/lpjiOLTjMdms6AFMraYt3BaJauod/NGrfnVG/y4Ix1JEuMRPDPEj2ua+zz1/Q==}
    engines: {node: '>=10'}

  istanbul-lib-report@3.0.1:
    resolution: {integrity: sha512-GCfE1mtsHGOELCU8e/Z7YWzpmybrx/+dSTfLrvY8qRmaY6zXTKWn6WQIjaAFw069icm6GVMNkgu0NzI4iPZUNw==}
    engines: {node: '>=10'}

  istanbul-lib-source-maps@4.0.1:
    resolution: {integrity: sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==}
    engines: {node: '>=10'}

  istanbul-reports@3.1.7:
    resolution: {integrity: sha512-BewmUXImeuRk2YY0PVbxgKAysvhRPUQE0h5QRM++nVWyubKGV0l8qQ5op8+B2DOmwSe63Jivj0BjkPQVf8fP5g==}
    engines: {node: '>=8'}

  jackspeak@4.0.2:
    resolution: {integrity: sha512-bZsjR/iRjl1Nk1UkjGpAzLNfQtzuijhn2g+pbZb98HQ1Gk8vM9hfbxeMBP+M2/UUdwj0RqGG3mlvk2MsAqwvEw==}
    engines: {node: 20 || >=22}

  jake@10.9.2:
    resolution: {integrity: sha512-2P4SQ0HrLQ+fw6llpLnOaGAvN2Zu6778SJMrCUwns4fOoG9ayrTiZk3VV8sCPkVZF8ab0zksVpS8FDY5pRCNBA==}
    engines: {node: '>=10'}
    hasBin: true

  jest-changed-files@29.7.0:
    resolution: {integrity: sha512-fEArFiwf1BpQ+4bXSprcDc3/x4HSzL4al2tozwVpDFpsxALjLYdyiIK4e5Vz66GQJIbXJ82+35PtysofptNX2w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-circus@29.7.0:
    resolution: {integrity: sha512-3E1nCMgipcTkCocFwM90XXQab9bS+GMsjdpmPrlelaxwD93Ad8iVEjX/vvHPdLPnFf+L40u+5+iutRdA1N9myw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-cli@29.7.0:
    resolution: {integrity: sha512-OVVobw2IubN/GSYsxETi+gOe7Ka59EFMR/twOU3Jb2GnKKeMGJB5SGUUrEz3SFVmJASUdZUzy83sLNNQ2gZslg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  jest-config@29.7.0:
    resolution: {integrity: sha512-uXbpfeQ7R6TZBqI3/TxCU4q4ttk3u0PJeC+E0zbfSoSjq6bJ7buBPxzQPL0ifrkY4DNu4JUdk0ImlBUYi840eQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    peerDependencies:
      '@types/node': '*'
      ts-node: '>=9.0.0'
    peerDependenciesMeta:
      '@types/node':
        optional: true
      ts-node:
        optional: true

  jest-diff@29.7.0:
    resolution: {integrity: sha512-LMIgiIrhigmPrs03JHpxUh2yISK3vLFPkAodPeo0+BuF7wA2FoQbkEg1u8gBYBThncu7e1oEDUfIXVuTqLRUjw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-docblock@29.7.0:
    resolution: {integrity: sha512-q617Auw3A612guyaFgsbFeYpNP5t2aoUNLwBUbc/0kD1R4t9ixDbyFTHd1nok4epoVFpr7PmeWHrhvuV3XaJ4g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-each@29.7.0:
    resolution: {integrity: sha512-gns+Er14+ZrEoC5fhOfYCY1LOHHr0TI+rQUHZS8Ttw2l7gl+80eHc/gFf2Ktkw0+SIACDTeWvpFcv3B04VembQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-environment-node@29.7.0:
    resolution: {integrity: sha512-DOSwCRqXirTOyheM+4d5YZOrWcdu0LNZ87ewUoywbcb2XR4wKgqiG8vNeYwhjFMbEkfju7wx2GYH0P2gevGvFw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-get-type@29.6.3:
    resolution: {integrity: sha512-zrteXnqYxfQh7l5FHyL38jL39di8H8rHoecLH3JNxH3BwOrBsNeabdap5e0I23lD4HHI8W5VFBZqG4Eaq5LNcw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-haste-map@29.7.0:
    resolution: {integrity: sha512-fP8u2pyfqx0K1rGn1R9pyE0/KTn+G7PxktWidOBTqFPLYX0b9ksaMFkhK5vrS3DVun09pckLdlx90QthlW7AmA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-leak-detector@29.7.0:
    resolution: {integrity: sha512-kYA8IJcSYtST2BY9I+SMC32nDpBT3J2NvWJx8+JCuCdl/CR1I4EKUJROiP8XtCcxqgTTBGJNdbB1A8XRKbTetw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-matcher-utils@29.7.0:
    resolution: {integrity: sha512-sBkD+Xi9DtcChsI3L3u0+N0opgPYnCRPtGcQYrgXmR+hmt/fYfWAL0xRXYU8eWOdfuLgBe0YCW3AFtnRLagq/g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-message-util@29.7.0:
    resolution: {integrity: sha512-GBEV4GRADeP+qtB2+6u61stea8mGcOT4mCtrYISZwfu9/ISHFJ/5zOMXYbpBE9RsS5+Gb63DW4FgmnKJ79Kf6w==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-mock@29.7.0:
    resolution: {integrity: sha512-ITOMZn+UkYS4ZFh83xYAOzWStloNzJFO2s8DWrE4lhtGD+AorgnbkiKERe4wQVBydIGPx059g6riW5Btp6Llnw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-pnp-resolver@1.2.3:
    resolution: {integrity: sha512-+3NpwQEnRoIBtx4fyhblQDPgJI0H1IEIkX7ShLUjPGA7TtUTvI1oiKi3SR4oBR0hQhQR80l4WAe5RrXBwWMA8w==}
    engines: {node: '>=6'}
    peerDependencies:
      jest-resolve: '*'
    peerDependenciesMeta:
      jest-resolve:
        optional: true

  jest-regex-util@29.6.3:
    resolution: {integrity: sha512-KJJBsRCyyLNWCNBOvZyRDnAIfUiRJ8v+hOBQYGn8gDyF3UegwiP4gwRR3/SDa42g1YbVycTidUF3rKjyLFDWbg==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-resolve-dependencies@29.7.0:
    resolution: {integrity: sha512-un0zD/6qxJ+S0et7WxeI3H5XSe9lTBBR7bOHCHXkKR6luG5mwDDlIzVQ0V5cZCuoTgEdcdwzTghYkTWfubi+nA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-resolve@29.7.0:
    resolution: {integrity: sha512-IOVhZSrg+UvVAshDSDtHyFCCBUl/Q3AAJv8iZ6ZjnZ74xzvwuzLXid9IIIPgTnY62SJjfuupMKZsZQRsCvxEgA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-runner@29.7.0:
    resolution: {integrity: sha512-fsc4N6cPCAahybGBfTRcq5wFR6fpLznMg47sY5aDpsoejOcVYFb07AHuSnR0liMcPTgBsA3ZJL6kFOjPdoNipQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-runtime@29.7.0:
    resolution: {integrity: sha512-gUnLjgwdGqW7B4LvOIkbKs9WGbn+QLqRQQ9juC6HndeDiezIwhDP+mhMwHWCEcfQ5RUXa6OPnFF8BJh5xegwwQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-snapshot@29.7.0:
    resolution: {integrity: sha512-Rm0BMWtxBcioHr1/OX5YCP8Uov4riHvKPknOGs804Zg9JGZgmIBkbtlxJC/7Z4msKYVbIJtfU+tKb8xlYNfdkw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-util@29.7.0:
    resolution: {integrity: sha512-z6EbKajIpqGKU56y5KBUgy1dt1ihhQJgWzUlZHArA/+X2ad7Cb5iF+AK1EWVL/Bo7Rz9uurpqw6SiBCefUbCGA==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-validate@29.7.0:
    resolution: {integrity: sha512-ZB7wHqaRGVw/9hST/OuFUReG7M8vKeq0/J2egIGLdvjHCmYqGARhzXmtgi+gVeZ5uXFF219aOc3Ls2yLg27tkw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-watcher@29.7.0:
    resolution: {integrity: sha512-49Fg7WXkU3Vl2h6LbLtMQ/HyB6rXSIX7SqvBLQmssRBGN9I0PNvPmAmCWSOY6SOvrjhI/F7/bGAv9RtnsPA03g==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest-worker@29.7.0:
    resolution: {integrity: sha512-eIz2msL/EzL9UFTFFx7jBTkeZfku0yUAyZZZmJ93H2TYEiroIx2PQjEXcwYtYl8zXCxb+PAmA2hLIt/6ZEkPHw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  jest@29.7.0:
    resolution: {integrity: sha512-NIy3oAFp9shda19hy4HK0HRTWKtPJmGdnvywu01nOqNC2vZg+Z+fvJDxpMQA88eb2I9EcafcdjYgsDthnYTvGw==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}
    hasBin: true
    peerDependencies:
      node-notifier: ^8.0.1 || ^9.0.0 || ^10.0.0
    peerDependenciesMeta:
      node-notifier:
        optional: true

  js-sha1@0.7.0:
    resolution: {integrity: sha512-oQZ1Mo7440BfLSv9TX87VNEyU52pXPVG19F9PL3gTgNt0tVxlZ8F4O6yze3CLuLx28TxotxvlyepCNaaV0ZjMw==}

  js-tiktoken@1.0.15:
    resolution: {integrity: sha512-65ruOWWXDEZHHbAo7EjOcNxOGasQKbL4Fq3jEr2xsCqSsoOo6VVSqzWQb6PRIqypFSDcma4jO90YP0w5X8qVXQ==}

  js-tokens@4.0.0:
    resolution: {integrity: sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==}

  js-yaml@3.14.1:
    resolution: {integrity: sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==}
    hasBin: true

  js-yaml@4.1.0:
    resolution: {integrity: sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==}
    hasBin: true

  jsesc@3.1.0:
    resolution: {integrity: sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==}
    engines: {node: '>=6'}
    hasBin: true

  json-bigint@1.0.0:
    resolution: {integrity: sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ==}

  json-buffer@3.0.1:
    resolution: {integrity: sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==}

  json-parse-even-better-errors@2.3.1:
    resolution: {integrity: sha512-xyFwyhro/JEof6Ghe2iz2NcXoj2sloNsWr/XsERDK/oiPCfaNhl5ONfp+jQdAZRQQ0IJWNzH9zIZF7li91kh2w==}

  json-schema-traverse@0.4.1:
    resolution: {integrity: sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==}

  json-schema@0.4.0:
    resolution: {integrity: sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA==}

  json-stable-stringify-without-jsonify@1.0.1:
    resolution: {integrity: sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==}

  json5@2.2.3:
    resolution: {integrity: sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==}
    engines: {node: '>=6'}
    hasBin: true

  jsondiffpatch@0.6.0:
    resolution: {integrity: sha512-3QItJOXp2AP1uv7waBkao5nCvhEv+QmJAd38Ybq7wNI74Q+BBmnLn4EDKz6yI9xGAIQoUF87qHt+kc1IVxB4zQ==}
    engines: {node: ^18.0.0 || >=20.0.0}
    hasBin: true

  jsonpointer@5.0.1:
    resolution: {integrity: sha512-p/nXbhSEcu3pZRdkW1OfJhpsVtW1gd4Wa1fnQc9YLiTfAjn0312eMKimbdIQzuZl9aa9xUGaRlP9T/CJE/ditQ==}
    engines: {node: '>=0.10.0'}

  jwa@2.0.0:
    resolution: {integrity: sha512-jrZ2Qx916EA+fq9cEAeCROWPTfCwi1IVHqT2tapuqLEVVDKFDENFw1oL+MwrTvH6msKxsd1YTDVw6uKEcsrLEA==}

  jws@4.0.0:
    resolution: {integrity: sha512-KDncfTmOZoOMTFG4mBlG0qUIOlc03fmzH+ru6RgYVZhPkyiy/92Owlt/8UEN+a4TXR1FQetfIpJE8ApdvdVxTg==}

  keyv@4.5.4:
    resolution: {integrity: sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==}

  kleur@3.0.3:
    resolution: {integrity: sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w==}
    engines: {node: '>=6'}

  langchain@0.3.6:
    resolution: {integrity: sha512-erZOIKXzwCOrQHqY9AyjkQmaX62zUap1Sigw1KrwMUOnVoLKkVNRmAyxFlNZDZ9jLs/58MaQcaT9ReJtbj3x6w==}
    engines: {node: '>=18'}
    peerDependencies:
      '@langchain/anthropic': '*'
      '@langchain/aws': '*'
      '@langchain/cohere': '*'
      '@langchain/core': '>=0.2.21 <0.4.0'
      '@langchain/google-genai': '*'
      '@langchain/google-vertexai': '*'
      '@langchain/groq': '*'
      '@langchain/mistralai': '*'
      '@langchain/ollama': '*'
      axios: '*'
      cheerio: '*'
      handlebars: ^4.7.8
      peggy: ^3.0.2
      typeorm: '*'
    peerDependenciesMeta:
      '@langchain/anthropic':
        optional: true
      '@langchain/aws':
        optional: true
      '@langchain/cohere':
        optional: true
      '@langchain/google-genai':
        optional: true
      '@langchain/google-vertexai':
        optional: true
      '@langchain/groq':
        optional: true
      '@langchain/mistralai':
        optional: true
      '@langchain/ollama':
        optional: true
      axios:
        optional: true
      cheerio:
        optional: true
      handlebars:
        optional: true
      peggy:
        optional: true
      typeorm:
        optional: true

  langsmith@0.2.13:
    resolution: {integrity: sha512-16EOM5nhU6GlMCKGm5sgBIAKOKzS2d30qcDZmF21kSLZJiUhUNTROwvYdqgZLrGfIIzmSMJHCKA7RFd5qf50uw==}
    peerDependencies:
      openai: '*'
    peerDependenciesMeta:
      openai:
        optional: true

  leven@3.1.0:
    resolution: {integrity: sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A==}
    engines: {node: '>=6'}

  levn@0.4.1:
    resolution: {integrity: sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==}
    engines: {node: '>= 0.8.0'}

  lines-and-columns@1.2.4:
    resolution: {integrity: sha512-7ylylesZQ/PV29jhEDl3Ufjo6ZX7gCqJr5F7PKrqc93v7fzSymt1BpwEU8nAUXs8qzzvqhbjhK5QZg6Mt/HkBg==}

  locate-character@3.0.0:
    resolution: {integrity: sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==}

  locate-path@5.0.0:
    resolution: {integrity: sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==}
    engines: {node: '>=8'}

  locate-path@6.0.0:
    resolution: {integrity: sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==}
    engines: {node: '>=10'}

  lodash.memoize@4.1.2:
    resolution: {integrity: sha512-t7j+NzmgnQzTAYXcsHYLgimltOV1MXHtlOWf6GjL9Kj8GK5FInw5JotxvbOs+IvV1/Dzo04/fCGfLVs7aXb4Ag==}

  lodash.merge@4.6.2:
    resolution: {integrity: sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==}

  loose-envify@1.4.0:
    resolution: {integrity: sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==}
    hasBin: true

  lru-cache@11.0.2:
    resolution: {integrity: sha512-123qHRfJBmo2jXDbo/a5YOQrJoHF/GNQTLzQ5+IdK5pWpceK17yRc6ozlWd25FxvGKQbIUs91fDFkXmDHTKcyA==}
    engines: {node: 20 || >=22}

  lru-cache@5.1.1:
    resolution: {integrity: sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==}

  magic-string@0.30.17:
    resolution: {integrity: sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==}

  make-dir@4.0.0:
    resolution: {integrity: sha512-hXdUTZYIVOt1Ex//jAQi+wTZZpUpwBj/0QsOzqegb3rGMMeJiSEu5xLHnYfBrRV4RH2+OCSOO95Is/7x1WJ4bw==}
    engines: {node: '>=10'}

  make-error@1.3.6:
    resolution: {integrity: sha512-s8UhlNe7vPKomQhC1qFelMokr/Sc3AgNbso3n74mVPA5LTZwkB9NlXf4XPamLxJE8h0gh73rM94xvwRT2CVInw==}

  makeerror@1.0.12:
    resolution: {integrity: sha512-JmqCvUhmt43madlpFzG4BQzG2Z3m6tvQDNKdClZnO3VbIudJYmxsT0FNJMeiB2+JTSlTQTSbU8QdesVmwJcmLg==}

  merge-stream@2.0.0:
    resolution: {integrity: sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==}

  merge2@1.4.1:
    resolution: {integrity: sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==}
    engines: {node: '>= 8'}

  micromatch@4.0.8:
    resolution: {integrity: sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==}
    engines: {node: '>=8.6'}

  mime-db@1.52.0:
    resolution: {integrity: sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==}
    engines: {node: '>= 0.6'}

  mime-types@2.1.35:
    resolution: {integrity: sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==}
    engines: {node: '>= 0.6'}

  mimic-fn@2.1.0:
    resolution: {integrity: sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==}
    engines: {node: '>=6'}

  minimatch@10.0.1:
    resolution: {integrity: sha512-ethXTt3SGGR+95gudmqJ1eNhRO7eGEGIgYA9vnPatK4/etz2MEVDno5GMCibdMTuBMyElzIlgxMna3K94XDIDQ==}
    engines: {node: 20 || >=22}

  minimatch@3.1.2:
    resolution: {integrity: sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==}

  minimatch@5.1.6:
    resolution: {integrity: sha512-lKwV/1brpG6mBUFHtb7NUmtABCb2WZZmm2wNiOA5hAb8VdCS4B3dtMWyvcoViccwAW/COERjXLt0zP1zXUN26g==}
    engines: {node: '>=10'}

  minimatch@9.0.3:
    resolution: {integrity: sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==}
    engines: {node: '>=16 || 14 >=14.17'}

  minimist@1.2.8:
    resolution: {integrity: sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==}

  minipass@3.3.6:
    resolution: {integrity: sha512-DxiNidxSEK+tHG6zOIklvNOwm3hvCrbUrdtzY74U6HKTJxvIDfOUL5W5P2Ghd3DTkhhKPYGqeNUIh5qcM4YBfw==}
    engines: {node: '>=8'}

  minipass@5.0.0:
    resolution: {integrity: sha512-3FnjYuehv9k6ovOEbyOswadCDPX1piCfhV8ncmYtHOjuPwylVWsghTLo7rabjC3Rx5xD4HDx8Wm1xnMF7S5qFQ==}
    engines: {node: '>=8'}

  minipass@7.1.2:
    resolution: {integrity: sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==}
    engines: {node: '>=16 || 14 >=14.17'}

  minizlib@2.1.2:
    resolution: {integrity: sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==}
    engines: {node: '>= 8'}

  mkdirp@1.0.4:
    resolution: {integrity: sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw==}
    engines: {node: '>=10'}
    hasBin: true

  ms@2.1.3:
    resolution: {integrity: sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==}

  mustache@4.2.0:
    resolution: {integrity: sha512-71ippSywq5Yb7/tVYyGbkBggbU8H3u5Rz56fH60jGFgr8uHwxs+aSKeqmluIVzM0m0kB7xQjKS6qPfd0b2ZoqQ==}
    hasBin: true

  nanoid@3.3.6:
    resolution: {integrity: sha512-BGcqMMJuToF7i1rt+2PWSNVnWIkGCU78jBG3RxO/bZlnZPK2Cmi2QaffxGO/2RvWi9sL+FAiRiXMgsyxQ1DIDA==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  nanoid@3.3.8:
    resolution: {integrity: sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  natural-compare@1.4.0:
    resolution: {integrity: sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==}

  neo-async@2.6.2:
    resolution: {integrity: sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==}

  node-domexception@1.0.0:
    resolution: {integrity: sha512-/jKZoMpw0F8GRwl4/eLROPA3cfcXtLApP0QzLmUT/HuPCZWyB7IY9ZrMeKw2O/nFIqPQB3PVM9aYm0F312AXDQ==}
    engines: {node: '>=10.5.0'}

  node-fetch@2.7.0:
    resolution: {integrity: sha512-c4FRfUm/dbcWZ7U+1Wq0AwCyFL+3nt2bEw05wfxSz+DWpWsitgmSgYmy2dQdWyKC1694ELPqMs/YzUSNozLt8A==}
    engines: {node: 4.x || >=6.0.0}
    peerDependencies:
      encoding: ^0.1.0
    peerDependenciesMeta:
      encoding:
        optional: true

  node-int64@0.4.0:
    resolution: {integrity: sha512-O5lz91xSOeoXP6DulyHfllpq+Eg00MWitZIbtPfoSEvqIHdl5gfcY6hYzDWnj0qD5tz52PI08u9qUvSVeUBeHw==}

  node-releases@2.0.19:
    resolution: {integrity: sha512-xxOWJsBKtzAq7DY0J+DTzuz58K8e7sJbdgwkbMWQe8UYB6ekmsQ45q0M/tJDsGaZmbC+l7n57UV8Hl5tHxO9uw==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  npm-run-path@4.0.1:
    resolution: {integrity: sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==}
    engines: {node: '>=8'}

  ollama-ai-provider@0.16.1:
    resolution: {integrity: sha512-0vSQVz5Y/LguyzfO4bi1JrrVGF/k2JvO8/uFR0wYmqDFp8KPp4+AhdENSynGBr1oRhMWOM4F1l6cv7UNDgRMjw==}
    engines: {node: '>=18'}
    peerDependencies:
      zod: ^3.0.0
    peerDependenciesMeta:
      zod:
        optional: true

  once@1.4.0:
    resolution: {integrity: sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==}

  onetime@5.1.2:
    resolution: {integrity: sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==}
    engines: {node: '>=6'}

  onnxruntime-common@1.15.1:
    resolution: {integrity: sha512-Y89eJ8QmaRsPZPWLaX7mfqhj63ny47rSkQe80hIo+lvBQdrdXYR9VO362xvZulk9DFkCnXmGidprvgJ07bKsIQ==}

  onnxruntime-node@1.15.1:
    resolution: {integrity: sha512-wzhVELulmrvNoMZw0/HfV+9iwgHX+kPS82nxodZ37WCXmbeo1jp3thamTsNg8MGhxvv4GmEzRum5mo40oqIsqw==}
    os: [win32, darwin, linux]

  openai@4.73.0:
    resolution: {integrity: sha512-NZstV77w3CEol9KQTRBRQ15+Sw6nxVTicAULSjYO4wn9E5gw72Mtp3fAVaBFXyyVPws4241YmFG6ya4L8v03tA==}
    hasBin: true
    peerDependencies:
      zod: ^3.23.8
    peerDependenciesMeta:
      zod:
        optional: true

  openapi-types@12.1.3:
    resolution: {integrity: sha512-N4YtSYJqghVu4iek2ZUvcN/0aqH1kRDuNqzcycDxhOUpg7GdvLa2F3DgS6yBNhInhv2r/6I0Flkn7CqL8+nIcw==}

  optionator@0.9.4:
    resolution: {integrity: sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==}
    engines: {node: '>= 0.8.0'}

  p-finally@1.0.0:
    resolution: {integrity: sha512-LICb2p9CB7FS+0eR1oqWnHhp0FljGLZCWBE9aix0Uye9W8LTQPwMTYVGWQWIw9RdQiDg4+epXQODwIYJtSJaow==}
    engines: {node: '>=4'}

  p-limit@2.3.0:
    resolution: {integrity: sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==}
    engines: {node: '>=6'}

  p-limit@3.1.0:
    resolution: {integrity: sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==}
    engines: {node: '>=10'}

  p-locate@4.1.0:
    resolution: {integrity: sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==}
    engines: {node: '>=8'}

  p-locate@5.0.0:
    resolution: {integrity: sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==}
    engines: {node: '>=10'}

  p-queue@6.6.2:
    resolution: {integrity: sha512-RwFpb72c/BhQLEXIZ5K2e+AhgNVmIejGlTgiB9MzZ0e93GRvqZ7uSi0dvRF7/XIXDeNkra2fNHBxTyPDGySpjQ==}
    engines: {node: '>=8'}

  p-retry@4.6.2:
    resolution: {integrity: sha512-312Id396EbJdvRONlngUx0NydfrIQ5lsYu0znKVUzVvArzEIt08V1qhtyESbGVd1FGX7UKtiFp5uwKZdM8wIuQ==}
    engines: {node: '>=8'}

  p-timeout@3.2.0:
    resolution: {integrity: sha512-rhIwUycgwwKcP9yTOOFK/AKsAopjjCakVqLHePO3CC6Mir1Z99xT+R63jZxAT5lFZLa2inS5h+ZS2GvR99/FBg==}
    engines: {node: '>=8'}

  p-try@2.2.0:
    resolution: {integrity: sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==}
    engines: {node: '>=6'}

  package-json-from-dist@1.0.1:
    resolution: {integrity: sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==}

  parent-module@1.0.1:
    resolution: {integrity: sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==}
    engines: {node: '>=6'}

  parse-json@5.2.0:
    resolution: {integrity: sha512-ayCKvm/phCGxOkYRSCM82iDwct8/EonSEgCSxWxD7ve6jHggsFl4fZVQBPRNgQoKiuV/odhFrGzQXZwbifC8Rg==}
    engines: {node: '>=8'}

  partial-json@0.1.7:
    resolution: {integrity: sha512-Njv/59hHaokb/hRUjce3Hdv12wd60MtM9Z5Olmn+nehe0QDAsRtRbJPvJ0Z91TusF0SuZRIvnM+S4l6EIP8leA==}

  path-exists@4.0.0:
    resolution: {integrity: sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==}
    engines: {node: '>=8'}

  path-is-absolute@1.0.1:
    resolution: {integrity: sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==}
    engines: {node: '>=0.10.0'}

  path-key@3.1.1:
    resolution: {integrity: sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==}
    engines: {node: '>=8'}

  path-parse@1.0.7:
    resolution: {integrity: sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==}

  path-scurry@2.0.0:
    resolution: {integrity: sha512-ypGJsmGtdXUOeM5u93TyeIEfEhM6s+ljAhrk5vAvSx8uyY/02OvrZnA0YNGUrPXfpJMgI1ODd3nwz8Npx4O4cg==}
    engines: {node: 20 || >=22}

  path-type@4.0.0:
    resolution: {integrity: sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==}
    engines: {node: '>=8'}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.1:
    resolution: {integrity: sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==}
    engines: {node: '>=8.6'}

  pirates@4.0.6:
    resolution: {integrity: sha512-saLsH7WeYYPiD25LDuLRRY/i+6HaPYr6G1OUlN39otzkSTxKnubR9RTxS3/Kk50s1g2JTgFwWQDQyplC5/SHZg==}
    engines: {node: '>= 6'}

  pkg-dir@4.2.0:
    resolution: {integrity: sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==}
    engines: {node: '>=8'}

  postcss@8.4.49:
    resolution: {integrity: sha512-OCVPnIObs4N29kxTjzLfUryOkvZEq+pf8jTF0lg8E7uETuWHA+v7j3c/xJmiqpX450191LlmZfUKkXxkTry7nA==}
    engines: {node: ^10 || ^12 || >=14}

  prelude-ls@1.2.1:
    resolution: {integrity: sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==}
    engines: {node: '>= 0.8.0'}

  prettier@3.4.2:
    resolution: {integrity: sha512-e9MewbtFo+Fevyuxn/4rrcDAaq0IYxPGLvObpQjiZBMAzB9IGmzlnG9RZy3FFas+eBMu2vA0CszMeduow5dIuQ==}
    engines: {node: '>=14'}
    hasBin: true

  pretty-format@29.7.0:
    resolution: {integrity: sha512-Pdlw/oPxN+aXdmM9R00JVC9WVFoCLTKJvDVLgmJ+qAffBMxsV85l/Lu7sNx4zSzPyoL2euImuEwHhOXdEgNFZQ==}
    engines: {node: ^14.15.0 || ^16.10.0 || >=18.0.0}

  progress@2.0.3:
    resolution: {integrity: sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==}
    engines: {node: '>=0.4.0'}

  prompts@2.4.2:
    resolution: {integrity: sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==}
    engines: {node: '>= 6'}

  punycode@2.3.1:
    resolution: {integrity: sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==}
    engines: {node: '>=6'}

  pure-rand@6.1.0:
    resolution: {integrity: sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==}

  queue-microtask@1.2.3:
    resolution: {integrity: sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==}

  react-is@18.3.1:
    resolution: {integrity: sha512-/LLMVyas0ljjAtoYiPqYiL8VWXzUUdThrmU5+n20DZv+a+ClRoevUzw5JxU+Ieh5/c87ytoTBV9G1FiKfNJdmg==}

  react@18.3.1:
    resolution: {integrity: sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==}
    engines: {node: '>=0.10.0'}

  require-directory@2.1.1:
    resolution: {integrity: sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==}
    engines: {node: '>=0.10.0'}

  resolve-cwd@3.0.0:
    resolution: {integrity: sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==}
    engines: {node: '>=8'}

  resolve-from@4.0.0:
    resolution: {integrity: sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==}
    engines: {node: '>=4'}

  resolve-from@5.0.0:
    resolution: {integrity: sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw==}
    engines: {node: '>=8'}

  resolve.exports@2.0.3:
    resolution: {integrity: sha512-OcXjMsGdhL4XnbShKpAcSqPMzQoYkYyhbEaeSko47MjRP9NfEQMhZkXL1DoFlt9LWQn4YttrdnV6X2OiyzBi+A==}
    engines: {node: '>=10'}

  resolve@1.22.9:
    resolution: {integrity: sha512-QxrmX1DzraFIi9PxdG5VkRfRwIgjwyud+z/iBwfRRrVmHc+P9Q7u2lSSpQ6bjr2gy5lrqIiU9vb6iAeGf2400A==}
    hasBin: true

  retry@0.13.1:
    resolution: {integrity: sha512-XQBQ3I8W1Cge0Seh+6gjj03LbmRFWuoszgK9ooCpwYIrhhoO80pfq4cUkU5DkknwfOfFteRwlZ56PYOGYyFWdg==}
    engines: {node: '>= 4'}

  reusify@1.0.4:
    resolution: {integrity: sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==}
    engines: {iojs: '>=1.0.0', node: '>=0.10.0'}

  rimraf@3.0.2:
    resolution: {integrity: sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==}
    deprecated: Rimraf versions prior to v4 are no longer supported
    hasBin: true

  robot3@0.4.1:
    resolution: {integrity: sha512-hzjy826lrxzx8eRgv80idkf8ua1JAepRc9Efdtj03N3KNJuznQCPlyCJ7gnUmDFwZCLQjxy567mQVKmdv2BsXQ==}

  run-parallel@1.2.0:
    resolution: {integrity: sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==}

  safe-buffer@5.2.1:
    resolution: {integrity: sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==}

  secure-json-parse@2.7.0:
    resolution: {integrity: sha512-6aU+Rwsezw7VR8/nyvKTx8QpWH9FrcYiXXlqC4z5d5XQBDRqtbfsRjnwGyqbi3gddNtWHuEk9OANUotL26qKUw==}

  semver@6.3.1:
    resolution: {integrity: sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==}
    hasBin: true

  semver@7.6.3:
    resolution: {integrity: sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==}
    engines: {node: '>=10'}
    hasBin: true

  shebang-command@2.0.0:
    resolution: {integrity: sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==}
    engines: {node: '>=8'}

  shebang-regex@3.0.0:
    resolution: {integrity: sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==}
    engines: {node: '>=8'}

  signal-exit@3.0.7:
    resolution: {integrity: sha512-wnD2ZE+l+SPC/uoS0vXeE9L1+0wuaMqKlfz9AMUo38JsyLSBWSFcHR1Rri62LZc12vLr1gb3jl7iwQhgwpAbGQ==}

  signal-exit@4.1.0:
    resolution: {integrity: sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==}
    engines: {node: '>=14'}

  sisteransi@1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}

  slash@3.0.0:
    resolution: {integrity: sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==}
    engines: {node: '>=8'}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  source-map-support@0.5.13:
    resolution: {integrity: sha512-SHSKFHadjVA5oR4PPqhtAVdcBWwRYVd6g6cAXnIbRiIwc2EhPrTuKUBdSLvlEKyIP3GCf89fltvcZiP9MMFA1w==}

  source-map@0.6.1:
    resolution: {integrity: sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==}
    engines: {node: '>=0.10.0'}

  sprintf-js@1.0.3:
    resolution: {integrity: sha512-D9cPgkvLlV3t3IzL0D0YLvGA9Ahk4PcvVwUbN0dSGr1aP0Nrt4AEnTUbuGvquEC0mA64Gqt1fzirlRs5ibXx8g==}

  sswr@2.1.0:
    resolution: {integrity: sha512-Cqc355SYlTAaUt8iDPaC/4DPPXK925PePLMxyBKuWd5kKc5mwsG3nT9+Mq2tyguL5s7b4Jg+IRMpTRsNTAfpSQ==}
    peerDependencies:
      svelte: ^4.0.0 || ^5.0.0-next.0

  stack-utils@2.0.6:
    resolution: {integrity: sha512-XlkWvfIm6RmsWtNJx+uqtKLS8eqFbxUg0ZzLXqY0caEy9l7hruX8IpiDnjsLavoBgqCCR71TqWO8MaXYheJ3RQ==}
    engines: {node: '>=10'}

  string-length@4.0.2:
    resolution: {integrity: sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==}
    engines: {node: '>=10'}

  string-width@4.2.3:
    resolution: {integrity: sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==}
    engines: {node: '>=8'}

  string-width@5.1.2:
    resolution: {integrity: sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==}
    engines: {node: '>=12'}

  strip-ansi@6.0.1:
    resolution: {integrity: sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==}
    engines: {node: '>=8'}

  strip-ansi@7.1.0:
    resolution: {integrity: sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==}
    engines: {node: '>=12'}

  strip-bom@4.0.0:
    resolution: {integrity: sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w==}
    engines: {node: '>=8'}

  strip-final-newline@2.0.0:
    resolution: {integrity: sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==}
    engines: {node: '>=6'}

  strip-json-comments@3.1.1:
    resolution: {integrity: sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==}
    engines: {node: '>=8'}

  supports-color@7.2.0:
    resolution: {integrity: sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==}
    engines: {node: '>=8'}

  supports-color@8.1.1:
    resolution: {integrity: sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==}
    engines: {node: '>=10'}

  supports-preserve-symlinks-flag@1.0.0:
    resolution: {integrity: sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==}
    engines: {node: '>= 0.4'}

  svelte@5.14.2:
    resolution: {integrity: sha512-OxNh82bYjbutXNSZSPQspZzzmVzlRyNbiz0a6KrpOWvQ9LBUUZifXyeKhfl73LgyQC9UbsnVS9M55nQzqekMTA==}
    engines: {node: '>=18'}

  swr@2.2.5:
    resolution: {integrity: sha512-QtxqyclFeAsxEUeZIYmsaQ0UjimSq1RZ9Un7I68/0ClKK/U3LoyQunwkQfJZr2fc22DfIXLNDc2wFyTEikCUpg==}
    peerDependencies:
      react: ^16.11.0 || ^17.0.0 || ^18.0.0

  swrev@4.0.0:
    resolution: {integrity: sha512-LqVcOHSB4cPGgitD1riJ1Hh4vdmITOp+BkmfmXRh4hSF/t7EnS4iD+SOTmq7w5pPm/SiPeto4ADbKS6dHUDWFA==}

  swrv@1.0.4:
    resolution: {integrity: sha512-zjEkcP8Ywmj+xOJW3lIT65ciY/4AL4e/Or7Gj0MzU3zBJNMdJiT8geVZhINavnlHRMMCcJLHhraLTAiDOTmQ9g==}
    peerDependencies:
      vue: '>=3.2.26 < 4'

  tar@6.2.1:
    resolution: {integrity: sha512-DZ4yORTwrbTj/7MZYq2w+/ZFdI6OZ/f9SFHR+71gIVUZhOQPHzVCLpvRnPgyaMpfWxxk/4ONva3GQSyNIKRv6A==}
    engines: {node: '>=10'}

  test-exclude@6.0.0:
    resolution: {integrity: sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==}
    engines: {node: '>=8'}

  text-table@0.2.0:
    resolution: {integrity: sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==}

  throttleit@2.1.0:
    resolution: {integrity: sha512-nt6AMGKW1p/70DF/hGBdJB57B8Tspmbp5gfJ8ilhLnt7kkr2ye7hzD6NVG8GGErk2HWF34igrL2CXmNIkzKqKw==}
    engines: {node: '>=18'}

  tinyld@1.3.4:
    resolution: {integrity: sha512-u26CNoaInA4XpDU+8s/6Cq8xHc2T5M4fXB3ICfXPokUQoLzmPgSZU02TAkFwFMJCWTjk53gtkS8pETTreZwCqw==}
    engines: {node: '>= 12.10.0', npm: '>= 6.12.0', yarn: '>= 1.20.0'}
    hasBin: true

  tmpl@1.0.5:
    resolution: {integrity: sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw==}

  to-regex-range@5.0.1:
    resolution: {integrity: sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==}
    engines: {node: '>=8.0'}

  together-ai@0.7.0:
    resolution: {integrity: sha512-/be/HOecBSwRTDHB14vCvHbp1WiNsFxyS4pJlyBoMup1X3n7xD1b/Gm5Z5amlKzD2zll9Y5wscDk7Ut5OsT1nA==}

  tr46@0.0.3:
    resolution: {integrity: sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==}

  ts-api-utils@1.4.3:
    resolution: {integrity: sha512-i3eMG77UTMD0hZhgRS562pv83RC6ukSAC2GMNWc+9dieh/+jDM5u5YG+NHX6VNDRHQcHwmsTHctP9LhbC3WxVw==}
    engines: {node: '>=16'}
    peerDependencies:
      typescript: '>=4.2.0'

  ts-jest@29.2.5:
    resolution: {integrity: sha512-KD8zB2aAZrcKIdGk4OwpJggeLcH1FgrICqDSROWqlnJXGCXK4Mn6FcdK2B6670Xr73lHMG1kHw8R87A0ecZ+vA==}
    engines: {node: ^14.15.0 || ^16.10.0 || ^18.0.0 || >=20.0.0}
    hasBin: true
    peerDependencies:
      '@babel/core': '>=7.0.0-beta.0 <8'
      '@jest/transform': ^29.0.0
      '@jest/types': ^29.0.0
      babel-jest: ^29.0.0
      esbuild: '*'
      jest: ^29.0.0
      typescript: '>=4.3 <6'
    peerDependenciesMeta:
      '@babel/core':
        optional: true
      '@jest/transform':
        optional: true
      '@jest/types':
        optional: true
      babel-jest:
        optional: true
      esbuild:
        optional: true

  type-check@0.4.0:
    resolution: {integrity: sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==}
    engines: {node: '>= 0.8.0'}

  type-detect@4.0.8:
    resolution: {integrity: sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g==}
    engines: {node: '>=4'}

  type-fest@0.20.2:
    resolution: {integrity: sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==}
    engines: {node: '>=10'}

  type-fest@0.21.3:
    resolution: {integrity: sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w==}
    engines: {node: '>=10'}

  typescript@5.7.2:
    resolution: {integrity: sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==}
    engines: {node: '>=14.17'}
    hasBin: true

  uglify-js@3.19.3:
    resolution: {integrity: sha512-v3Xu+yuwBXisp6QYTcH4UbH+xYJXqnq2m/LtQVWKWzYc1iehYnLixoQDN9FH6/j9/oybfd6W9Ghwkl8+UMKTKQ==}
    engines: {node: '>=0.8.0'}
    hasBin: true

  undici-types@5.26.5:
    resolution: {integrity: sha512-JlCMO+ehdEIKqlFxk6IfVoAUVmgz7cU7zD/h9XZ0qzeosSHmUJVOzSQvvYSYWXkFXC+IfLKSIffhv0sVZup6pA==}

  undici-types@6.19.8:
    resolution: {integrity: sha512-ve2KP6f/JnbPBFyobGHuerC9g1FYGn/F8n1LWTwNxCEzd6IfqTwUQcNXgEtmmQ6DlRrC1hrSrBnCZPokRrDHjw==}

  unique-names-generator@4.7.1:
    resolution: {integrity: sha512-lMx9dX+KRmG8sq6gulYYpKWZc9RlGsgBR6aoO8Qsm3qvkSJ+3rAymr+TnV8EDMrIrwuFJ4kruzMWM/OpYzPoow==}
    engines: {node: '>=8'}

  update-browserslist-db@1.1.1:
    resolution: {integrity: sha512-R8UzCaa9Az+38REPiJ1tXlImTJXlVfgHZsglwBD/k6nj76ctsH1E3q4doGrukiLQd3sGQYu56r5+lo5r94l29A==}
    hasBin: true
    peerDependencies:
      browserslist: '>= 4.21.0'

  uri-js@4.4.1:
    resolution: {integrity: sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==}

  use-sync-external-store@1.4.0:
    resolution: {integrity: sha512-9WXSPC5fMv61vaupRkCKCxsPxBocVnwakBEkMIHHpkTTg6icbJtg6jzgtLDm4bl3cSHAca52rYWih0k4K3PfHw==}
    peerDependencies:
      react: ^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0

  uuid@10.0.0:
    resolution: {integrity: sha512-8XkAphELsDnEGrDxUOHB3RGvXz6TeuYSGEZBOjtTtPm2lwhGBjLgOzLHB63IUWfBpNucQjND6d3AOudO+H3RWQ==}
    hasBin: true

  uuid@11.0.3:
    resolution: {integrity: sha512-d0z310fCWv5dJwnX1Y/MncBAqGMKEzlBb1AOf7z9K8ALnd0utBX/msg/fA0+sbyN1ihbMsLhrBlnl1ak7Wa0rg==}
    hasBin: true

  uuid@9.0.1:
    resolution: {integrity: sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==}
    hasBin: true

  v8-to-istanbul@9.3.0:
    resolution: {integrity: sha512-kiGUalWN+rgBJ/1OHZsBtU4rXZOfj/7rKQxULKlIzwzQSvMJUUNgPwJEEh7gU6xEVxC0ahoOBvN2YI8GH6FNgA==}
    engines: {node: '>=10.12.0'}

  vue@3.5.13:
    resolution: {integrity: sha512-wmeiSMxkZCSc+PM2w2VRsOYAZC8GdipNFRTsLSfodVqI9mbejKeXEGr8SckuLnrQPGe3oJN5c3K0vpoU9q/wCQ==}
    peerDependencies:
      typescript: '*'
    peerDependenciesMeta:
      typescript:
        optional: true

  walker@1.0.8:
    resolution: {integrity: sha512-ts/8E8l5b7kY0vlWLewOkDXMmPdLcVV4GmOQLyxuSswIJsweeFZtAsMF7k1Nszz+TYBQrlYRmzOnr398y1JemQ==}

  web-streams-polyfill@4.0.0-beta.3:
    resolution: {integrity: sha512-QW95TCTaHmsYfHDybGMwO5IJIM93I/6vTRk+daHTWFPhwh+C8Cg7j7XyKrwrj8Ib6vYXe0ocYNrmzY4xAAN6ug==}
    engines: {node: '>= 14'}

  webidl-conversions@3.0.1:
    resolution: {integrity: sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==}

  whatwg-url@5.0.0:
    resolution: {integrity: sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==}

  which@2.0.2:
    resolution: {integrity: sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==}
    engines: {node: '>= 8'}
    hasBin: true

  word-wrap@1.2.5:
    resolution: {integrity: sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==}
    engines: {node: '>=0.10.0'}

  wordwrap@1.0.0:
    resolution: {integrity: sha512-gvVzJFlPycKc5dZN4yPkP8w7Dc37BtP1yczEneOb4uq34pXZcvrtRTmWV8W+Ume+XCxKgbjM+nevkyFPMybd4Q==}

  wrap-ansi@7.0.0:
    resolution: {integrity: sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==}
    engines: {node: '>=10'}

  wrap-ansi@8.1.0:
    resolution: {integrity: sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==}
    engines: {node: '>=12'}

  wrappy@1.0.2:
    resolution: {integrity: sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==}

  write-file-atomic@4.0.2:
    resolution: {integrity: sha512-7KxauUdBmSdWnmpaGFg+ppNjKF8uNLry8LyzjauQDOVONfFLNKrKvQOxZ/VuTIcS/gge/YNahf5RIIQWTSarlg==}
    engines: {node: ^12.13.0 || ^14.15.0 || >=16.0.0}

  y18n@5.0.8:
    resolution: {integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==}
    engines: {node: '>=10'}

  yallist@3.1.1:
    resolution: {integrity: sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==}

  yallist@4.0.0:
    resolution: {integrity: sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A==}

  yaml@2.6.1:
    resolution: {integrity: sha512-7r0XPzioN/Q9kXBro/XPnA6kznR73DHq+GXh5ON7ZozRO6aMjbmiBuKste2wslTFkC5d1dw0GooOCepZXJ2SAg==}
    engines: {node: '>= 14'}
    hasBin: true

  yargs-parser@21.1.1:
    resolution: {integrity: sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==}
    engines: {node: '>=12'}

  yargs@17.7.2:
    resolution: {integrity: sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==}
    engines: {node: '>=12'}

  yocto-queue@0.1.0:
    resolution: {integrity: sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==}
    engines: {node: '>=10'}

  zimmerframe@1.1.2:
    resolution: {integrity: sha512-rAbqEGa8ovJy4pyBxZM70hg4pE6gDgaQ0Sl9M3enG3I0d6H4XSAM3GeNGLKnsBpuijUow064sf7ww1nutC5/3w==}

  zod-to-json-schema@3.24.1:
    resolution: {integrity: sha512-3h08nf3Vw3Wl3PK+q3ow/lIil81IT2Oa7YpQyUUDsEWbXveMesdfK1xBd2RhCkynwZndAxixji/7SYJJowr62w==}
    peerDependencies:
      zod: ^3.24.1

  zod@3.23.8:
    resolution: {integrity: sha512-XBx9AXhXktjUqnepgTiE5flcKIYWi/rme0Eaj+5Y0lftuGBq+jyRu/md4WnuxqgP1ubdpNCsYEYPxrzVHD8d6g==}

  zod@3.24.1:
    resolution: {integrity: sha512-muH7gBL9sI1nciMZV67X5fTKKBLtwpZ5VBp1vsOQzj1MhrBZ4wlVCm3gedKZWLp0Oyel8sIGfeiz54Su+OVT+A==}

snapshots:

  '@ai-sdk/anthropic@0.0.56(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      zod: 3.23.8

  '@ai-sdk/google-vertex@0.0.43(@google-cloud/vertexai@1.9.2)(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      '@google-cloud/vertexai': 1.9.2
      zod: 3.23.8

  '@ai-sdk/google@0.0.55(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      zod: 3.23.8

  '@ai-sdk/groq@0.0.3(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      zod: 3.23.8

  '@ai-sdk/openai@1.0.5(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 1.0.1
      '@ai-sdk/provider-utils': 2.0.2(zod@3.23.8)
      zod: 3.23.8

  '@ai-sdk/provider-utils@1.0.20(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.24
      eventsource-parser: 1.1.2
      nanoid: 3.3.6
      secure-json-parse: 2.7.0
    optionalDependencies:
      zod: 3.23.8

  '@ai-sdk/provider-utils@1.0.22(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.26
      eventsource-parser: 1.1.2
      nanoid: 3.3.8
      secure-json-parse: 2.7.0
    optionalDependencies:
      zod: 3.23.8

  '@ai-sdk/provider-utils@2.0.2(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 1.0.1
      eventsource-parser: 3.0.0
      nanoid: 3.3.8
      secure-json-parse: 2.7.0
    optionalDependencies:
      zod: 3.23.8

  '@ai-sdk/provider@0.0.24':
    dependencies:
      json-schema: 0.4.0

  '@ai-sdk/provider@0.0.26':
    dependencies:
      json-schema: 0.4.0

  '@ai-sdk/provider@1.0.1':
    dependencies:
      json-schema: 0.4.0

  '@ai-sdk/react@0.0.70(react@18.3.1)(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      '@ai-sdk/ui-utils': 0.0.50(zod@3.23.8)
      swr: 2.2.5(react@18.3.1)
      throttleit: 2.1.0
    optionalDependencies:
      react: 18.3.1
      zod: 3.23.8

  '@ai-sdk/solid@0.0.54(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      '@ai-sdk/ui-utils': 0.0.50(zod@3.23.8)
    transitivePeerDependencies:
      - zod

  '@ai-sdk/svelte@0.0.57(svelte@5.14.2)(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      '@ai-sdk/ui-utils': 0.0.50(zod@3.23.8)
      sswr: 2.1.0(svelte@5.14.2)
    optionalDependencies:
      svelte: 5.14.2
    transitivePeerDependencies:
      - zod

  '@ai-sdk/ui-utils@0.0.50(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      json-schema: 0.4.0
      secure-json-parse: 2.7.0
      zod-to-json-schema: 3.24.1(zod@3.23.8)
    optionalDependencies:
      zod: 3.23.8

  '@ai-sdk/vue@0.0.59(vue@3.5.13(typescript@5.7.2))(zod@3.23.8)':
    dependencies:
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      '@ai-sdk/ui-utils': 0.0.50(zod@3.23.8)
      swrv: 1.0.4(vue@3.5.13(typescript@5.7.2))
    optionalDependencies:
      vue: 3.5.13(typescript@5.7.2)
    transitivePeerDependencies:
      - zod

  '@ai16z/eliza@0.1.6-alpha.4(@google-cloud/vertexai@1.9.2)(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))(react@18.3.1)(sswr@2.1.0(svelte@5.14.2))(svelte@5.14.2)(vue@3.5.13(typescript@5.7.2))':
    dependencies:
      '@ai-sdk/anthropic': 0.0.56(zod@3.23.8)
      '@ai-sdk/google': 0.0.55(zod@3.23.8)
      '@ai-sdk/google-vertex': 0.0.43(@google-cloud/vertexai@1.9.2)(zod@3.23.8)
      '@ai-sdk/groq': 0.0.3(zod@3.23.8)
      '@ai-sdk/openai': 1.0.5(zod@3.23.8)
      '@anthropic-ai/sdk': 0.30.1
      '@fal-ai/client': 1.2.0
      '@types/uuid': 10.0.0
      ai: 3.4.33(openai@4.73.0(zod@3.23.8))(react@18.3.1)(sswr@2.1.0(svelte@5.14.2))(svelte@5.14.2)(vue@3.5.13(typescript@5.7.2))(zod@3.23.8)
      anthropic-vertex-ai: 1.0.2(zod@3.23.8)
      fastembed: 1.14.1
      fastestsmallesttextencoderdecoder: 1.0.22
      gaxios: 6.7.1
      glob: 11.0.0
      handlebars: 4.7.8
      js-sha1: 0.7.0
      js-tiktoken: 1.0.15
      langchain: 0.3.6(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))(handlebars@4.7.8)(openai@4.73.0(zod@3.23.8))
      ollama-ai-provider: 0.16.1(zod@3.23.8)
      openai: 4.73.0(zod@3.23.8)
      tinyld: 1.3.4
      together-ai: 0.7.0
      unique-names-generator: 4.7.1
      uuid: 11.0.3
      zod: 3.23.8
    transitivePeerDependencies:
      - '@google-cloud/vertexai'
      - '@langchain/anthropic'
      - '@langchain/aws'
      - '@langchain/cohere'
      - '@langchain/core'
      - '@langchain/google-genai'
      - '@langchain/google-vertexai'
      - '@langchain/groq'
      - '@langchain/mistralai'
      - '@langchain/ollama'
      - axios
      - cheerio
      - encoding
      - peggy
      - react
      - solid-js
      - sswr
      - supports-color
      - svelte
      - typeorm
      - vue

  '@ampproject/remapping@2.3.0':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25

  '@anthropic-ai/sdk@0.30.1':
    dependencies:
      '@types/node': 18.19.68
      '@types/node-fetch': 2.6.12
      abort-controller: 3.0.0
      agentkeepalive: 4.5.0
      form-data-encoder: 1.7.2
      formdata-node: 4.4.1
      node-fetch: 2.7.0
    transitivePeerDependencies:
      - encoding

  '@anush008/tokenizers-darwin-universal@0.0.0':
    optional: true

  '@anush008/tokenizers-linux-x64-gnu@0.0.0':
    optional: true

  '@anush008/tokenizers-win32-x64-msvc@0.0.0':
    optional: true

  '@anush008/tokenizers@0.0.0':
    optionalDependencies:
      '@anush008/tokenizers-darwin-universal': 0.0.0
      '@anush008/tokenizers-linux-x64-gnu': 0.0.0
      '@anush008/tokenizers-win32-x64-msvc': 0.0.0

  '@babel/code-frame@7.26.2':
    dependencies:
      '@babel/helper-validator-identifier': 7.25.9
      js-tokens: 4.0.0
      picocolors: 1.1.1

  '@babel/compat-data@7.26.3': {}

  '@babel/core@7.26.0':
    dependencies:
      '@ampproject/remapping': 2.3.0
      '@babel/code-frame': 7.26.2
      '@babel/generator': 7.26.3
      '@babel/helper-compilation-targets': 7.25.9
      '@babel/helper-module-transforms': 7.26.0(@babel/core@7.26.0)
      '@babel/helpers': 7.26.0
      '@babel/parser': 7.26.3
      '@babel/template': 7.25.9
      '@babel/traverse': 7.26.4
      '@babel/types': 7.26.3
      convert-source-map: 2.0.0
      debug: 4.4.0
      gensync: 1.0.0-beta.2
      json5: 2.2.3
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  '@babel/generator@7.26.3':
    dependencies:
      '@babel/parser': 7.26.3
      '@babel/types': 7.26.3
      '@jridgewell/gen-mapping': 0.3.8
      '@jridgewell/trace-mapping': 0.3.25
      jsesc: 3.1.0

  '@babel/helper-compilation-targets@7.25.9':
    dependencies:
      '@babel/compat-data': 7.26.3
      '@babel/helper-validator-option': 7.25.9
      browserslist: 4.24.3
      lru-cache: 5.1.1
      semver: 6.3.1

  '@babel/helper-module-imports@7.25.9':
    dependencies:
      '@babel/traverse': 7.26.4
      '@babel/types': 7.26.3
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-module-transforms@7.26.0(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-module-imports': 7.25.9
      '@babel/helper-validator-identifier': 7.25.9
      '@babel/traverse': 7.26.4
    transitivePeerDependencies:
      - supports-color

  '@babel/helper-plugin-utils@7.25.9': {}

  '@babel/helper-string-parser@7.25.9': {}

  '@babel/helper-validator-identifier@7.25.9': {}

  '@babel/helper-validator-option@7.25.9': {}

  '@babel/helpers@7.26.0':
    dependencies:
      '@babel/template': 7.25.9
      '@babel/types': 7.26.3

  '@babel/parser@7.26.3':
    dependencies:
      '@babel/types': 7.26.3

  '@babel/plugin-syntax-async-generators@7.8.4(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-bigint@7.8.3(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-class-properties@7.12.13(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-class-static-block@7.14.5(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-import-attributes@7.26.0(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-import-meta@7.10.4(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-json-strings@7.8.3(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-jsx@7.25.9(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-logical-assignment-operators@7.10.4(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-nullish-coalescing-operator@7.8.3(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-numeric-separator@7.10.4(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-object-rest-spread@7.8.3(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-optional-catch-binding@7.8.3(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-optional-chaining@7.8.3(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-private-property-in-object@7.14.5(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-top-level-await@7.14.5(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/plugin-syntax-typescript@7.25.9(@babel/core@7.26.0)':
    dependencies:
      '@babel/core': 7.26.0
      '@babel/helper-plugin-utils': 7.25.9

  '@babel/template@7.25.9':
    dependencies:
      '@babel/code-frame': 7.26.2
      '@babel/parser': 7.26.3
      '@babel/types': 7.26.3

  '@babel/traverse@7.26.4':
    dependencies:
      '@babel/code-frame': 7.26.2
      '@babel/generator': 7.26.3
      '@babel/parser': 7.26.3
      '@babel/template': 7.25.9
      '@babel/types': 7.26.3
      debug: 4.4.0
      globals: 11.12.0
    transitivePeerDependencies:
      - supports-color

  '@babel/types@7.26.3':
    dependencies:
      '@babel/helper-string-parser': 7.25.9
      '@babel/helper-validator-identifier': 7.25.9

  '@bcoe/v8-coverage@0.2.3': {}

  '@cfworker/json-schema@4.0.3': {}

  '@eslint-community/eslint-utils@4.4.1(eslint@8.57.1)':
    dependencies:
      eslint: 8.57.1
      eslint-visitor-keys: 3.4.3

  '@eslint-community/regexpp@4.12.1': {}

  '@eslint/eslintrc@2.1.4':
    dependencies:
      ajv: 6.12.6
      debug: 4.4.0
      espree: 9.6.1
      globals: 13.24.0
      ignore: 5.3.2
      import-fresh: 3.3.0
      js-yaml: 4.1.0
      minimatch: 3.1.2
      strip-json-comments: 3.1.1
    transitivePeerDependencies:
      - supports-color

  '@eslint/js@8.57.1': {}

  '@fal-ai/client@1.2.0':
    dependencies:
      '@msgpack/msgpack': 3.0.0-beta2
      eventsource-parser: 1.1.2
      robot3: 0.4.1

  '@google-cloud/vertexai@1.9.2':
    dependencies:
      google-auth-library: 9.15.0
    transitivePeerDependencies:
      - encoding
      - supports-color

  '@humanwhocodes/config-array@0.13.0':
    dependencies:
      '@humanwhocodes/object-schema': 2.0.3
      debug: 4.4.0
      minimatch: 3.1.2
    transitivePeerDependencies:
      - supports-color

  '@humanwhocodes/module-importer@1.0.1': {}

  '@humanwhocodes/object-schema@2.0.3': {}

  '@isaacs/cliui@8.0.2':
    dependencies:
      string-width: 5.1.2
      string-width-cjs: string-width@4.2.3
      strip-ansi: 7.1.0
      strip-ansi-cjs: strip-ansi@6.0.1
      wrap-ansi: 8.1.0
      wrap-ansi-cjs: wrap-ansi@7.0.0

  '@istanbuljs/load-nyc-config@1.1.0':
    dependencies:
      camelcase: 5.3.1
      find-up: 4.1.0
      get-package-type: 0.1.0
      js-yaml: 3.14.1
      resolve-from: 5.0.0

  '@istanbuljs/schema@0.1.3': {}

  '@jest/console@29.7.0':
    dependencies:
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      chalk: 4.1.2
      jest-message-util: 29.7.0
      jest-util: 29.7.0
      slash: 3.0.0

  '@jest/core@29.7.0':
    dependencies:
      '@jest/console': 29.7.0
      '@jest/reporters': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      ci-info: 3.9.0
      exit: 0.1.2
      graceful-fs: 4.2.11
      jest-changed-files: 29.7.0
      jest-config: 29.7.0(@types/node@20.17.10)
      jest-haste-map: 29.7.0
      jest-message-util: 29.7.0
      jest-regex-util: 29.6.3
      jest-resolve: 29.7.0
      jest-resolve-dependencies: 29.7.0
      jest-runner: 29.7.0
      jest-runtime: 29.7.0
      jest-snapshot: 29.7.0
      jest-util: 29.7.0
      jest-validate: 29.7.0
      jest-watcher: 29.7.0
      micromatch: 4.0.8
      pretty-format: 29.7.0
      slash: 3.0.0
      strip-ansi: 6.0.1
    transitivePeerDependencies:
      - babel-plugin-macros
      - supports-color
      - ts-node

  '@jest/environment@29.7.0':
    dependencies:
      '@jest/fake-timers': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      jest-mock: 29.7.0

  '@jest/expect-utils@29.7.0':
    dependencies:
      jest-get-type: 29.6.3

  '@jest/expect@29.7.0':
    dependencies:
      expect: 29.7.0
      jest-snapshot: 29.7.0
    transitivePeerDependencies:
      - supports-color

  '@jest/fake-timers@29.7.0':
    dependencies:
      '@jest/types': 29.6.3
      '@sinonjs/fake-timers': 10.3.0
      '@types/node': 20.17.10
      jest-message-util: 29.7.0
      jest-mock: 29.7.0
      jest-util: 29.7.0

  '@jest/globals@29.7.0':
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/expect': 29.7.0
      '@jest/types': 29.6.3
      jest-mock: 29.7.0
    transitivePeerDependencies:
      - supports-color

  '@jest/reporters@29.7.0':
    dependencies:
      '@bcoe/v8-coverage': 0.2.3
      '@jest/console': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@jridgewell/trace-mapping': 0.3.25
      '@types/node': 20.17.10
      chalk: 4.1.2
      collect-v8-coverage: 1.0.2
      exit: 0.1.2
      glob: 7.2.3
      graceful-fs: 4.2.11
      istanbul-lib-coverage: 3.2.2
      istanbul-lib-instrument: 6.0.3
      istanbul-lib-report: 3.0.1
      istanbul-lib-source-maps: 4.0.1
      istanbul-reports: 3.1.7
      jest-message-util: 29.7.0
      jest-util: 29.7.0
      jest-worker: 29.7.0
      slash: 3.0.0
      string-length: 4.0.2
      strip-ansi: 6.0.1
      v8-to-istanbul: 9.3.0
    transitivePeerDependencies:
      - supports-color

  '@jest/schemas@29.6.3':
    dependencies:
      '@sinclair/typebox': 0.27.8

  '@jest/source-map@29.6.3':
    dependencies:
      '@jridgewell/trace-mapping': 0.3.25
      callsites: 3.1.0
      graceful-fs: 4.2.11

  '@jest/test-result@29.7.0':
    dependencies:
      '@jest/console': 29.7.0
      '@jest/types': 29.6.3
      '@types/istanbul-lib-coverage': 2.0.6
      collect-v8-coverage: 1.0.2

  '@jest/test-sequencer@29.7.0':
    dependencies:
      '@jest/test-result': 29.7.0
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      slash: 3.0.0

  '@jest/transform@29.7.0':
    dependencies:
      '@babel/core': 7.26.0
      '@jest/types': 29.6.3
      '@jridgewell/trace-mapping': 0.3.25
      babel-plugin-istanbul: 6.1.1
      chalk: 4.1.2
      convert-source-map: 2.0.0
      fast-json-stable-stringify: 2.1.0
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      jest-regex-util: 29.6.3
      jest-util: 29.7.0
      micromatch: 4.0.8
      pirates: 4.0.6
      slash: 3.0.0
      write-file-atomic: 4.0.2
    transitivePeerDependencies:
      - supports-color

  '@jest/types@29.6.3':
    dependencies:
      '@jest/schemas': 29.6.3
      '@types/istanbul-lib-coverage': 2.0.6
      '@types/istanbul-reports': 3.0.4
      '@types/node': 20.17.10
      '@types/yargs': 17.0.33
      chalk: 4.1.2

  '@jridgewell/gen-mapping@0.3.8':
    dependencies:
      '@jridgewell/set-array': 1.2.1
      '@jridgewell/sourcemap-codec': 1.5.0
      '@jridgewell/trace-mapping': 0.3.25

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/set-array@1.2.1': {}

  '@jridgewell/sourcemap-codec@1.5.0': {}

  '@jridgewell/trace-mapping@0.3.25':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.0

  '@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8))':
    dependencies:
      '@cfworker/json-schema': 4.0.3
      ansi-styles: 5.2.0
      camelcase: 6.3.0
      decamelize: 1.2.0
      js-tiktoken: 1.0.15
      langsmith: 0.2.13(openai@4.73.0(zod@3.23.8))
      mustache: 4.2.0
      p-queue: 6.6.2
      p-retry: 4.6.2
      uuid: 10.0.0
      zod: 3.24.1
      zod-to-json-schema: 3.24.1(zod@3.24.1)
    transitivePeerDependencies:
      - openai

  '@langchain/openai@0.3.14(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))':
    dependencies:
      '@langchain/core': 0.3.24(openai@4.73.0(zod@3.23.8))
      js-tiktoken: 1.0.15
      openai: 4.73.0(zod@3.23.8)
      zod: 3.23.8
      zod-to-json-schema: 3.24.1(zod@3.23.8)
    transitivePeerDependencies:
      - encoding

  '@langchain/textsplitters@0.1.0(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))':
    dependencies:
      '@langchain/core': 0.3.24(openai@4.73.0(zod@3.23.8))
      js-tiktoken: 1.0.15

  '@msgpack/msgpack@3.0.0-beta2': {}

  '@nodelib/fs.scandir@2.1.5':
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      run-parallel: 1.2.0

  '@nodelib/fs.stat@2.0.5': {}

  '@nodelib/fs.walk@1.2.8':
    dependencies:
      '@nodelib/fs.scandir': 2.1.5
      fastq: 1.17.1

  '@opentelemetry/api@1.9.0': {}

  '@sinclair/typebox@0.27.8': {}

  '@sinonjs/commons@3.0.1':
    dependencies:
      type-detect: 4.0.8

  '@sinonjs/fake-timers@10.3.0':
    dependencies:
      '@sinonjs/commons': 3.0.1

  '@types/babel__core@7.20.5':
    dependencies:
      '@babel/parser': 7.26.3
      '@babel/types': 7.26.3
      '@types/babel__generator': 7.6.8
      '@types/babel__template': 7.4.4
      '@types/babel__traverse': 7.20.6

  '@types/babel__generator@7.6.8':
    dependencies:
      '@babel/types': 7.26.3

  '@types/babel__template@7.4.4':
    dependencies:
      '@babel/parser': 7.26.3
      '@babel/types': 7.26.3

  '@types/babel__traverse@7.20.6':
    dependencies:
      '@babel/types': 7.26.3

  '@types/diff-match-patch@1.0.36': {}

  '@types/estree@1.0.6': {}

  '@types/graceful-fs@4.1.9':
    dependencies:
      '@types/node': 20.17.10

  '@types/istanbul-lib-coverage@2.0.6': {}

  '@types/istanbul-lib-report@3.0.3':
    dependencies:
      '@types/istanbul-lib-coverage': 2.0.6

  '@types/istanbul-reports@3.0.4':
    dependencies:
      '@types/istanbul-lib-report': 3.0.3

  '@types/jest@29.5.14':
    dependencies:
      expect: 29.7.0
      pretty-format: 29.7.0

  '@types/json-schema@7.0.15': {}

  '@types/node-fetch@2.6.12':
    dependencies:
      '@types/node': 20.17.10
      form-data: 4.0.1

  '@types/node@18.19.68':
    dependencies:
      undici-types: 5.26.5

  '@types/node@20.17.10':
    dependencies:
      undici-types: 6.19.8

  '@types/retry@0.12.0': {}

  '@types/semver@7.5.8': {}

  '@types/stack-utils@2.0.3': {}

  '@types/uuid@10.0.0': {}

  '@types/yargs-parser@21.0.3': {}

  '@types/yargs@17.0.33':
    dependencies:
      '@types/yargs-parser': 21.0.3

  '@typescript-eslint/eslint-plugin@6.21.0(@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.7.2))(eslint@8.57.1)(typescript@5.7.2)':
    dependencies:
      '@eslint-community/regexpp': 4.12.1
      '@typescript-eslint/parser': 6.21.0(eslint@8.57.1)(typescript@5.7.2)
      '@typescript-eslint/scope-manager': 6.21.0
      '@typescript-eslint/type-utils': 6.21.0(eslint@8.57.1)(typescript@5.7.2)
      '@typescript-eslint/utils': 6.21.0(eslint@8.57.1)(typescript@5.7.2)
      '@typescript-eslint/visitor-keys': 6.21.0
      debug: 4.4.0
      eslint: 8.57.1
      graphemer: 1.4.0
      ignore: 5.3.2
      natural-compare: 1.4.0
      semver: 7.6.3
      ts-api-utils: 1.4.3(typescript@5.7.2)
    optionalDependencies:
      typescript: 5.7.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/parser@6.21.0(eslint@8.57.1)(typescript@5.7.2)':
    dependencies:
      '@typescript-eslint/scope-manager': 6.21.0
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/typescript-estree': 6.21.0(typescript@5.7.2)
      '@typescript-eslint/visitor-keys': 6.21.0
      debug: 4.4.0
      eslint: 8.57.1
    optionalDependencies:
      typescript: 5.7.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/scope-manager@6.21.0':
    dependencies:
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/visitor-keys': 6.21.0

  '@typescript-eslint/type-utils@6.21.0(eslint@8.57.1)(typescript@5.7.2)':
    dependencies:
      '@typescript-eslint/typescript-estree': 6.21.0(typescript@5.7.2)
      '@typescript-eslint/utils': 6.21.0(eslint@8.57.1)(typescript@5.7.2)
      debug: 4.4.0
      eslint: 8.57.1
      ts-api-utils: 1.4.3(typescript@5.7.2)
    optionalDependencies:
      typescript: 5.7.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/types@6.21.0': {}

  '@typescript-eslint/typescript-estree@6.21.0(typescript@5.7.2)':
    dependencies:
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/visitor-keys': 6.21.0
      debug: 4.4.0
      globby: 11.1.0
      is-glob: 4.0.3
      minimatch: 9.0.3
      semver: 7.6.3
      ts-api-utils: 1.4.3(typescript@5.7.2)
    optionalDependencies:
      typescript: 5.7.2
    transitivePeerDependencies:
      - supports-color

  '@typescript-eslint/utils@6.21.0(eslint@8.57.1)(typescript@5.7.2)':
    dependencies:
      '@eslint-community/eslint-utils': 4.4.1(eslint@8.57.1)
      '@types/json-schema': 7.0.15
      '@types/semver': 7.5.8
      '@typescript-eslint/scope-manager': 6.21.0
      '@typescript-eslint/types': 6.21.0
      '@typescript-eslint/typescript-estree': 6.21.0(typescript@5.7.2)
      eslint: 8.57.1
      semver: 7.6.3
    transitivePeerDependencies:
      - supports-color
      - typescript

  '@typescript-eslint/visitor-keys@6.21.0':
    dependencies:
      '@typescript-eslint/types': 6.21.0
      eslint-visitor-keys: 3.4.3

  '@ungap/structured-clone@1.2.1': {}

  '@vue/compiler-core@3.5.13':
    dependencies:
      '@babel/parser': 7.26.3
      '@vue/shared': 3.5.13
      entities: 4.5.0
      estree-walker: 2.0.2
      source-map-js: 1.2.1

  '@vue/compiler-dom@3.5.13':
    dependencies:
      '@vue/compiler-core': 3.5.13
      '@vue/shared': 3.5.13

  '@vue/compiler-sfc@3.5.13':
    dependencies:
      '@babel/parser': 7.26.3
      '@vue/compiler-core': 3.5.13
      '@vue/compiler-dom': 3.5.13
      '@vue/compiler-ssr': 3.5.13
      '@vue/shared': 3.5.13
      estree-walker: 2.0.2
      magic-string: 0.30.17
      postcss: 8.4.49
      source-map-js: 1.2.1

  '@vue/compiler-ssr@3.5.13':
    dependencies:
      '@vue/compiler-dom': 3.5.13
      '@vue/shared': 3.5.13

  '@vue/reactivity@3.5.13':
    dependencies:
      '@vue/shared': 3.5.13

  '@vue/runtime-core@3.5.13':
    dependencies:
      '@vue/reactivity': 3.5.13
      '@vue/shared': 3.5.13

  '@vue/runtime-dom@3.5.13':
    dependencies:
      '@vue/reactivity': 3.5.13
      '@vue/runtime-core': 3.5.13
      '@vue/shared': 3.5.13
      csstype: 3.1.3

  '@vue/server-renderer@3.5.13(vue@3.5.13(typescript@5.7.2))':
    dependencies:
      '@vue/compiler-ssr': 3.5.13
      '@vue/shared': 3.5.13
      vue: 3.5.13(typescript@5.7.2)

  '@vue/shared@3.5.13': {}

  abort-controller@3.0.0:
    dependencies:
      event-target-shim: 5.0.1

  acorn-jsx@5.3.2(acorn@8.14.0):
    dependencies:
      acorn: 8.14.0

  acorn-typescript@1.4.13(acorn@8.14.0):
    dependencies:
      acorn: 8.14.0

  acorn@8.14.0: {}

  agent-base@7.1.3: {}

  agentkeepalive@4.5.0:
    dependencies:
      humanize-ms: 1.2.1

  ai@3.4.33(openai@4.73.0(zod@3.23.8))(react@18.3.1)(sswr@2.1.0(svelte@5.14.2))(svelte@5.14.2)(vue@3.5.13(typescript@5.7.2))(zod@3.23.8):
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      '@ai-sdk/react': 0.0.70(react@18.3.1)(zod@3.23.8)
      '@ai-sdk/solid': 0.0.54(zod@3.23.8)
      '@ai-sdk/svelte': 0.0.57(svelte@5.14.2)(zod@3.23.8)
      '@ai-sdk/ui-utils': 0.0.50(zod@3.23.8)
      '@ai-sdk/vue': 0.0.59(vue@3.5.13(typescript@5.7.2))(zod@3.23.8)
      '@opentelemetry/api': 1.9.0
      eventsource-parser: 1.1.2
      json-schema: 0.4.0
      jsondiffpatch: 0.6.0
      secure-json-parse: 2.7.0
      zod-to-json-schema: 3.24.1(zod@3.23.8)
    optionalDependencies:
      openai: 4.73.0(zod@3.23.8)
      react: 18.3.1
      sswr: 2.1.0(svelte@5.14.2)
      svelte: 5.14.2
      zod: 3.23.8
    transitivePeerDependencies:
      - solid-js
      - vue

  ajv@6.12.6:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-json-stable-stringify: 2.1.0
      json-schema-traverse: 0.4.1
      uri-js: 4.4.1

  ansi-escapes@4.3.2:
    dependencies:
      type-fest: 0.21.3

  ansi-regex@5.0.1: {}

  ansi-regex@6.1.0: {}

  ansi-styles@4.3.0:
    dependencies:
      color-convert: 2.0.1

  ansi-styles@5.2.0: {}

  ansi-styles@6.2.1: {}

  anthropic-vertex-ai@1.0.2(zod@3.23.8):
    dependencies:
      '@ai-sdk/provider': 0.0.24
      '@ai-sdk/provider-utils': 1.0.20(zod@3.23.8)
      google-auth-library: 9.15.0
      zod: 3.23.8
    transitivePeerDependencies:
      - encoding
      - supports-color

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.1

  argparse@1.0.10:
    dependencies:
      sprintf-js: 1.0.3

  argparse@2.0.1: {}

  aria-query@5.3.2: {}

  array-union@2.1.0: {}

  async@3.2.6: {}

  asynckit@0.4.0: {}

  axobject-query@4.1.0: {}

  babel-jest@29.7.0(@babel/core@7.26.0):
    dependencies:
      '@babel/core': 7.26.0
      '@jest/transform': 29.7.0
      '@types/babel__core': 7.20.5
      babel-plugin-istanbul: 6.1.1
      babel-preset-jest: 29.6.3(@babel/core@7.26.0)
      chalk: 4.1.2
      graceful-fs: 4.2.11
      slash: 3.0.0
    transitivePeerDependencies:
      - supports-color

  babel-plugin-istanbul@6.1.1:
    dependencies:
      '@babel/helper-plugin-utils': 7.25.9
      '@istanbuljs/load-nyc-config': 1.1.0
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-instrument: 5.2.1
      test-exclude: 6.0.0
    transitivePeerDependencies:
      - supports-color

  babel-plugin-jest-hoist@29.6.3:
    dependencies:
      '@babel/template': 7.25.9
      '@babel/types': 7.26.3
      '@types/babel__core': 7.20.5
      '@types/babel__traverse': 7.20.6

  babel-preset-current-node-syntax@1.1.0(@babel/core@7.26.0):
    dependencies:
      '@babel/core': 7.26.0
      '@babel/plugin-syntax-async-generators': 7.8.4(@babel/core@7.26.0)
      '@babel/plugin-syntax-bigint': 7.8.3(@babel/core@7.26.0)
      '@babel/plugin-syntax-class-properties': 7.12.13(@babel/core@7.26.0)
      '@babel/plugin-syntax-class-static-block': 7.14.5(@babel/core@7.26.0)
      '@babel/plugin-syntax-import-attributes': 7.26.0(@babel/core@7.26.0)
      '@babel/plugin-syntax-import-meta': 7.10.4(@babel/core@7.26.0)
      '@babel/plugin-syntax-json-strings': 7.8.3(@babel/core@7.26.0)
      '@babel/plugin-syntax-logical-assignment-operators': 7.10.4(@babel/core@7.26.0)
      '@babel/plugin-syntax-nullish-coalescing-operator': 7.8.3(@babel/core@7.26.0)
      '@babel/plugin-syntax-numeric-separator': 7.10.4(@babel/core@7.26.0)
      '@babel/plugin-syntax-object-rest-spread': 7.8.3(@babel/core@7.26.0)
      '@babel/plugin-syntax-optional-catch-binding': 7.8.3(@babel/core@7.26.0)
      '@babel/plugin-syntax-optional-chaining': 7.8.3(@babel/core@7.26.0)
      '@babel/plugin-syntax-private-property-in-object': 7.14.5(@babel/core@7.26.0)
      '@babel/plugin-syntax-top-level-await': 7.14.5(@babel/core@7.26.0)

  babel-preset-jest@29.6.3(@babel/core@7.26.0):
    dependencies:
      '@babel/core': 7.26.0
      babel-plugin-jest-hoist: 29.6.3
      babel-preset-current-node-syntax: 1.1.0(@babel/core@7.26.0)

  balanced-match@1.0.2: {}

  base64-js@1.5.1: {}

  bignumber.js@9.1.2: {}

  brace-expansion@1.1.11:
    dependencies:
      balanced-match: 1.0.2
      concat-map: 0.0.1

  brace-expansion@2.0.1:
    dependencies:
      balanced-match: 1.0.2

  braces@3.0.3:
    dependencies:
      fill-range: 7.1.1

  browserslist@4.24.3:
    dependencies:
      caniuse-lite: 1.0.30001689
      electron-to-chromium: 1.5.74
      node-releases: 2.0.19
      update-browserslist-db: 1.1.1(browserslist@4.24.3)

  bs-logger@0.2.6:
    dependencies:
      fast-json-stable-stringify: 2.1.0

  bser@2.1.1:
    dependencies:
      node-int64: 0.4.0

  buffer-equal-constant-time@1.0.1: {}

  buffer-from@1.1.2: {}

  callsites@3.1.0: {}

  camelcase@5.3.1: {}

  camelcase@6.3.0: {}

  caniuse-lite@1.0.30001689: {}

  chalk@4.1.2:
    dependencies:
      ansi-styles: 4.3.0
      supports-color: 7.2.0

  chalk@5.3.0: {}

  char-regex@1.0.2: {}

  chownr@2.0.0: {}

  ci-info@3.9.0: {}

  cjs-module-lexer@1.4.1: {}

  client-only@0.0.1: {}

  cliui@8.0.1:
    dependencies:
      string-width: 4.2.3
      strip-ansi: 6.0.1
      wrap-ansi: 7.0.0

  co@4.6.0: {}

  collect-v8-coverage@1.0.2: {}

  color-convert@2.0.1:
    dependencies:
      color-name: 1.1.4

  color-name@1.1.4: {}

  combined-stream@1.0.8:
    dependencies:
      delayed-stream: 1.0.0

  commander@10.0.1: {}

  concat-map@0.0.1: {}

  convert-source-map@2.0.0: {}

  create-jest@29.7.0(@types/node@20.17.10):
    dependencies:
      '@jest/types': 29.6.3
      chalk: 4.1.2
      exit: 0.1.2
      graceful-fs: 4.2.11
      jest-config: 29.7.0(@types/node@20.17.10)
      jest-util: 29.7.0
      prompts: 2.4.2
    transitivePeerDependencies:
      - '@types/node'
      - babel-plugin-macros
      - supports-color
      - ts-node

  cross-spawn@7.0.6:
    dependencies:
      path-key: 3.1.1
      shebang-command: 2.0.0
      which: 2.0.2

  csstype@3.1.3: {}

  debug@4.4.0:
    dependencies:
      ms: 2.1.3

  decamelize@1.2.0: {}

  dedent@1.5.3: {}

  deep-is@0.1.4: {}

  deepmerge@4.3.1: {}

  delayed-stream@1.0.0: {}

  detect-newline@3.1.0: {}

  diff-match-patch@1.0.5: {}

  diff-sequences@29.6.3: {}

  dir-glob@3.0.1:
    dependencies:
      path-type: 4.0.0

  doctrine@3.0.0:
    dependencies:
      esutils: 2.0.3

  eastasianwidth@0.2.0: {}

  ecdsa-sig-formatter@1.0.11:
    dependencies:
      safe-buffer: 5.2.1

  ejs@3.1.10:
    dependencies:
      jake: 10.9.2

  electron-to-chromium@1.5.74: {}

  emittery@0.13.1: {}

  emoji-regex@8.0.0: {}

  emoji-regex@9.2.2: {}

  entities@4.5.0: {}

  error-ex@1.3.2:
    dependencies:
      is-arrayish: 0.2.1

  escalade@3.2.0: {}

  escape-string-regexp@2.0.0: {}

  escape-string-regexp@4.0.0: {}

  eslint-scope@7.2.2:
    dependencies:
      esrecurse: 4.3.0
      estraverse: 5.3.0

  eslint-visitor-keys@3.4.3: {}

  eslint@8.57.1:
    dependencies:
      '@eslint-community/eslint-utils': 4.4.1(eslint@8.57.1)
      '@eslint-community/regexpp': 4.12.1
      '@eslint/eslintrc': 2.1.4
      '@eslint/js': 8.57.1
      '@humanwhocodes/config-array': 0.13.0
      '@humanwhocodes/module-importer': 1.0.1
      '@nodelib/fs.walk': 1.2.8
      '@ungap/structured-clone': 1.2.1
      ajv: 6.12.6
      chalk: 4.1.2
      cross-spawn: 7.0.6
      debug: 4.4.0
      doctrine: 3.0.0
      escape-string-regexp: 4.0.0
      eslint-scope: 7.2.2
      eslint-visitor-keys: 3.4.3
      espree: 9.6.1
      esquery: 1.6.0
      esutils: 2.0.3
      fast-deep-equal: 3.1.3
      file-entry-cache: 6.0.1
      find-up: 5.0.0
      glob-parent: 6.0.2
      globals: 13.24.0
      graphemer: 1.4.0
      ignore: 5.3.2
      imurmurhash: 0.1.4
      is-glob: 4.0.3
      is-path-inside: 3.0.3
      js-yaml: 4.1.0
      json-stable-stringify-without-jsonify: 1.0.1
      levn: 0.4.1
      lodash.merge: 4.6.2
      minimatch: 3.1.2
      natural-compare: 1.4.0
      optionator: 0.9.4
      strip-ansi: 6.0.1
      text-table: 0.2.0
    transitivePeerDependencies:
      - supports-color

  esm-env@1.2.1: {}

  espree@9.6.1:
    dependencies:
      acorn: 8.14.0
      acorn-jsx: 5.3.2(acorn@8.14.0)
      eslint-visitor-keys: 3.4.3

  esprima@4.0.1: {}

  esquery@1.6.0:
    dependencies:
      estraverse: 5.3.0

  esrap@1.2.3:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.0
      '@types/estree': 1.0.6

  esrecurse@4.3.0:
    dependencies:
      estraverse: 5.3.0

  estraverse@5.3.0: {}

  estree-walker@2.0.2: {}

  esutils@2.0.3: {}

  event-target-shim@5.0.1: {}

  eventemitter3@4.0.7: {}

  eventsource-parser@1.1.2: {}

  eventsource-parser@3.0.0: {}

  execa@5.1.1:
    dependencies:
      cross-spawn: 7.0.6
      get-stream: 6.0.1
      human-signals: 2.1.0
      is-stream: 2.0.1
      merge-stream: 2.0.0
      npm-run-path: 4.0.1
      onetime: 5.1.2
      signal-exit: 3.0.7
      strip-final-newline: 2.0.0

  exit@0.1.2: {}

  expect@29.7.0:
    dependencies:
      '@jest/expect-utils': 29.7.0
      jest-get-type: 29.6.3
      jest-matcher-utils: 29.7.0
      jest-message-util: 29.7.0
      jest-util: 29.7.0

  extend@3.0.2: {}

  fast-deep-equal@3.1.3: {}

  fast-glob@3.3.2:
    dependencies:
      '@nodelib/fs.stat': 2.0.5
      '@nodelib/fs.walk': 1.2.8
      glob-parent: 5.1.2
      merge2: 1.4.1
      micromatch: 4.0.8

  fast-json-stable-stringify@2.1.0: {}

  fast-levenshtein@2.0.6: {}

  fastembed@1.14.1:
    dependencies:
      '@anush008/tokenizers': 0.0.0
      onnxruntime-node: 1.15.1
      progress: 2.0.3
      tar: 6.2.1

  fastestsmallesttextencoderdecoder@1.0.22: {}

  fastq@1.17.1:
    dependencies:
      reusify: 1.0.4

  fb-watchman@2.0.2:
    dependencies:
      bser: 2.1.1

  file-entry-cache@6.0.1:
    dependencies:
      flat-cache: 3.2.0

  filelist@1.0.4:
    dependencies:
      minimatch: 5.1.6

  fill-range@7.1.1:
    dependencies:
      to-regex-range: 5.0.1

  find-up@4.1.0:
    dependencies:
      locate-path: 5.0.0
      path-exists: 4.0.0

  find-up@5.0.0:
    dependencies:
      locate-path: 6.0.0
      path-exists: 4.0.0

  flat-cache@3.2.0:
    dependencies:
      flatted: 3.3.2
      keyv: 4.5.4
      rimraf: 3.0.2

  flatted@3.3.2: {}

  foreground-child@3.3.0:
    dependencies:
      cross-spawn: 7.0.6
      signal-exit: 4.1.0

  form-data-encoder@1.7.2: {}

  form-data@4.0.1:
    dependencies:
      asynckit: 0.4.0
      combined-stream: 1.0.8
      mime-types: 2.1.35

  formdata-node@4.4.1:
    dependencies:
      node-domexception: 1.0.0
      web-streams-polyfill: 4.0.0-beta.3

  fs-minipass@2.1.0:
    dependencies:
      minipass: 3.3.6

  fs.realpath@1.0.0: {}

  fsevents@2.3.3:
    optional: true

  function-bind@1.1.2: {}

  gaxios@6.7.1:
    dependencies:
      extend: 3.0.2
      https-proxy-agent: 7.0.6
      is-stream: 2.0.1
      node-fetch: 2.7.0
      uuid: 9.0.1
    transitivePeerDependencies:
      - encoding
      - supports-color

  gcp-metadata@6.1.0:
    dependencies:
      gaxios: 6.7.1
      json-bigint: 1.0.0
    transitivePeerDependencies:
      - encoding
      - supports-color

  gensync@1.0.0-beta.2: {}

  get-caller-file@2.0.5: {}

  get-package-type@0.1.0: {}

  get-stream@6.0.1: {}

  glob-parent@5.1.2:
    dependencies:
      is-glob: 4.0.3

  glob-parent@6.0.2:
    dependencies:
      is-glob: 4.0.3

  glob@11.0.0:
    dependencies:
      foreground-child: 3.3.0
      jackspeak: 4.0.2
      minimatch: 10.0.1
      minipass: 7.1.2
      package-json-from-dist: 1.0.1
      path-scurry: 2.0.0

  glob@7.2.3:
    dependencies:
      fs.realpath: 1.0.0
      inflight: 1.0.6
      inherits: 2.0.4
      minimatch: 3.1.2
      once: 1.4.0
      path-is-absolute: 1.0.1

  globals@11.12.0: {}

  globals@13.24.0:
    dependencies:
      type-fest: 0.20.2

  globby@11.1.0:
    dependencies:
      array-union: 2.1.0
      dir-glob: 3.0.1
      fast-glob: 3.3.2
      ignore: 5.3.2
      merge2: 1.4.1
      slash: 3.0.0

  google-auth-library@9.15.0:
    dependencies:
      base64-js: 1.5.1
      ecdsa-sig-formatter: 1.0.11
      gaxios: 6.7.1
      gcp-metadata: 6.1.0
      gtoken: 7.1.0
      jws: 4.0.0
    transitivePeerDependencies:
      - encoding
      - supports-color

  graceful-fs@4.2.11: {}

  graphemer@1.4.0: {}

  gtoken@7.1.0:
    dependencies:
      gaxios: 6.7.1
      jws: 4.0.0
    transitivePeerDependencies:
      - encoding
      - supports-color

  handlebars@4.7.8:
    dependencies:
      minimist: 1.2.8
      neo-async: 2.6.2
      source-map: 0.6.1
      wordwrap: 1.0.0
    optionalDependencies:
      uglify-js: 3.19.3

  has-flag@4.0.0: {}

  hasown@2.0.2:
    dependencies:
      function-bind: 1.1.2

  html-escaper@2.0.2: {}

  https-proxy-agent@7.0.6:
    dependencies:
      agent-base: 7.1.3
      debug: 4.4.0
    transitivePeerDependencies:
      - supports-color

  human-signals@2.1.0: {}

  humanize-ms@1.2.1:
    dependencies:
      ms: 2.1.3

  ignore@5.3.2: {}

  import-fresh@3.3.0:
    dependencies:
      parent-module: 1.0.1
      resolve-from: 4.0.0

  import-local@3.2.0:
    dependencies:
      pkg-dir: 4.2.0
      resolve-cwd: 3.0.0

  imurmurhash@0.1.4: {}

  inflight@1.0.6:
    dependencies:
      once: 1.4.0
      wrappy: 1.0.2

  inherits@2.0.4: {}

  is-arrayish@0.2.1: {}

  is-core-module@2.16.0:
    dependencies:
      hasown: 2.0.2

  is-extglob@2.1.1: {}

  is-fullwidth-code-point@3.0.0: {}

  is-generator-fn@2.1.0: {}

  is-glob@4.0.3:
    dependencies:
      is-extglob: 2.1.1

  is-number@7.0.0: {}

  is-path-inside@3.0.3: {}

  is-reference@3.0.3:
    dependencies:
      '@types/estree': 1.0.6

  is-stream@2.0.1: {}

  isexe@2.0.0: {}

  istanbul-lib-coverage@3.2.2: {}

  istanbul-lib-instrument@5.2.1:
    dependencies:
      '@babel/core': 7.26.0
      '@babel/parser': 7.26.3
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.2
      semver: 6.3.1
    transitivePeerDependencies:
      - supports-color

  istanbul-lib-instrument@6.0.3:
    dependencies:
      '@babel/core': 7.26.0
      '@babel/parser': 7.26.3
      '@istanbuljs/schema': 0.1.3
      istanbul-lib-coverage: 3.2.2
      semver: 7.6.3
    transitivePeerDependencies:
      - supports-color

  istanbul-lib-report@3.0.1:
    dependencies:
      istanbul-lib-coverage: 3.2.2
      make-dir: 4.0.0
      supports-color: 7.2.0

  istanbul-lib-source-maps@4.0.1:
    dependencies:
      debug: 4.4.0
      istanbul-lib-coverage: 3.2.2
      source-map: 0.6.1
    transitivePeerDependencies:
      - supports-color

  istanbul-reports@3.1.7:
    dependencies:
      html-escaper: 2.0.2
      istanbul-lib-report: 3.0.1

  jackspeak@4.0.2:
    dependencies:
      '@isaacs/cliui': 8.0.2

  jake@10.9.2:
    dependencies:
      async: 3.2.6
      chalk: 4.1.2
      filelist: 1.0.4
      minimatch: 3.1.2

  jest-changed-files@29.7.0:
    dependencies:
      execa: 5.1.1
      jest-util: 29.7.0
      p-limit: 3.1.0

  jest-circus@29.7.0:
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/expect': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      chalk: 4.1.2
      co: 4.6.0
      dedent: 1.5.3
      is-generator-fn: 2.1.0
      jest-each: 29.7.0
      jest-matcher-utils: 29.7.0
      jest-message-util: 29.7.0
      jest-runtime: 29.7.0
      jest-snapshot: 29.7.0
      jest-util: 29.7.0
      p-limit: 3.1.0
      pretty-format: 29.7.0
      pure-rand: 6.1.0
      slash: 3.0.0
      stack-utils: 2.0.6
    transitivePeerDependencies:
      - babel-plugin-macros
      - supports-color

  jest-cli@29.7.0(@types/node@20.17.10):
    dependencies:
      '@jest/core': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/types': 29.6.3
      chalk: 4.1.2
      create-jest: 29.7.0(@types/node@20.17.10)
      exit: 0.1.2
      import-local: 3.2.0
      jest-config: 29.7.0(@types/node@20.17.10)
      jest-util: 29.7.0
      jest-validate: 29.7.0
      yargs: 17.7.2
    transitivePeerDependencies:
      - '@types/node'
      - babel-plugin-macros
      - supports-color
      - ts-node

  jest-config@29.7.0(@types/node@20.17.10):
    dependencies:
      '@babel/core': 7.26.0
      '@jest/test-sequencer': 29.7.0
      '@jest/types': 29.6.3
      babel-jest: 29.7.0(@babel/core@7.26.0)
      chalk: 4.1.2
      ci-info: 3.9.0
      deepmerge: 4.3.1
      glob: 7.2.3
      graceful-fs: 4.2.11
      jest-circus: 29.7.0
      jest-environment-node: 29.7.0
      jest-get-type: 29.6.3
      jest-regex-util: 29.6.3
      jest-resolve: 29.7.0
      jest-runner: 29.7.0
      jest-util: 29.7.0
      jest-validate: 29.7.0
      micromatch: 4.0.8
      parse-json: 5.2.0
      pretty-format: 29.7.0
      slash: 3.0.0
      strip-json-comments: 3.1.1
    optionalDependencies:
      '@types/node': 20.17.10
    transitivePeerDependencies:
      - babel-plugin-macros
      - supports-color

  jest-diff@29.7.0:
    dependencies:
      chalk: 4.1.2
      diff-sequences: 29.6.3
      jest-get-type: 29.6.3
      pretty-format: 29.7.0

  jest-docblock@29.7.0:
    dependencies:
      detect-newline: 3.1.0

  jest-each@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      chalk: 4.1.2
      jest-get-type: 29.6.3
      jest-util: 29.7.0
      pretty-format: 29.7.0

  jest-environment-node@29.7.0:
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/fake-timers': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      jest-mock: 29.7.0
      jest-util: 29.7.0

  jest-get-type@29.6.3: {}

  jest-haste-map@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      '@types/graceful-fs': 4.1.9
      '@types/node': 20.17.10
      anymatch: 3.1.3
      fb-watchman: 2.0.2
      graceful-fs: 4.2.11
      jest-regex-util: 29.6.3
      jest-util: 29.7.0
      jest-worker: 29.7.0
      micromatch: 4.0.8
      walker: 1.0.8
    optionalDependencies:
      fsevents: 2.3.3

  jest-leak-detector@29.7.0:
    dependencies:
      jest-get-type: 29.6.3
      pretty-format: 29.7.0

  jest-matcher-utils@29.7.0:
    dependencies:
      chalk: 4.1.2
      jest-diff: 29.7.0
      jest-get-type: 29.6.3
      pretty-format: 29.7.0

  jest-message-util@29.7.0:
    dependencies:
      '@babel/code-frame': 7.26.2
      '@jest/types': 29.6.3
      '@types/stack-utils': 2.0.3
      chalk: 4.1.2
      graceful-fs: 4.2.11
      micromatch: 4.0.8
      pretty-format: 29.7.0
      slash: 3.0.0
      stack-utils: 2.0.6

  jest-mock@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      jest-util: 29.7.0

  jest-pnp-resolver@1.2.3(jest-resolve@29.7.0):
    optionalDependencies:
      jest-resolve: 29.7.0

  jest-regex-util@29.6.3: {}

  jest-resolve-dependencies@29.7.0:
    dependencies:
      jest-regex-util: 29.6.3
      jest-snapshot: 29.7.0
    transitivePeerDependencies:
      - supports-color

  jest-resolve@29.7.0:
    dependencies:
      chalk: 4.1.2
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      jest-pnp-resolver: 1.2.3(jest-resolve@29.7.0)
      jest-util: 29.7.0
      jest-validate: 29.7.0
      resolve: 1.22.9
      resolve.exports: 2.0.3
      slash: 3.0.0

  jest-runner@29.7.0:
    dependencies:
      '@jest/console': 29.7.0
      '@jest/environment': 29.7.0
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      chalk: 4.1.2
      emittery: 0.13.1
      graceful-fs: 4.2.11
      jest-docblock: 29.7.0
      jest-environment-node: 29.7.0
      jest-haste-map: 29.7.0
      jest-leak-detector: 29.7.0
      jest-message-util: 29.7.0
      jest-resolve: 29.7.0
      jest-runtime: 29.7.0
      jest-util: 29.7.0
      jest-watcher: 29.7.0
      jest-worker: 29.7.0
      p-limit: 3.1.0
      source-map-support: 0.5.13
    transitivePeerDependencies:
      - supports-color

  jest-runtime@29.7.0:
    dependencies:
      '@jest/environment': 29.7.0
      '@jest/fake-timers': 29.7.0
      '@jest/globals': 29.7.0
      '@jest/source-map': 29.6.3
      '@jest/test-result': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      chalk: 4.1.2
      cjs-module-lexer: 1.4.1
      collect-v8-coverage: 1.0.2
      glob: 7.2.3
      graceful-fs: 4.2.11
      jest-haste-map: 29.7.0
      jest-message-util: 29.7.0
      jest-mock: 29.7.0
      jest-regex-util: 29.6.3
      jest-resolve: 29.7.0
      jest-snapshot: 29.7.0
      jest-util: 29.7.0
      slash: 3.0.0
      strip-bom: 4.0.0
    transitivePeerDependencies:
      - supports-color

  jest-snapshot@29.7.0:
    dependencies:
      '@babel/core': 7.26.0
      '@babel/generator': 7.26.3
      '@babel/plugin-syntax-jsx': 7.25.9(@babel/core@7.26.0)
      '@babel/plugin-syntax-typescript': 7.25.9(@babel/core@7.26.0)
      '@babel/types': 7.26.3
      '@jest/expect-utils': 29.7.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      babel-preset-current-node-syntax: 1.1.0(@babel/core@7.26.0)
      chalk: 4.1.2
      expect: 29.7.0
      graceful-fs: 4.2.11
      jest-diff: 29.7.0
      jest-get-type: 29.6.3
      jest-matcher-utils: 29.7.0
      jest-message-util: 29.7.0
      jest-util: 29.7.0
      natural-compare: 1.4.0
      pretty-format: 29.7.0
      semver: 7.6.3
    transitivePeerDependencies:
      - supports-color

  jest-util@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      chalk: 4.1.2
      ci-info: 3.9.0
      graceful-fs: 4.2.11
      picomatch: 2.3.1

  jest-validate@29.7.0:
    dependencies:
      '@jest/types': 29.6.3
      camelcase: 6.3.0
      chalk: 4.1.2
      jest-get-type: 29.6.3
      leven: 3.1.0
      pretty-format: 29.7.0

  jest-watcher@29.7.0:
    dependencies:
      '@jest/test-result': 29.7.0
      '@jest/types': 29.6.3
      '@types/node': 20.17.10
      ansi-escapes: 4.3.2
      chalk: 4.1.2
      emittery: 0.13.1
      jest-util: 29.7.0
      string-length: 4.0.2

  jest-worker@29.7.0:
    dependencies:
      '@types/node': 20.17.10
      jest-util: 29.7.0
      merge-stream: 2.0.0
      supports-color: 8.1.1

  jest@29.7.0(@types/node@20.17.10):
    dependencies:
      '@jest/core': 29.7.0
      '@jest/types': 29.6.3
      import-local: 3.2.0
      jest-cli: 29.7.0(@types/node@20.17.10)
    transitivePeerDependencies:
      - '@types/node'
      - babel-plugin-macros
      - supports-color
      - ts-node

  js-sha1@0.7.0: {}

  js-tiktoken@1.0.15:
    dependencies:
      base64-js: 1.5.1

  js-tokens@4.0.0: {}

  js-yaml@3.14.1:
    dependencies:
      argparse: 1.0.10
      esprima: 4.0.1

  js-yaml@4.1.0:
    dependencies:
      argparse: 2.0.1

  jsesc@3.1.0: {}

  json-bigint@1.0.0:
    dependencies:
      bignumber.js: 9.1.2

  json-buffer@3.0.1: {}

  json-parse-even-better-errors@2.3.1: {}

  json-schema-traverse@0.4.1: {}

  json-schema@0.4.0: {}

  json-stable-stringify-without-jsonify@1.0.1: {}

  json5@2.2.3: {}

  jsondiffpatch@0.6.0:
    dependencies:
      '@types/diff-match-patch': 1.0.36
      chalk: 5.3.0
      diff-match-patch: 1.0.5

  jsonpointer@5.0.1: {}

  jwa@2.0.0:
    dependencies:
      buffer-equal-constant-time: 1.0.1
      ecdsa-sig-formatter: 1.0.11
      safe-buffer: 5.2.1

  jws@4.0.0:
    dependencies:
      jwa: 2.0.0
      safe-buffer: 5.2.1

  keyv@4.5.4:
    dependencies:
      json-buffer: 3.0.1

  kleur@3.0.3: {}

  langchain@0.3.6(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))(handlebars@4.7.8)(openai@4.73.0(zod@3.23.8)):
    dependencies:
      '@langchain/core': 0.3.24(openai@4.73.0(zod@3.23.8))
      '@langchain/openai': 0.3.14(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))
      '@langchain/textsplitters': 0.1.0(@langchain/core@0.3.24(openai@4.73.0(zod@3.23.8)))
      js-tiktoken: 1.0.15
      js-yaml: 4.1.0
      jsonpointer: 5.0.1
      langsmith: 0.2.13(openai@4.73.0(zod@3.23.8))
      openapi-types: 12.1.3
      p-retry: 4.6.2
      uuid: 10.0.0
      yaml: 2.6.1
      zod: 3.23.8
      zod-to-json-schema: 3.24.1(zod@3.23.8)
    optionalDependencies:
      handlebars: 4.7.8
    transitivePeerDependencies:
      - encoding
      - openai

  langsmith@0.2.13(openai@4.73.0(zod@3.23.8)):
    dependencies:
      '@types/uuid': 10.0.0
      commander: 10.0.1
      p-queue: 6.6.2
      p-retry: 4.6.2
      semver: 7.6.3
      uuid: 10.0.0
    optionalDependencies:
      openai: 4.73.0(zod@3.23.8)

  leven@3.1.0: {}

  levn@0.4.1:
    dependencies:
      prelude-ls: 1.2.1
      type-check: 0.4.0

  lines-and-columns@1.2.4: {}

  locate-character@3.0.0: {}

  locate-path@5.0.0:
    dependencies:
      p-locate: 4.1.0

  locate-path@6.0.0:
    dependencies:
      p-locate: 5.0.0

  lodash.memoize@4.1.2: {}

  lodash.merge@4.6.2: {}

  loose-envify@1.4.0:
    dependencies:
      js-tokens: 4.0.0

  lru-cache@11.0.2: {}

  lru-cache@5.1.1:
    dependencies:
      yallist: 3.1.1

  magic-string@0.30.17:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.0

  make-dir@4.0.0:
    dependencies:
      semver: 7.6.3

  make-error@1.3.6: {}

  makeerror@1.0.12:
    dependencies:
      tmpl: 1.0.5

  merge-stream@2.0.0: {}

  merge2@1.4.1: {}

  micromatch@4.0.8:
    dependencies:
      braces: 3.0.3
      picomatch: 2.3.1

  mime-db@1.52.0: {}

  mime-types@2.1.35:
    dependencies:
      mime-db: 1.52.0

  mimic-fn@2.1.0: {}

  minimatch@10.0.1:
    dependencies:
      brace-expansion: 2.0.1

  minimatch@3.1.2:
    dependencies:
      brace-expansion: 1.1.11

  minimatch@5.1.6:
    dependencies:
      brace-expansion: 2.0.1

  minimatch@9.0.3:
    dependencies:
      brace-expansion: 2.0.1

  minimist@1.2.8: {}

  minipass@3.3.6:
    dependencies:
      yallist: 4.0.0

  minipass@5.0.0: {}

  minipass@7.1.2: {}

  minizlib@2.1.2:
    dependencies:
      minipass: 3.3.6
      yallist: 4.0.0

  mkdirp@1.0.4: {}

  ms@2.1.3: {}

  mustache@4.2.0: {}

  nanoid@3.3.6: {}

  nanoid@3.3.8: {}

  natural-compare@1.4.0: {}

  neo-async@2.6.2: {}

  node-domexception@1.0.0: {}

  node-fetch@2.7.0:
    dependencies:
      whatwg-url: 5.0.0

  node-int64@0.4.0: {}

  node-releases@2.0.19: {}

  normalize-path@3.0.0: {}

  npm-run-path@4.0.1:
    dependencies:
      path-key: 3.1.1

  ollama-ai-provider@0.16.1(zod@3.23.8):
    dependencies:
      '@ai-sdk/provider': 0.0.26
      '@ai-sdk/provider-utils': 1.0.22(zod@3.23.8)
      partial-json: 0.1.7
    optionalDependencies:
      zod: 3.23.8

  once@1.4.0:
    dependencies:
      wrappy: 1.0.2

  onetime@5.1.2:
    dependencies:
      mimic-fn: 2.1.0

  onnxruntime-common@1.15.1: {}

  onnxruntime-node@1.15.1:
    dependencies:
      onnxruntime-common: 1.15.1

  openai@4.73.0(zod@3.23.8):
    dependencies:
      '@types/node': 18.19.68
      '@types/node-fetch': 2.6.12
      abort-controller: 3.0.0
      agentkeepalive: 4.5.0
      form-data-encoder: 1.7.2
      formdata-node: 4.4.1
      node-fetch: 2.7.0
    optionalDependencies:
      zod: 3.23.8
    transitivePeerDependencies:
      - encoding

  openapi-types@12.1.3: {}

  optionator@0.9.4:
    dependencies:
      deep-is: 0.1.4
      fast-levenshtein: 2.0.6
      levn: 0.4.1
      prelude-ls: 1.2.1
      type-check: 0.4.0
      word-wrap: 1.2.5

  p-finally@1.0.0: {}

  p-limit@2.3.0:
    dependencies:
      p-try: 2.2.0

  p-limit@3.1.0:
    dependencies:
      yocto-queue: 0.1.0

  p-locate@4.1.0:
    dependencies:
      p-limit: 2.3.0

  p-locate@5.0.0:
    dependencies:
      p-limit: 3.1.0

  p-queue@6.6.2:
    dependencies:
      eventemitter3: 4.0.7
      p-timeout: 3.2.0

  p-retry@4.6.2:
    dependencies:
      '@types/retry': 0.12.0
      retry: 0.13.1

  p-timeout@3.2.0:
    dependencies:
      p-finally: 1.0.0

  p-try@2.2.0: {}

  package-json-from-dist@1.0.1: {}

  parent-module@1.0.1:
    dependencies:
      callsites: 3.1.0

  parse-json@5.2.0:
    dependencies:
      '@babel/code-frame': 7.26.2
      error-ex: 1.3.2
      json-parse-even-better-errors: 2.3.1
      lines-and-columns: 1.2.4

  partial-json@0.1.7: {}

  path-exists@4.0.0: {}

  path-is-absolute@1.0.1: {}

  path-key@3.1.1: {}

  path-parse@1.0.7: {}

  path-scurry@2.0.0:
    dependencies:
      lru-cache: 11.0.2
      minipass: 7.1.2

  path-type@4.0.0: {}

  picocolors@1.1.1: {}

  picomatch@2.3.1: {}

  pirates@4.0.6: {}

  pkg-dir@4.2.0:
    dependencies:
      find-up: 4.1.0

  postcss@8.4.49:
    dependencies:
      nanoid: 3.3.8
      picocolors: 1.1.1
      source-map-js: 1.2.1

  prelude-ls@1.2.1: {}

  prettier@3.4.2: {}

  pretty-format@29.7.0:
    dependencies:
      '@jest/schemas': 29.6.3
      ansi-styles: 5.2.0
      react-is: 18.3.1

  progress@2.0.3: {}

  prompts@2.4.2:
    dependencies:
      kleur: 3.0.3
      sisteransi: 1.0.5

  punycode@2.3.1: {}

  pure-rand@6.1.0: {}

  queue-microtask@1.2.3: {}

  react-is@18.3.1: {}

  react@18.3.1:
    dependencies:
      loose-envify: 1.4.0

  require-directory@2.1.1: {}

  resolve-cwd@3.0.0:
    dependencies:
      resolve-from: 5.0.0

  resolve-from@4.0.0: {}

  resolve-from@5.0.0: {}

  resolve.exports@2.0.3: {}

  resolve@1.22.9:
    dependencies:
      is-core-module: 2.16.0
      path-parse: 1.0.7
      supports-preserve-symlinks-flag: 1.0.0

  retry@0.13.1: {}

  reusify@1.0.4: {}

  rimraf@3.0.2:
    dependencies:
      glob: 7.2.3

  robot3@0.4.1: {}

  run-parallel@1.2.0:
    dependencies:
      queue-microtask: 1.2.3

  safe-buffer@5.2.1: {}

  secure-json-parse@2.7.0: {}

  semver@6.3.1: {}

  semver@7.6.3: {}

  shebang-command@2.0.0:
    dependencies:
      shebang-regex: 3.0.0

  shebang-regex@3.0.0: {}

  signal-exit@3.0.7: {}

  signal-exit@4.1.0: {}

  sisteransi@1.0.5: {}

  slash@3.0.0: {}

  source-map-js@1.2.1: {}

  source-map-support@0.5.13:
    dependencies:
      buffer-from: 1.1.2
      source-map: 0.6.1

  source-map@0.6.1: {}

  sprintf-js@1.0.3: {}

  sswr@2.1.0(svelte@5.14.2):
    dependencies:
      svelte: 5.14.2
      swrev: 4.0.0

  stack-utils@2.0.6:
    dependencies:
      escape-string-regexp: 2.0.0

  string-length@4.0.2:
    dependencies:
      char-regex: 1.0.2
      strip-ansi: 6.0.1

  string-width@4.2.3:
    dependencies:
      emoji-regex: 8.0.0
      is-fullwidth-code-point: 3.0.0
      strip-ansi: 6.0.1

  string-width@5.1.2:
    dependencies:
      eastasianwidth: 0.2.0
      emoji-regex: 9.2.2
      strip-ansi: 7.1.0

  strip-ansi@6.0.1:
    dependencies:
      ansi-regex: 5.0.1

  strip-ansi@7.1.0:
    dependencies:
      ansi-regex: 6.1.0

  strip-bom@4.0.0: {}

  strip-final-newline@2.0.0: {}

  strip-json-comments@3.1.1: {}

  supports-color@7.2.0:
    dependencies:
      has-flag: 4.0.0

  supports-color@8.1.1:
    dependencies:
      has-flag: 4.0.0

  supports-preserve-symlinks-flag@1.0.0: {}

  svelte@5.14.2:
    dependencies:
      '@ampproject/remapping': 2.3.0
      '@jridgewell/sourcemap-codec': 1.5.0
      '@types/estree': 1.0.6
      acorn: 8.14.0
      acorn-typescript: 1.4.13(acorn@8.14.0)
      aria-query: 5.3.2
      axobject-query: 4.1.0
      esm-env: 1.2.1
      esrap: 1.2.3
      is-reference: 3.0.3
      locate-character: 3.0.0
      magic-string: 0.30.17
      zimmerframe: 1.1.2

  swr@2.2.5(react@18.3.1):
    dependencies:
      client-only: 0.0.1
      react: 18.3.1
      use-sync-external-store: 1.4.0(react@18.3.1)

  swrev@4.0.0: {}

  swrv@1.0.4(vue@3.5.13(typescript@5.7.2)):
    dependencies:
      vue: 3.5.13(typescript@5.7.2)

  tar@6.2.1:
    dependencies:
      chownr: 2.0.0
      fs-minipass: 2.1.0
      minipass: 5.0.0
      minizlib: 2.1.2
      mkdirp: 1.0.4
      yallist: 4.0.0

  test-exclude@6.0.0:
    dependencies:
      '@istanbuljs/schema': 0.1.3
      glob: 7.2.3
      minimatch: 3.1.2

  text-table@0.2.0: {}

  throttleit@2.1.0: {}

  tinyld@1.3.4: {}

  tmpl@1.0.5: {}

  to-regex-range@5.0.1:
    dependencies:
      is-number: 7.0.0

  together-ai@0.7.0:
    dependencies:
      '@types/node': 18.19.68
      '@types/node-fetch': 2.6.12
      abort-controller: 3.0.0
      agentkeepalive: 4.5.0
      form-data-encoder: 1.7.2
      formdata-node: 4.4.1
      node-fetch: 2.7.0
    transitivePeerDependencies:
      - encoding

  tr46@0.0.3: {}

  ts-api-utils@1.4.3(typescript@5.7.2):
    dependencies:
      typescript: 5.7.2

  ts-jest@29.2.5(@babel/core@7.26.0)(@jest/transform@29.7.0)(@jest/types@29.6.3)(babel-jest@29.7.0(@babel/core@7.26.0))(jest@29.7.0(@types/node@20.17.10))(typescript@5.7.2):
    dependencies:
      bs-logger: 0.2.6
      ejs: 3.1.10
      fast-json-stable-stringify: 2.1.0
      jest: 29.7.0(@types/node@20.17.10)
      jest-util: 29.7.0
      json5: 2.2.3
      lodash.memoize: 4.1.2
      make-error: 1.3.6
      semver: 7.6.3
      typescript: 5.7.2
      yargs-parser: 21.1.1
    optionalDependencies:
      '@babel/core': 7.26.0
      '@jest/transform': 29.7.0
      '@jest/types': 29.6.3
      babel-jest: 29.7.0(@babel/core@7.26.0)

  type-check@0.4.0:
    dependencies:
      prelude-ls: 1.2.1

  type-detect@4.0.8: {}

  type-fest@0.20.2: {}

  type-fest@0.21.3: {}

  typescript@5.7.2: {}

  uglify-js@3.19.3:
    optional: true

  undici-types@5.26.5: {}

  undici-types@6.19.8: {}

  unique-names-generator@4.7.1: {}

  update-browserslist-db@1.1.1(browserslist@4.24.3):
    dependencies:
      browserslist: 4.24.3
      escalade: 3.2.0
      picocolors: 1.1.1

  uri-js@4.4.1:
    dependencies:
      punycode: 2.3.1

  use-sync-external-store@1.4.0(react@18.3.1):
    dependencies:
      react: 18.3.1

  uuid@10.0.0: {}

  uuid@11.0.3: {}

  uuid@9.0.1: {}

  v8-to-istanbul@9.3.0:
    dependencies:
      '@jridgewell/trace-mapping': 0.3.25
      '@types/istanbul-lib-coverage': 2.0.6
      convert-source-map: 2.0.0

  vue@3.5.13(typescript@5.7.2):
    dependencies:
      '@vue/compiler-dom': 3.5.13
      '@vue/compiler-sfc': 3.5.13
      '@vue/runtime-dom': 3.5.13
      '@vue/server-renderer': 3.5.13(vue@3.5.13(typescript@5.7.2))
      '@vue/shared': 3.5.13
    optionalDependencies:
      typescript: 5.7.2

  walker@1.0.8:
    dependencies:
      makeerror: 1.0.12

  web-streams-polyfill@4.0.0-beta.3: {}

  webidl-conversions@3.0.1: {}

  whatwg-url@5.0.0:
    dependencies:
      tr46: 0.0.3
      webidl-conversions: 3.0.1

  which@2.0.2:
    dependencies:
      isexe: 2.0.0

  word-wrap@1.2.5: {}

  wordwrap@1.0.0: {}

  wrap-ansi@7.0.0:
    dependencies:
      ansi-styles: 4.3.0
      string-width: 4.2.3
      strip-ansi: 6.0.1

  wrap-ansi@8.1.0:
    dependencies:
      ansi-styles: 6.2.1
      string-width: 5.1.2
      strip-ansi: 7.1.0

  wrappy@1.0.2: {}

  write-file-atomic@4.0.2:
    dependencies:
      imurmurhash: 0.1.4
      signal-exit: 3.0.7

  y18n@5.0.8: {}

  yallist@3.1.1: {}

  yallist@4.0.0: {}

  yaml@2.6.1: {}

  yargs-parser@21.1.1: {}

  yargs@17.7.2:
    dependencies:
      cliui: 8.0.1
      escalade: 3.2.0
      get-caller-file: 2.0.5
      require-directory: 2.1.1
      string-width: 4.2.3
      y18n: 5.0.8
      yargs-parser: 21.1.1

  yocto-queue@0.1.0: {}

  zimmerframe@1.1.2: {}

  zod-to-json-schema@3.24.1(zod@3.23.8):
    dependencies:
      zod: 3.23.8

  zod-to-json-schema@3.24.1(zod@3.24.1):
    dependencies:
      zod: 3.24.1

  zod@3.23.8: {}

  zod@3.24.1: {}

```

`/home/anon/repos/eliza/eliza-plugin-starter/package.json`:

```json
{
  "name": "eliza-plugin-starter",
  "version": "0.1.0",
  "description": "Starter template for creating Eliza plugins with examples for Tavily and Exa search",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "dev": "tsc -w",
    "test": "jest",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write src"
  },
  "keywords": [
    "eliza",
    "ai",
    "plugin",
    "tavily",
    "exa",
    "search"
  ],
  "author": "",
  "license": "MIT",
  "dependencies": {
    "@ai16z/eliza": "0.1.6-alpha.4"
  },
  "devDependencies": {
    "@types/jest": "^29.5.14",
    "@types/node": "^20.17.10",
    "@typescript-eslint/eslint-plugin": "^6.21.0",
    "@typescript-eslint/parser": "^6.21.0",
    "eslint": "^8.57.1",
    "jest": "^29.7.0",
    "prettier": "^3.4.2",
    "ts-jest": "^29.2.5",
    "typescript": "^5.7.2"
  }
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/docs/PLUGIN_GUIDE.md`:

```md
# Plugin Development Guide for Eliza Search Plugins

This guide provides step-by-step instructions for implementing search plugins for the Eliza AI agent framework, with specific focus on Tavily and Exa search implementations.

## Prerequisites

1. Node.js 23 or higher
2. pnpm package manager
3. TypeScript knowledge
4. API keys for the search service you want to implement:
   - Tavily API key from [Tavily](https://tavily.com)
   - Exa API key from [Exa](https://exa.ai)

## Project Setup

1. Clone the starter repository:
   ```bash
   git clone https://github.com/tmc/eliza-plugin-starter
   cd eliza-plugin-starter
   pnpm install
   ```

2. Set up your environment:
   ```bash
   # Create a .env file
   touch .env

   # Add your API keys
   echo "TAVILY_API_KEY=your_key_here" >> .env
   echo "EXA_API_KEY=your_key_here" >> .env
   ```

## Plugin Structure

Each search plugin follows this structure:

```typescript
// PLACEHOLDER: imports

export interface SearchPluginConfig {
  apiKey: string;
  maxResults?: number;
  searchType?: string;
  filters?: Record<string, unknown>;
}

export class SearchPlugin implements Plugin {
  name: string;
  description: string;
  config: SearchPluginConfig;
  actions: SearchAction[];
}
```

## Implementing Tavily Search Plugin

1. **Create Plugin Configuration**
   ```typescript
   interface TavilyPluginConfig extends SearchPluginConfig {
     searchType?: 'search' | 'news' | 'academic';
   }

   const DEFAULT_CONFIG: Partial<TavilyPluginConfig> = {
     maxResults: 5,
     searchType: 'search',
   };
   ```

2. **Implement Search Action**
   ```typescript
   const TAVILY_SEARCH: SearchAction = {
     name: 'TAVILY_SEARCH',
     description: 'Search the web using Tavily API',
     examples: [
       [
         {
           user: 'user',
           content: { text: 'Search for recent AI developments' }
         }
       ]
     ],
     similes: [
       'like a knowledgeable research assistant',
       'like a comprehensive web search engine'
     ],
     validate: async (runtime, message, state) => {
       try {
         validateSearchQuery(message.content);
         return true;
       } catch {
         return false;
       }
     },
     handler: async (runtime, message, state) => {
       // Implementation details below
     }
   };
   ```

3. **Implement API Integration**
   ```typescript
   async handler(runtime, message, state) {
     try {
       const query = validateSearchQuery(message.content);
       const response = await fetch('https://api.tavily.com/search', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${this.config.apiKey}`,
         },
         body: JSON.stringify({
           query,
           search_type: this.config.searchType,
           max_results: this.config.maxResults,
         }),
       });

       // Process results
       const data = await response.json();
       return {
         success: true,
         response: formatSearchResults(data.results),
       };
     } catch (error) {
       return handleApiError(error);
     }
   }
   ```

## Implementing Exa Search Plugin

1. **Create Plugin Configuration**
   ```typescript
   interface ExaPluginConfig extends SearchPluginConfig {
     searchType?: 'semantic' | 'code' | 'document';
     filters?: {
       language?: string;
       fileType?: string;
     };
   }

   const DEFAULT_CONFIG: Partial<ExaPluginConfig> = {
     maxResults: 5,
     searchType: 'semantic',
   };
   ```

2. **Implement Search Action**
   ```typescript
   const EXA_SEARCH: SearchAction = {
     name: 'EXA_SEARCH',
     description: 'Search using Exa API for semantic, code, and document search',
     examples: [
       [
         {
           user: 'user',
           content: { text: 'Find code examples for implementing OAuth' }
         }
       ]
     ],
     similes: [
       'like having a code-aware search engine',
       'like a technical documentation expert'
     ],
     validate: async (runtime, message, state) => {
       try {
         validateSearchQuery(message.content);
         return true;
       } catch {
         return false;
       }
     },
     handler: async (runtime, message, state) => {
       // Implementation details below
     }
   };
   ```

3. **Implement API Integration**
   ```typescript
   async handler(runtime, message, state) {
     try {
       const query = validateSearchQuery(message.content);
       const response = await fetch('https://api.exa.ai/search', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
           'Authorization': `Bearer ${this.config.apiKey}`,
         },
         body: JSON.stringify({
           query,
           search_type: this.config.searchType,
           max_results: this.config.maxResults,
           filters: this.config.filters,
         }),
       });

       // Process results
       const data = await response.json();
       return {
         success: true,
         response: formatSearchResults(data.results),
       };
     } catch (error) {
       return handleApiError(error);
     }
   }
   ```

## Testing Your Implementation

1. **Unit Tests**
   ```typescript
   describe('SearchPlugin', () => {
     it('should validate search queries', async () => {
       const plugin = new SearchPlugin(config);
       const result = await plugin.actions[0].validate(
         runtime,
         { content: { text: 'test query' } }
       );
       expect(result).toBe(true);
     });
   });
   ```

2. **Integration Testing**
   ```typescript
   describe('API Integration', () => {
     it('should return search results', async () => {
       const plugin = new SearchPlugin(config);
       const results = await plugin.actions[0].handler(
         runtime,
         { content: { text: 'test query' } }
       );
       expect(results.success).toBe(true);
       expect(Array.isArray(results.response)).toBe(true);
     });
   });
   ```

## Error Handling and Best Practices

1. **Rate Limiting**
   ```typescript
   const rateLimiter = createRateLimiter(60, 60000); // 60 requests per minute

   if (!rateLimiter.checkLimit()) {
     return {
       success: false,
       response: 'Rate limit exceeded. Please try again later.',
     };
   }
   ```

2. **Error Handling**
   ```typescript
   try {
     // API calls
   } catch (error) {
     return handleApiError(error);
   }
   ```

3. **Input Validation**
   ```typescript
   function validateSearchQuery(content: Content): string {
     if (!content?.text) {
       throw new Error('Search query is required');
     }
     return content.text.trim();
   }
   ```

## Resources

- [Eliza Documentation](https://ai16z.github.io/eliza/)
- [Tavily API Documentation](https://tavily.com/docs)
- [Exa API Documentation](https://exa.ai/docs)
- [Example Implementations](https://github.com/tmc/eliza-plugin-starter/tree/main/src/plugins)

```

`/home/anon/repos/eliza/eliza-plugin-starter/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/src/plugins/exa/index.ts`:

```ts
import { Content, IAgentRuntime, Memory, State, ActionExample } from '@ai16z/eliza';
import { SearchPlugin, SearchPluginConfig, SearchResult, SearchAction } from '../../common/types';
import { validateApiKey, validateSearchQuery, handleApiError, formatSearchResults, createRateLimiter } from '../../common/utils';

interface ExaSearchResponse {
  results: Array<{
    title: string;
    url: string;
    snippet: string;
    score: number;
  }>;
}

export interface ExaPluginConfig extends SearchPluginConfig {
  searchType?: 'semantic' | 'code' | 'document';
  filters?: {
    language?: string;
    fileType?: string;
  };
}

const DEFAULT_CONFIG: Partial<ExaPluginConfig> = {
  maxResults: 5,
  searchType: 'semantic',
};

export class ExaSearchPlugin implements SearchPlugin {
  name = 'exa-search';
  description = 'Search using Exa API for semantic, code, and document search';
  config: ExaPluginConfig;
  private rateLimiter = createRateLimiter(60, 60000); // 60 requests per minute

  constructor(config: ExaPluginConfig) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    validateApiKey(this.config);
  }

  actions: SearchAction[] = [
    {
      name: 'EXA_SEARCH',
      description: 'Search using Exa API',
      examples: [
        [
          {
            user: 'user',
            content: { text: 'Find code examples for implementing OAuth' }
          }
        ],
        [
          {
            user: 'user',
            content: { text: 'Search for documentation about GraphQL' }
          }
        ]
      ],
      similes: [
        'like having a code-aware search engine',
        'like a technical documentation expert',
        'like a semantic code analyzer',
      ],
      validate: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
        try {
          validateSearchQuery(message.content);
          return true;
        } catch {
          return false;
        }
      },
      handler: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
        try {
          if (!this.rateLimiter.checkLimit()) {
            return {
              success: false,
              response: 'Rate limit exceeded. Please try again later.',
            };
          }

          const query = validateSearchQuery(message.content);
          const response = await fetch('https://api.exa.ai/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.config.apiKey}`,
            },
            body: JSON.stringify({
              query,
              search_type: this.config.searchType,
              max_results: this.config.maxResults,
              filters: this.config.filters,
            }),
          });

          if (!response.ok) {
            throw new Error(`Exa API error: ${response.statusText}`);
          }

          const data: ExaSearchResponse = await response.json();
          const results: SearchResult[] = data.results.map(result => ({
            title: result.title,
            url: result.url,
            snippet: result.snippet,
            score: result.score,
            source: 'exa',
          }));

          return {
            success: true,
            response: formatSearchResults(results),
          };
        } catch (error) {
          return handleApiError(error);
        }
      },
    },
  ];
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/src/plugins/tavily/index.ts`:

```ts
import { Content, IAgentRuntime, Memory, State, ActionExample } from '@ai16z/eliza';
import { SearchPlugin, SearchPluginConfig, SearchResult, SearchAction } from '../../common/types';
import { validateApiKey, validateSearchQuery, handleApiError, formatSearchResults, createRateLimiter } from '../../common/utils';

interface TavilySearchResponse {
  results: Array<{
    title: string;
    url: string;
    content: string;
  }>;
}

export interface TavilyPluginConfig extends SearchPluginConfig {
  searchType?: 'search' | 'news' | 'academic';
}

const DEFAULT_CONFIG: Partial<TavilyPluginConfig> = {
  maxResults: 5,
  searchType: 'search',
};

export class TavilySearchPlugin implements SearchPlugin {
  name = 'tavily-search';
  description = 'Search the web using Tavily API';
  config: TavilyPluginConfig;
  private rateLimiter = createRateLimiter(60, 60000); // 60 requests per minute

  constructor(config: TavilyPluginConfig) {
    this.config = { ...DEFAULT_CONFIG, ...config };
    validateApiKey(this.config);
  }

  actions: SearchAction[] = [
    {
      name: 'TAVILY_SEARCH',
      description: 'Search the web using Tavily API',
      examples: [
        [
          {
            user: 'user',
            content: { text: 'Search for recent AI developments' }
          }
        ],
        [
          {
            user: 'user',
            content: { text: 'Find news about climate change' }
          }
        ]
      ],
      similes: [
        'like a knowledgeable research assistant',
        'like a comprehensive web search engine',
        'like having a librarian at your fingertips',
      ],
      validate: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
        try {
          validateSearchQuery(message.content);
          return true;
        } catch {
          return false;
        }
      },
      handler: async (runtime: IAgentRuntime, message: Memory, state?: State) => {
        try {
          if (!this.rateLimiter.checkLimit()) {
            return {
              success: false,
              response: 'Rate limit exceeded. Please try again later.',
            };
          }

          const query = validateSearchQuery(message.content);
          const response = await fetch('https://api.tavily.com/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.config.apiKey}`,
            },
            body: JSON.stringify({
              query,
              search_type: this.config.searchType,
              max_results: this.config.maxResults,
            }),
          });

          if (!response.ok) {
            throw new Error(`Tavily API error: ${response.statusText}`);
          }

          const data: TavilySearchResponse = await response.json();
          const results: SearchResult[] = data.results.map(result => ({
            title: result.title,
            url: result.url,
            snippet: result.content,
            source: 'tavily',
          }));

          return {
            success: true,
            response: formatSearchResults(results),
          };
        } catch (error) {
          return handleApiError(error);
        }
      },
    },
  ];
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/src/index.ts`:

```ts
export * from './common/types';
export * from './common/utils';
export * from './plugins/tavily';
export * from './plugins/exa';

```

`/home/anon/repos/eliza/eliza-plugin-starter/src/common/types.ts`:

```ts
import { Plugin, Action, Content, ActionExample, Handler, Validator } from '@ai16z/eliza';

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  score?: number;
  source: 'tavily' | 'exa';
  metadata?: Record<string, unknown>;
}

export interface SearchOptions {
  maxResults?: number;
  searchType?: string;
  filters?: Record<string, unknown>;
}

export interface SearchProvider {
  search(query: string, options?: SearchOptions): Promise<SearchResult[]>;
}

export interface SearchPluginConfig {
  apiKey: string;
  maxResults?: number;
  searchType?: string;
  filters?: Record<string, unknown>;
}

export interface SearchAction extends Action {
  name: string;
  description: string;
  examples: ActionExample[][];
  similes: string[];
  handler: Handler;
  validate: Validator;
}

export interface SearchPlugin extends Plugin {
  name: string;
  description: string;
  actions: SearchAction[];
  config: SearchPluginConfig;
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/src/common/utils.ts`:

```ts
import { Content } from '@ai16z/eliza';
import { SearchPluginConfig, SearchResult } from './types';

export class ApiError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export const validateApiKey = (config: SearchPluginConfig): void => {
  if (!config.apiKey) {
    throw new ApiError('API key is required');
  }
};

export const validateSearchQuery = (content: Content): string => {
  const query = typeof content === 'string' ? content : content.text;
  if (!query?.trim()) {
    throw new ApiError('Search query is required');
  }
  return query.trim();
};

export const handleApiError = (error: unknown): { success: false; response: string } => {
  if (error instanceof ApiError) {
    return {
      success: false,
      response: `API Error: ${error.message}`,
    };
  }
  return {
    success: false,
    response: 'An unexpected error occurred',
  };
};

export const formatSearchResults = (results: SearchResult[]): string => {
  return results
    .map((result, index) => {
      return `${index + 1}. ${result.title}\n   ${result.url}\n   ${result.snippet}\n`;
    })
    .join('\n');
};

export const createRateLimiter = (maxRequests: number, timeWindow: number) => {
  const requests: number[] = [];

  return {
    checkLimit: (): boolean => {
      const now = Date.now();
      const windowStart = now - timeWindow;

      // Remove old requests
      while (requests.length > 0 && requests[0] < windowStart) {
        requests.shift();
      }

      // Check if we're at the limit
      if (requests.length >= maxRequests) {
        return false;
      }

      // Add new request
      requests.push(now);
      return true;
    }
  };
};

```

`/home/anon/repos/eliza/eliza-plugin-starter/README.md`:

```md
# Eliza Plugin Starter Template

This repository provides a starter template for creating plugins for the [Eliza](https://github.com/ai16z/eliza) AI agent framework. It includes example implementations for search functionality using Tavily and Exa APIs.

## Prerequisites

- Node.js 23+
- pnpm
- TypeScript knowledge

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/yourusername/eliza-plugin-starter.git
cd eliza-plugin-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Build the project:
```bash
pnpm build
```

## Project Structure

```
src/
  ├── plugins/
  │   ├── tavily/     # Tavily search plugin implementation
  │   └── exa/        # Exa search plugin implementation
  ├── common/         # Shared utilities and types
  └── index.ts        # Main entry point
```

## Creating a Plugin

See the [Plugin Development Guide](docs/PLUGIN_GUIDE.md) for detailed instructions on creating your own plugin.

## Example Plugins

This template includes two example plugin implementations:

1. Tavily Search Plugin: Demonstrates web search capabilities using the Tavily API
2. Exa Search Plugin: Shows how to integrate with the Exa search API

Check the individual plugin directories for specific documentation and usage instructions.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/plugins/exa/index.js`:

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExaSearchPlugin = void 0;
const utils_1 = require("../../common/utils");
const DEFAULT_CONFIG = {
    maxResults: 5,
    searchType: 'semantic',
};
class ExaSearchPlugin {
    constructor(config) {
        this.name = 'exa-search';
        this.description = 'Search using Exa API for semantic, code, and document search';
        this.rateLimiter = (0, utils_1.createRateLimiter)(60, 60000); // 60 requests per minute
        this.actions = [
            {
                name: 'EXA_SEARCH',
                description: 'Search using Exa API',
                examples: [
                    [
                        {
                            user: 'user',
                            content: { text: 'Find code examples for implementing OAuth' }
                        }
                    ],
                    [
                        {
                            user: 'user',
                            content: { text: 'Search for documentation about GraphQL' }
                        }
                    ]
                ],
                similes: [
                    'like having a code-aware search engine',
                    'like a technical documentation expert',
                    'like a semantic code analyzer',
                ],
                validate: async (runtime, message, state) => {
                    try {
                        (0, utils_1.validateSearchQuery)(message.content);
                        return true;
                    }
                    catch {
                        return false;
                    }
                },
                handler: async (runtime, message, state) => {
                    try {
                        if (!this.rateLimiter.checkLimit()) {
                            return {
                                success: false,
                                response: 'Rate limit exceeded. Please try again later.',
                            };
                        }
                        const query = (0, utils_1.validateSearchQuery)(message.content);
                        const response = await fetch('https://api.exa.ai/search', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${this.config.apiKey}`,
                            },
                            body: JSON.stringify({
                                query,
                                search_type: this.config.searchType,
                                max_results: this.config.maxResults,
                                filters: this.config.filters,
                            }),
                        });
                        if (!response.ok) {
                            throw new Error(`Exa API error: ${response.statusText}`);
                        }
                        const data = await response.json();
                        const results = data.results.map(result => ({
                            title: result.title,
                            url: result.url,
                            snippet: result.snippet,
                            score: result.score,
                            source: 'exa',
                        }));
                        return {
                            success: true,
                            response: (0, utils_1.formatSearchResults)(results),
                        };
                    }
                    catch (error) {
                        return (0, utils_1.handleApiError)(error);
                    }
                },
            },
        ];
        this.config = { ...DEFAULT_CONFIG, ...config };
        (0, utils_1.validateApiKey)(this.config);
    }
}
exports.ExaSearchPlugin = ExaSearchPlugin;

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/plugins/exa/index.d.ts`:

```ts
import { SearchPlugin, SearchPluginConfig, SearchAction } from '../../common/types';
export interface ExaPluginConfig extends SearchPluginConfig {
    searchType?: 'semantic' | 'code' | 'document';
    filters?: {
        language?: string;
        fileType?: string;
    };
}
export declare class ExaSearchPlugin implements SearchPlugin {
    name: string;
    description: string;
    config: ExaPluginConfig;
    private rateLimiter;
    constructor(config: ExaPluginConfig);
    actions: SearchAction[];
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/plugins/tavily/index.js`:

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TavilySearchPlugin = void 0;
const utils_1 = require("../../common/utils");
const DEFAULT_CONFIG = {
    maxResults: 5,
    searchType: 'search',
};
class TavilySearchPlugin {
    constructor(config) {
        this.name = 'tavily-search';
        this.description = 'Search the web using Tavily API';
        this.rateLimiter = (0, utils_1.createRateLimiter)(60, 60000); // 60 requests per minute
        this.actions = [
            {
                name: 'TAVILY_SEARCH',
                description: 'Search the web using Tavily API',
                examples: [
                    [
                        {
                            user: 'user',
                            content: { text: 'Search for recent AI developments' }
                        }
                    ],
                    [
                        {
                            user: 'user',
                            content: { text: 'Find news about climate change' }
                        }
                    ]
                ],
                similes: [
                    'like a knowledgeable research assistant',
                    'like a comprehensive web search engine',
                    'like having a librarian at your fingertips',
                ],
                validate: async (runtime, message, state) => {
                    try {
                        (0, utils_1.validateSearchQuery)(message.content);
                        return true;
                    }
                    catch {
                        return false;
                    }
                },
                handler: async (runtime, message, state) => {
                    try {
                        if (!this.rateLimiter.checkLimit()) {
                            return {
                                success: false,
                                response: 'Rate limit exceeded. Please try again later.',
                            };
                        }
                        const query = (0, utils_1.validateSearchQuery)(message.content);
                        const response = await fetch('https://api.tavily.com/search', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${this.config.apiKey}`,
                            },
                            body: JSON.stringify({
                                query,
                                search_type: this.config.searchType,
                                max_results: this.config.maxResults,
                            }),
                        });
                        if (!response.ok) {
                            throw new Error(`Tavily API error: ${response.statusText}`);
                        }
                        const data = await response.json();
                        const results = data.results.map(result => ({
                            title: result.title,
                            url: result.url,
                            snippet: result.content,
                            source: 'tavily',
                        }));
                        return {
                            success: true,
                            response: (0, utils_1.formatSearchResults)(results),
                        };
                    }
                    catch (error) {
                        return (0, utils_1.handleApiError)(error);
                    }
                },
            },
        ];
        this.config = { ...DEFAULT_CONFIG, ...config };
        (0, utils_1.validateApiKey)(this.config);
    }
}
exports.TavilySearchPlugin = TavilySearchPlugin;

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/plugins/tavily/index.d.ts`:

```ts
import { SearchPlugin, SearchPluginConfig, SearchAction } from '../../common/types';
export interface TavilyPluginConfig extends SearchPluginConfig {
    searchType?: 'search' | 'news' | 'academic';
}
export declare class TavilySearchPlugin implements SearchPlugin {
    name: string;
    description: string;
    config: TavilyPluginConfig;
    private rateLimiter;
    constructor(config: TavilyPluginConfig);
    actions: SearchAction[];
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/common/utils.js`:

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRateLimiter = exports.formatSearchResults = exports.handleApiError = exports.validateSearchQuery = exports.validateApiKey = exports.ApiError = void 0;
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ApiError';
    }
}
exports.ApiError = ApiError;
const validateApiKey = (config) => {
    if (!config.apiKey) {
        throw new ApiError('API key is required');
    }
};
exports.validateApiKey = validateApiKey;
const validateSearchQuery = (content) => {
    const query = typeof content === 'string' ? content : content.text;
    if (!query?.trim()) {
        throw new ApiError('Search query is required');
    }
    return query.trim();
};
exports.validateSearchQuery = validateSearchQuery;
const handleApiError = (error) => {
    if (error instanceof ApiError) {
        return {
            success: false,
            response: `API Error: ${error.message}`,
        };
    }
    return {
        success: false,
        response: 'An unexpected error occurred',
    };
};
exports.handleApiError = handleApiError;
const formatSearchResults = (results) => {
    return results
        .map((result, index) => {
        return `${index + 1}. ${result.title}\n   ${result.url}\n   ${result.snippet}\n`;
    })
        .join('\n');
};
exports.formatSearchResults = formatSearchResults;
const createRateLimiter = (maxRequests, timeWindow) => {
    const requests = [];
    return {
        checkLimit: () => {
            const now = Date.now();
            const windowStart = now - timeWindow;
            // Remove old requests
            while (requests.length > 0 && requests[0] < windowStart) {
                requests.shift();
            }
            // Check if we're at the limit
            if (requests.length >= maxRequests) {
                return false;
            }
            // Add new request
            requests.push(now);
            return true;
        }
    };
};
exports.createRateLimiter = createRateLimiter;

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/common/types.js`:

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/common/utils.d.ts`:

```ts
import { Content } from '@ai16z/eliza';
import { SearchPluginConfig, SearchResult } from './types';
export declare class ApiError extends Error {
    statusCode?: number | undefined;
    constructor(message: string, statusCode?: number | undefined);
}
export declare const validateApiKey: (config: SearchPluginConfig) => void;
export declare const validateSearchQuery: (content: Content) => string;
export declare const handleApiError: (error: unknown) => {
    success: false;
    response: string;
};
export declare const formatSearchResults: (results: SearchResult[]) => string;
export declare const createRateLimiter: (maxRequests: number, timeWindow: number) => {
    checkLimit: () => boolean;
};

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/common/types.d.ts`:

```ts
import { Plugin, Action, ActionExample, Handler, Validator } from '@ai16z/eliza';
export interface SearchResult {
    title: string;
    url: string;
    snippet: string;
    score?: number;
    source: 'tavily' | 'exa';
    metadata?: Record<string, unknown>;
}
export interface SearchOptions {
    maxResults?: number;
    searchType?: string;
    filters?: Record<string, unknown>;
}
export interface SearchProvider {
    search(query: string, options?: SearchOptions): Promise<SearchResult[]>;
}
export interface SearchPluginConfig {
    apiKey: string;
    maxResults?: number;
    searchType?: string;
    filters?: Record<string, unknown>;
}
export interface SearchAction extends Action {
    name: string;
    description: string;
    examples: ActionExample[][];
    similes: string[];
    handler: Handler;
    validate: Validator;
}
export interface SearchPlugin extends Plugin {
    name: string;
    description: string;
    actions: SearchAction[];
    config: SearchPluginConfig;
}

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/index.js`:

```js
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./common/types"), exports);
__exportStar(require("./common/utils"), exports);
__exportStar(require("./plugins/tavily"), exports);
__exportStar(require("./plugins/exa"), exports);

```

`/home/anon/repos/eliza/eliza-plugin-starter/dist/index.d.ts`:

```ts
export * from './common/types';
export * from './common/utils';
export * from './plugins/tavily';
export * from './plugins/exa';

```

`/home/anon/repos/eliza/eliza-plugin-starter/IMPLEMENTATION_PLAN.md`:

```md
# Implementation Plan for Eliza Search Plugins

## Minimal Core Components

### 1. Base Types and Interfaces
```typescript
// src/common/types.ts
interface SearchResult {
  title: string;
  url: string;
  snippet: string;
  score?: number;
  source: 'tavily' | 'exa';
  metadata?: Record<string, unknown>;
}

interface SearchOptions {
  maxResults?: number;
  searchType?: string;
  filters?: Record<string, unknown>;
}

interface SearchProvider {
  search(query: string, options?: SearchOptions): Promise<SearchResult[]>;
}
```

### 2. Common Utilities
```typescript
// src/common/utils.ts
- API key validation
- Rate limiting helpers
- Error handling utilities
- Response formatting
```

## Plugin Templates

### 1. Tavily Search Plugin
```typescript
// src/plugins/tavily/index.ts
- API integration with Tavily
- Web search implementation
- News search implementation
- Academic search implementation
```

Configuration:
```typescript
interface TavilyConfig {
  apiKey: string;
  maxResults?: number;
  searchType?: 'search' | 'news' | 'academic';
}
```

### 2. Exa Search Plugin
```typescript
// src/plugins/exa/index.ts
- API integration with Exa
- Semantic search implementation
- Code search implementation
- Document search implementation
```

Configuration:
```typescript
interface ExaConfig {
  apiKey: string;
  maxResults?: number;
  searchType?: 'semantic' | 'code' | 'document';
  filters?: {
    language?: string;
    fileType?: string;
  };
}
```

## Implementation Steps

1. Core Components:
   - Implement base types and interfaces
   - Create utility functions
   - Set up error handling

2. Tavily Plugin:
   - Implement API client
   - Create search actions
   - Add result processing
   - Implement caching (optional)

3. Exa Plugin:
   - Implement API client
   - Create search actions
   - Add specialized search types
   - Implement filtering

4. Testing:
   - Unit tests for core components
   - Integration tests for each plugin
   - Example usage scenarios

## Configuration Management

1. Environment Variables:
```env
TAVILY_API_KEY=your_tavily_key
EXA_API_KEY=your_exa_key
```

2. Plugin Configuration:
```typescript
// Example configuration
const config = {
  tavily: {
    apiKey: process.env.TAVILY_API_KEY,
    maxResults: 10,
    searchType: 'search'
  },
  exa: {
    apiKey: process.env.EXA_API_KEY,
    maxResults: 10,
    searchType: 'semantic'
  }
};
```

## Example Usage

```typescript
// Example agent configuration
const agent = new ElizaAgent({
  plugins: [
    new TavilySearchPlugin(config.tavily),
    new ExaSearchPlugin(config.exa)
  ]
});
```

## Documentation Requirements

1. README.md:
   - Installation instructions
   - Basic usage examples
   - Configuration guide

2. Plugin-specific docs:
   - API reference
   - Configuration options
   - Example queries

3. Contributing guide:
   - Development setup
   - Testing instructions
   - PR guidelines

```