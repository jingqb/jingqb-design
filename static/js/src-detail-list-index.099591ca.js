(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/DetailList/index.less":function(e,t,a){},"./src/DetailList/index.mdx":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n,i=a("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),A=a("react"),l=a.n(A),s=a("./node_modules/@mdx-js/react/dist/esm.js"),r=a("./node_modules/docz/dist/index.esm.js"),d=a("./src/DetailList/index.tsx"),c=(n="DetailListExample",{});function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"detaillist-\u8be6\u60c5\u5217\u8868"},"DetailList \u8be6\u60c5\u5217\u8868"),Object(s.b)("h2",{id:"\u4f7f\u7528\u6570\u636e\u4ee5\u6570\u7ec4\u5f62\u5f0f\u5c55\u793a"},"\u4f7f\u7528\u6570\u636e\u4ee5\u6570\u7ec4\u5f62\u5f0f\u5c55\u793a"),Object(s.b)(r.c,{__position:0,__code:"() => {\n  const DetailListExample = () => {\n    const data = [\n      {\n        id: 1,\n        leftText: '\u8ba2\u5355\u7f16\u53f71',\n        orderid: '20190203101243432446',\n        payDate: '2020-01-07 10:12:19',\n        productId: 'ZH00VM',\n        productName: '\u5929\u7391\u805a\u5bcc',\n        tradeMoney: 10000,\n      },\n      {\n        id: 2,\n        leftText: '\u8ba2\u5355\u7f16\u53f72',\n        orderid: '20200107101217452271',\n        payDate: '2020-01-07 10:12:19',\n        productId: 'ZH00VM',\n        productName: '\u5929\u7391\u805a\u5bcc',\n        tradeMoney: 10000,\n      },\n      {\n        id: 3,\n        leftText: '\u8ba2\u5355\u7f16\u53f73',\n        orderid: '20200107101217452271',\n        payDate: '2020-01-07 10:12:19',\n        productId: 'ZH00VM',\n        productName: '\u5929\u7391\u805a\u5bcc',\n        tradeMoney: 10000,\n      },\n    ]\n    return (\n      <div>\n        <DetailList>\n          <DetailList.Header title=\"\u6211\u662f\u6807\u9898\" />\n          <DetailList.Line />\n          <DetailList.Body>\n            {data.map(item => (\n              <DetailList.Item\n                key={item.id}\n                leftText={item.leftText}\n                rightChildren={item.orderid}\n              />\n            ))}\n          </DetailList.Body>\n        </DetailList>\n      </div>\n    )\n  }\n  return <DetailListExample />\n}",__scope:{props:this?this.props:a,Playground:r.c,DetailList:d.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtVHVxoAAGVsKU3XaD04AEchJEIghiKgMiUUkVRsBwAg4CwXCIPYQNJXQ2V5TNdowVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZh4vdqxmDsWBnbSABZDPYAA2Qz2mMiwwGAgAxb1oESbT-GcQ4EQdTAYKEfgliIahKDgUyEUc9YXJoZwICwy52AARks4z5HEySpgAQTmJT2AjKDyBsKB0DDVCOSUsRCujGR2BRBSYG4YBsLkpq4HkLca2AEroHK4IADJBvGRJ5koZo-rKiruFmuUwGQyUBlQdp2AAfg2fqwwjKqrimgbUEy6spBkKs3zMGF1WOGAwDCKAph26rauOvLl2rCxgEe7gatU96a2y9gGKYljzywb0yW6ZSvp-lca0LVApPQaJXAKgBtWG4ZUjHMc4dArhSpyccx2AwAISxsAIbTACLowBVZUANH9AHflFKYr-om9gEKcuG0gAmHSUoATh03mkxSvnucspMJfFyzbJZtm4dMxItSyHmhZ080-Y1gB2VKdMQFLuf1_m5flix-ycUJJXvbSAC0AAkdJ0gA1PUTdN830EtggADlvWS9pAEpNQBE50ALQDABntN35dRDsYD1agYC83XHZ0wm2aUbGeozuGufYbnU_lkmyYp6n6YZ7nI7ZoVObxuVed5vmdK10WDZSrXLIAVm57mm4ronFeV2hVd5jWUu13X9cNgXe5xj2vetuV7cdl3p8x2fJV9o9tOD8OV7h6PMDj51E9F5P85x9PWcx37TYsHOkzPonC_JrBKblWnGaTXeayrjIc_aOvHaiybmLVuHcu49wfjPeCA9_YAJHmPUWE8jZfzNkIT2Vsa7tEXs7V2kDV5oK9hvf228I54L3pkA-8dj7JxTlnVCeCAC6GcugED6OYKMl84YxlkHQhMQNSLkW6jfWs_DmLkRwHbcUU5xgvFgHwEAgBEI0APRmgBwC0ABkZ_B2Cbl4TWRgoiQY4DIs6LRQib56KIgIlEOBrxOESKY4RrVkY4CiDMCMLwYCym-s9YRONzGMUsQQHATYPE6LZtsBOLV3FEBwFwI6PjH43SLi_SJtBolPwpnE-JmN-gpEIPYUqB0UkeJwD_fo6BMlZJMaEmsHIOQVLMfRCxYirE2PQHYnRUh9GCLoSdWMGc3znwxiwthIimkgzPGDX8VS_ryEyVIV6Z0zBfhADROiXTWLsVwFxLAgFdAgQMGBPCV0jAhDsAJCiGFTSKhVKgI59oTn-CCpQGYlgxrwCEnKc2MxzTyXmHAP0jwsz4R6HBOAcBUB-zsEaYS5BQXgshX6W0V0qJsXDLgLE_ybkXSwMCtAtABC3X8qI6CA47DX3YOkl-a0rgomnCkG5Fgcl5IKWGalDVUQFHYAAH3YN7QEDLfBSIyJYWRMA2W0oKAKvwcBJExzLOwLwlBySoAFTEAgsAaUcpnAK_aYYrhIhuUdMwANZXSKhl8-4gMmkkueXAKqXjyXDIEOYbhIL_BwCIfI9ZFpNhyvEMAC1nFRXyF6bIQ1WKJLUCkq05I5rSVXGJaS-1NVXWwvdZ6_g3rzReDaf6wNuq6Ahp3GGrKUapjBM8YVC1CbrVJqehwhM9U01gozSALNObEjmiieIFcqa4WtvbbYrtqSAD6I7C55tJTgSlBAi2nV7U2_tfsvVjPItmodUSx1MtECAH6gbt35K2oW0N3UT1mA_KWhGUwjGQ0Ksm2si703LszaulE5ooBoEZCAExEbLr2kwLdUI903VguhC_Og6AzmahwGueOmZyUomiLEa6gH7o2sHMpclFgC1aTlCbeQEaLCIZiOQPsA5Xl_IKlhza006BXHQxR-AOBUCAkJgR8SRHGIkfYKajIBVeMCAFcR5DMaCoxqE1x5DFaCoVok0h0jN6Co3oFZOSMVVqNOpdY-ltz622vp3WIYAExbA4HzSy49xaxACqOkdZZqzGn-OaQQVFahp3wC0BQYC-gGBmAAAJ3Iel0MAFwJIwCqlRD0I7GqwBcxxDFfp_N8QjEFkLCJws4Ei9FmAkgZhvA_eQNzYLEX-lQDgb1WNqw4G9OaOIHMlTsHWFVog5owBQEoNEc0LHnT1fWICrwHMMhXB0gKwFplOwFEQL5zElAPDxAAOKzFSl0IgArBrml9dI6jTXzT0pXGN8yKREA4G5u3Zb7BhsNb-nFC0-QkqTeq3AFbK5rvmhGDACAuTKZeDKtZ9Ya2P3GK29V3bf11KaSOyds7F2VybA-4QfWhket_VmzsRCbQMA1aVUKSb03ZtQEcG1gQNiBuCZXINRArhSZ8eoxYFgkU4KJ0Yh4WAAq4asFsBADw0AXiJxsJ2OgrP_peZoFcfg_BBfYfJPKrwEwJeCrh6_YbK5MmZLWx2ircM1tRI15jbb9LLtQPGxZY7p2PHnaRzjF7t3Li-Ye09y-g0x2Fx1zjKIWBXtcAmIgJMOkACkFuiatfa5TQuAecbbY8KabYcv6kWEdyO7dLvMZu49-gL3Ws_dh8xkH6IiBt1Z73hTc08QPtaXzxnCPUeY_K_WDZ5ZUVtiuDSP-OA1BdnC4OSAcl_AIVHn4KLoC5Q_ilnND-CGIV1j8FYBkfI1B-8NZADpHAS-dIT-rPwco5B-gzG7P6JAC-coNTwrAMD4MT-YDJJQRIuY8icquRaH4xZqighAITfgUQ0Dz_4Jslva-LAb5gHmHDAkggHgHn2o34Hvy_xAAAD0UpbIcAtZl8_8ax-Avkfk3k4BoC4D25EDjsUD_8dA4Ve8wD99-AYDuZjscBbICCF979LRIhsD4C8DV8QBa8zB5A7Nh9cBdBIAUgW829tA9lvMwJVIQBUkyQsh-9-At9xRaBzR6DZgZh-BODZl5AgA",mdxType:"Playground"},(function(){return Object(s.b)((function(){return Object(s.b)("div",null,Object(s.b)(d.a,{mdxType:"DetailList"},Object(s.b)(d.a.Header,{title:"\u6211\u662f\u6807\u9898"}),Object(s.b)(d.a.Line,null),Object(s.b)(d.a.Body,null,[{id:1,leftText:"\u8ba2\u5355\u7f16\u53f71",orderid:"20190203101243432446",payDate:"2020-01-07 10:12:19",productId:"ZH00VM",productName:"\u5929\u7391\u805a\u5bcc",tradeMoney:1e4},{id:2,leftText:"\u8ba2\u5355\u7f16\u53f72",orderid:"20200107101217452271",payDate:"2020-01-07 10:12:19",productId:"ZH00VM",productName:"\u5929\u7391\u805a\u5bcc",tradeMoney:1e4},{id:3,leftText:"\u8ba2\u5355\u7f16\u53f73",orderid:"20200107101217452271",payDate:"2020-01-07 10:12:19",productId:"ZH00VM",productName:"\u5929\u7391\u805a\u5bcc",tradeMoney:1e4}].map((function(e){return Object(s.b)(d.a.Item,{key:e.id,leftText:e.leftText,rightChildren:e.orderid})})))))}),{mdxType:"DetailListExample"})})),Object(s.b)("h2",{id:"\u4f7f\u7528\u6570\u636e\u4ee5\u5bf9\u8c61\u5f62\u5f0f\u5c55\u793a"},"\u4f7f\u7528\u6570\u636e\u4ee5\u5bf9\u8c61\u5f62\u5f0f\u5c55\u793a"),Object(s.b)(r.c,{__position:1,__code:"() => {\n  const DetailListExample = () => {\n    const data = {\n      accountAmount: 5000,\n      accountPay: '2',\n      bankPay: '0',\n      bonusAmount: 5000,\n      bonusStatus: '1',\n      isOfflinePay: '0',\n      ispaid: '1',\n      moneyTo: null,\n      operation: null,\n      orderid: '20200107101217452271',\n      payDate: '2020-01-07 10:12:19',\n      productId: 'ZH00VM',\n      productName: '\u5929\u7391\u805a\u5bcc',\n      tradeDate: '2020-01-07 10:12:11',\n      tradeMoney: 10000,\n      tradeSign: '+',\n      tradeStatus: '01',\n      tradeStatusDesc: '\u786e\u8ba4\u6210\u529f',\n      tradeTypeDesc: '\u7533\u8d2d',\n      tradeWay: '1',\n    }\n    const rightChildren = (\n      <>\n        <div>\u8d26\u6237\u4f59\u989d\u4ed8\u6b3e\uff1a{data.accountAmount} \u5143</div>\n        <div>\u9cb8\u8d1d\u62b5\u6263\uff1a{data.bonusAmount} \u5143</div>\n      </>\n    )\n    return (\n      <div>\n        <DetailList>\n          <DetailList.Header title=\"\u6211\u662f\u6807\u9898\" />\n          <DetailList.Line />\n          <DetailList.Body>\n            <DetailList.Item\n              leftText=\"\u8ba2\u5355\u7f16\u53f7\"\n              rightChildren={data.orderid}\n            />\n            <DetailList.Item\n              leftText=\"\u4ea4\u6613\u65f6\u95f4\"\n              rightChildren={data.payDate}\n            />\n            <DetailList.Item leftText=\"\u7533\u8d2d\" rightChildren={rightChildren} />\n          </DetailList.Body>\n        </DetailList>\n      </div>\n    )\n  }\n  return <DetailListExample />\n}",__scope:{props:this?this.props:a,Playground:r.c,DetailList:d.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKYtVHVxoAAGVsKU3XaD04AEchJEIghiKgMiUUkVRsBwAg4CwXCIPYQNJXQ2V5TNdowVQXQUWOU4sOcAhEixdhuHYYB1iiARnlQK52gABnYJMZh4vdqxmDsWBnbSABZDPYAA2Qz2mMiwwGAgAxb1oESbT-GcQ4EQdTAYKEfgliIahKDgUyEUc9YXJoZwICwy52AARks4z5HEySpgAQTmJT2AjKDyBsKB0DDVCOSUsRCujGR2BRBSYG4YBsLkpq4HkLca2AEroHK4IADJBvGRJ5koZo-rKiruFmuUwGQyUBlQdp2AAfg2fqwwjKqrimgbUEy6spBkKs3zMGF1WOGAwDCKAph26rauOvLl2rCxgEe7gatU96a2y9gGKYljzywb0yW6ZSvp-lca0LVApPQaJXAK364fRkJyCoZCCBysKcauABWHSSacjGawlbGaGg-DtIAJhiv6MY8dxthpry5R0xnyZrLxUDyPG2hoImSZ0smeb5vI5OiPJtJS7mec4OAdTAMAoDQGB2e0rnxfJ2xTK4OWFZ5sLnUSSxKCufmEl1jHKFhaJlqt0Ibdh9GhSnQ25TpnSfZ0lKdIAdgDlK6ZSwPLMJum6eD43ydMxItSyenfZ081_fTwPUp0xBQ9zgBOOOMf7JxQkle9tIALQACRJgA1PUi_Rkv0DLggADlvWS9pAEpNQBE50ALQDABntJu4dRDsYCT2gU599OUsz7Pc7p3P5dt9Hx8wPVqBgDmA9Ftex8yFwIBSLS5QAalHmsN5gaWCFlznV7dw-J7vvJCLgchtMAOw9ABLowAEI0APlKV8LA30sGNSe8Av5ykAMyugBaWJAeMI-MAADqtM5RPyZjWI6PMAb9BSIQewpUDoFSjFguGjBuqK1rKdQAZLGAHYjQAmvKAFyMwAG3KAD5rQAWP-tWRjgSmQtcb4xoGhQAwoonVjM_dGMZZCAA6cwAuLGAFajQAxkbcKRoxHAks4CCxxqI8RshJHbioejN8PMuj3wEOYMh1DpFGJ5owIGpFyK2MVvYoijiUQ4GruKKc4wXiwD4CAQAiEaAHozQA4BaAAyM_g7BNwGKkQ45i5EcBkWdNE5xdj4kgxwNeJwiQ0kuIyYkpsMAiCxJ5rAMABBLDYAIAEwARdGAFVlQAaP6AHflfgpTyb4MIcQsMLU1GuBwB7DIXAcHUPRjE8h-S3EJI8UUkpEzqHlMqdUgJgASuUAMhmgA300AC-pbT5mK06QQIhW06C9N4QnKeMARmjJrOM65FCCkzNoHMu56NFlVKwDU_g8DdkvLhgco500TnAH-d0ugVy7m3LuVIB5BAsk5LyRQ-iUyQYItrDufREyTHo3BRYMxfRzCuMYu40G4NYCpJXPIEZUhXpnTMF-EANE6IwrYuGXAXEsCAV0CBAwYE8JXSMCEOwAkKIYVNIqFUqA-X2gFf4IK9twHzDsEaYSJcZjmnkoqv0jwsz4R6HBOAcBUBdyVZRcg-rDXGr9LaK6VEWVqBwFiOAVrnRYF1WgWgAhbr-XidBAcdg0bsDedUtaVwUTThSBK3FJ8unHNQCGhqqICjsAAD7sHboCSNvhvEZEsH4mA8aw0FEzX4OAXiJ5lnYF4Sg5JUCZpiAQWAobE0zkzftMMVwkQSqOmYAGZafFQ1VfcQGUzfX2zgFVb6Kl1h4osTQtger_BwE7keAJMLzSbHLeIYAg7OJ5vkHosQXaJU9uoFJbJ6BkgDr9VcH1fqJ01WkQug1y7mr8DXV4C9W6d1trBQe49ElT1TFmaQwdN6R13qelYudHAzWLpfau5F5FzQfsSOaF4xTxArkfbB59XcENEumRaFDaGnkAH1SOLK_X6h1N0lkfP3eiox2HzXwbfYhlEyGckkeKeRg54gVI7pBbGhjp1oyMbMB-LKgH2DJMhoVe90Gn1Lrw2xgjINzTq2dFEzc_7Lr2kwLdF2UwcN2GqXQdAQrNQ4DXNvTMAaUSO3INdQz91R2DmUgGiwP6z7tAVvIf9FgHMxCc6qhV8BUYrm81cNzYW4A4FQICMm_nxKBcYsF9gfaMgFUywITNQXYjsHPZewrOS8tpYK8B5SsyyuOZkxrAqsnM2TkjFVTzE5Rz4sUyZ1jIAYVbomLYHA37QWHT_esI6R16WMqRWp8idqOKOs5cBfQDAzAAAEpUPS6GAC4EkYBVSoh6UjjVYDzdwI6v0G2-IRm27thEB2cBHZOzASQMw3jq3IDRg1zqzA4BhVO6sfCiDmjiAIdASp2DrCB-aNWlBojmgS86CH6xtVeDBxkK4OlM3atMp2AoiA1uYkoCzKAABxWYqUuhEEzYNdd2ajhtehxGlcuPzIpEQDgOmhMqfsCx5Dv6cULT5CSgT705o4DU5XIL80IwYDRoIIgLwZVM0jNp5p7ojOxfM7-upTSHOuc875yuTY8vc6GWR39FmOxEJC3QCD6tQoCdE5J44KAQpsno9yyuQaiBXAVKy21iwLBIpwQ5oxDwsBM1w1YLYCAHhoAvA5jYTsdAo__WW8LSHIB-Bp68-SCtXgJi56zab3naeRmq84xegHcNafodlIH9gTOLfFzMvjzn3Pill_5xjaXwvLhrbFxL4vg1yOLJr-TKIWAZdcAmIgJMOkACkLfyaw-iIgRZK-MbQ48KabYxecXsFH6Rg5E-MZT5n-gOfgcl9b_RmvhXBy79j2qeaeIJ8tJP8kTvvfB-KXjbMHkHpSim2FcDSH_DgGoCWz0FAhAADX4CNSPH4CuH4B-GLGqAyHNB_AhhCnWH4FYAyHyGoGQKzx0hwDIJ0lwOrH4HKHIH6BmG7H9CQCzxygajwjJWwLJUwDJEoESFzDyCTTFQtDQL-FLCoIsH4CiDQBIP4HYg0DgHEKz24PM3hAgHgBILa34CEJkJAAAD0UpbIcBA5yDFCJCQBVV1UIEFDmD-B9DCYjDOdTCs8TNED1CbC9C6ZOccBbInCtDNRLRIgdD9DDDjDKDs9qwJsptRDcBdBIAUgICoDtAuUVswJVIQAnkyQshkDUDTRaBzQhC385h-AgDKV5AgA",mdxType:"Playground"},(function(){return Object(s.b)((function(){var e=5e3,t=5e3,a="20200107101217452271",n="2020-01-07 10:12:19",i=Object(s.b)(l.a.Fragment,null,Object(s.b)("div",null,"\u8d26\u6237\u4f59\u989d\u4ed8\u6b3e\uff1a",e," \u5143"),Object(s.b)("div",null,"\u9cb8\u8d1d\u62b5\u6263\uff1a",t," \u5143"));return Object(s.b)("div",null,Object(s.b)(d.a,{mdxType:"DetailList"},Object(s.b)(d.a.Header,{title:"\u6211\u662f\u6807\u9898"}),Object(s.b)(d.a.Line,null),Object(s.b)(d.a.Body,null,Object(s.b)(d.a.Item,{leftText:"\u8ba2\u5355\u7f16\u53f7",rightChildren:a}),Object(s.b)(d.a.Item,{leftText:"\u4ea4\u6613\u65f6\u95f4",rightChildren:n}),Object(s.b)(d.a.Item,{leftText:"\u7533\u8d2d",rightChildren:i}))))}),{mdxType:"DetailListExample"})})),Object(s.b)("h2",{id:"api-detaillistheader"},"API DetailList.Header"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53ef\u9009\u503c"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"title"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u6807\u9898"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-")))),Object(s.b)("h2",{id:"api-detaillistitem"},"API DetailList.Item"),Object(s.b)("table",null,Object(s.b)("thead",{parentName:"table"},Object(s.b)("tr",{parentName:"thead"},Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53ef\u9009\u503c"),Object(s.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"))),Object(s.b)("tbody",{parentName:"table"},Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"leftText"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Item\u4e2d\u5de6\u8fb9\u7684\u6587\u5b57"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"String"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-")),Object(s.b)("tr",{parentName:"tbody"},Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"rightChildren"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Item\u4e2d\u53f3\u8fb9\u7684Node"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Node"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-"),Object(s.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-")))),Object(s.b)("h2",{id:"detaillistline"},"DetailList.Line"),Object(s.b)("p",null,"\u5c55\u793a\u5206\u5272\u7ebf"),Object(s.b)("h2",{id:"detaillistbody"},"DetailList.Body"),Object(s.b)("p",null,"\u5305\u88f9 DetailList.Item"))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/DetailList/index.mdx"}}),b.isMDXComponent=!0},"./src/DetailList/index.tsx":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=a("./node_modules/@babel/runtime/helpers/esm/createClass.js"),A=a("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),l=a("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),s=a("./node_modules/@babel/runtime/helpers/esm/inherits.js"),r=a("react");a("./src/DetailList/index.less");"undefined"!==typeof DetailProps&&DetailProps&&DetailProps===Object(DetailProps)&&Object.isExtensible(DetailProps)&&Object.defineProperty(DetailProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DetailProps",filename:"src/DetailList/index.tsx"}});var d=function(e){function t(){return Object(n.a)(this,t),Object(A.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"DetailList"},this.props.children)}}]),t}(r.Component);d.defaultProps={children:""},d.Header=function(e){return r.createElement("div",{className:"DetailList-header"},e.title)},d.Body=function(e){return r.createElement("div",{className:"DetailList-body"},e.children)},d.Item=function(e){return r.createElement("div",{className:"DetailList-body-item"},r.createElement("div",{className:"DetailList-body-item__left"},e.leftText),r.createElement("div",{className:"DetailList-body-item__right"}," ",e.rightChildren))},d.Line=function(){return r.createElement("div",{className:"DetailList-line"})},"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"_default",filename:"src/DetailList/index.tsx"}})}}]);