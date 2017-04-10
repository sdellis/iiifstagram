var manifests = [
  {
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "http://wellcomelibrary.org/iiif/b18035723/manifest",
  "@type": "sc:Manifest",
  "label": "Wunder der Vererbung",
  "metadata": [
    {
      "label": "Title",
      "value": "Wunder der Vererbung"
    },
    {
      "label": "Author(s)",
      "value": "Bolle, Fritz"
    },
    {
      "label": "Publication date",
      "value": "[1951]"
    },
    {
      "label": "Attribution",
      "value": "Wellcome Library<br/>License: CC-BY-NC"
    },
    {
      "label": "",
      "value": "<a href='http://search.wellcomelibrary.org/iii/encore/record/C__Rb1803572'>View full catalogue record</a>"
    },
    {
      "label": "Full conditions of use",
      "value": "You have permission to make copies of this work under a <a target=\"_top\" href=\"http://creativecommons.org/licenses/by-nc/4.0/\">Creative Commons, Attribution, Non-commercial license</a>.<br/><br/>Non-commercial use includes private study, academic research, teaching, and other activities that are not primarily intended for, or directed towards, commercial advantage or private monetary compensation. See the <a target=\"_top\" href=\"http://creativecommons.org/licenses/by-nc/4.0/legalcode\">Legal Code</a> for further information.<br/><br/>Image source should be attributed as specified in the full catalogue record. If no source is given the image should be attributed to Wellcome Library."
    }
  ],
  "license": "https://creativecommons.org/licenses/by-nc/4.0/",
  "logo": "http://wellcomelibrary.org/assets/img/squarelogo64.png",
  "related": {
    "@id": "http://wellcomelibrary.org/item/b18035723",
    "format": "text/html"
  },
  "seeAlso": [
    {
      "@id": "http://wellcomelibrary.org/data/b18035723.json",
      "format": "application/json",
      "profile": "http://wellcomelibrary.org/profiles/res"
    },
    {
      "@id": "http://wellcomelibrary.org/resource/schemaorg/b18035723",
      "format": "application/ld+json",
      "profile": "http://iiif.io/community/profiles/discovery/schema"
    },
    {
      "@id": "http://wellcomelibrary.org/resource/dublincore/b18035723",
      "format": "application/ld+json",
      "profile": "http://iiif.io/community/profiles/discovery/dc"
    }
  ],
  "service": [
    {
      "@context": "http://wellcomelibrary.org/ld/iiif-ext/0/context.json",
      "@id": "http://wellcomelibrary.org/iiif/b18035723-0/access-control-hints-service",
      "profile": "http://wellcomelibrary.org/ld/iiif-ext/access-control-hints",
      "accessHint": "open"
    },
    {
      "@context": "http://iiif.io/api/search/0/context.json",
      "@id": "http://wellcomelibrary.org/annoservices/search/b18035723",
      "profile": "http://iiif.io/api/search/0/search",
      "label": "Search within this manifest",
      "service": {
        "@id": "http://wellcomelibrary.org/annoservices/autocomplete/b18035723",
        "profile": "http://iiif.io/api/search/0/autocomplete",
        "label": "Get suggested words in this manifest"
      }
    },
    {
      "@context": "http://universalviewer.io/context.json",
      "@id": "http://wellcomelibrary.org/service/trackingLabels/b18035723",
      "profile": "http://universalviewer.io/tracking-extensions-profile",
      "trackingLabel": "Format: monograph, Institution: n/a, Identifier: b18035723, Digicode: diggenetics, Collection code: n/a"
    }
  ],
  "sequences": [
    {
      "@id": "http://wellcomelibrary.org/iiif/b18035723/sequence/s0",
      "@type": "sc:Sequence",
      "label": "Sequence s0",
      "rendering": [
        {
          "@id": "https://dlcs.io/pdf/wellcome/pdf-item/b18035723/0",
          "format": "application/pdf",
          "label": "Download as PDF"
        },
        {
          "@id": "http://wellcomelibrary.org/service/fulltext/b18035723/0?raw=true",
          "format": "text/plain",
          "label": "Download raw text"
        }
      ],
      "viewingHint": "paged",
      "canvases": [
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c0",
          "@type": "sc:Canvas",
          "label": " - ",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/ff2085d5-a9c7-412e-9dbe-dda87712228d/full/73,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/ff2085d5-a9c7-412e-9dbe-dda87712228d",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 742,
              "sizes": [
                {
                  "width": 73,
                  "height": 100
                },
                {
                  "width": 145,
                  "height": 200
                },
                {
                  "width": 290,
                  "height": 400
                },
                {
                  "width": 742,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=0",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3543,
          "width": 2569,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/ff2085d5-a9c7-412e-9dbe-dda87712228d",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/ff2085d5-a9c7-412e-9dbe-dda87712228d/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 742,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/ff2085d5-a9c7-412e-9dbe-dda87712228d",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c0"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/0",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c2",
          "@type": "sc:Canvas",
          "label": " - ",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/f327de6b-06ef-47ec-b98f-ee79c1685393/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/f327de6b-06ef-47ec-b98f-ee79c1685393",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=2",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/f327de6b-06ef-47ec-b98f-ee79c1685393",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/f327de6b-06ef-47ec-b98f-ee79c1685393/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/f327de6b-06ef-47ec-b98f-ee79c1685393",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c2"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/2",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c3",
          "@type": "sc:Canvas",
          "label": " - ",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/61ea4035-6dde-4a4a-9ed2-74bf36d32d4c/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/61ea4035-6dde-4a4a-9ed2-74bf36d32d4c",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=3",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/61ea4035-6dde-4a4a-9ed2-74bf36d32d4c",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/61ea4035-6dde-4a4a-9ed2-74bf36d32d4c/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/61ea4035-6dde-4a4a-9ed2-74bf36d32d4c",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c3"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/3",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c4",
          "@type": "sc:Canvas",
          "label": "2",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/4ff70079-fac3-4259-814e-021f7dcf43b6/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/4ff70079-fac3-4259-814e-021f7dcf43b6",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=4",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/4ff70079-fac3-4259-814e-021f7dcf43b6",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/4ff70079-fac3-4259-814e-021f7dcf43b6/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/4ff70079-fac3-4259-814e-021f7dcf43b6",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c4"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/4",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c5",
          "@type": "sc:Canvas",
          "label": "3",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/23a8a648-ad8a-4384-8f42-75c1aa5f87ac/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/23a8a648-ad8a-4384-8f42-75c1aa5f87ac",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=5",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/23a8a648-ad8a-4384-8f42-75c1aa5f87ac",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/23a8a648-ad8a-4384-8f42-75c1aa5f87ac/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/23a8a648-ad8a-4384-8f42-75c1aa5f87ac",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c5"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/5",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c6",
          "@type": "sc:Canvas",
          "label": "4",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/fea48aa8-0b2c-45c7-a2c0-c204fe693715/full/73,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/fea48aa8-0b2c-45c7-a2c0-c204fe693715",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 752,
              "sizes": [
                {
                  "width": 73,
                  "height": 100
                },
                {
                  "width": 147,
                  "height": 200
                },
                {
                  "width": 294,
                  "height": 400
                },
                {
                  "width": 752,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=6",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 2736,
          "width": 2008,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/fea48aa8-0b2c-45c7-a2c0-c204fe693715",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/fea48aa8-0b2c-45c7-a2c0-c204fe693715/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 752,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/fea48aa8-0b2c-45c7-a2c0-c204fe693715",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c6"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/6",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c7",
          "@type": "sc:Canvas",
          "label": "5",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/3764dc69-d22e-4f33-8927-4bd232fc5aae/full/73,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/3764dc69-d22e-4f33-8927-4bd232fc5aae",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 750,
              "sizes": [
                {
                  "width": 73,
                  "height": 100
                },
                {
                  "width": 147,
                  "height": 200
                },
                {
                  "width": 293,
                  "height": 400
                },
                {
                  "width": 750,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=7",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 2740,
          "width": 2008,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/3764dc69-d22e-4f33-8927-4bd232fc5aae",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/3764dc69-d22e-4f33-8927-4bd232fc5aae/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 750,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/3764dc69-d22e-4f33-8927-4bd232fc5aae",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c7"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/7",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c8",
          "@type": "sc:Canvas",
          "label": "6",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/f14952cd-cba1-4f95-a9cc-481c83f46781/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/f14952cd-cba1-4f95-a9cc-481c83f46781",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=8",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/f14952cd-cba1-4f95-a9cc-481c83f46781",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/f14952cd-cba1-4f95-a9cc-481c83f46781/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/f14952cd-cba1-4f95-a9cc-481c83f46781",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c8"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/8",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c9",
          "@type": "sc:Canvas",
          "label": "7",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/7d40ab21-1a68-4bb2-85a5-555e2e4bafd9/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/7d40ab21-1a68-4bb2-85a5-555e2e4bafd9",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=9",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/7d40ab21-1a68-4bb2-85a5-555e2e4bafd9",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/7d40ab21-1a68-4bb2-85a5-555e2e4bafd9/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/7d40ab21-1a68-4bb2-85a5-555e2e4bafd9",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c9"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/9",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c10",
          "@type": "sc:Canvas",
          "label": "8",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/6c655c58-867d-41ff-bf26-d97232fdca4f/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/6c655c58-867d-41ff-bf26-d97232fdca4f",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=10",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/6c655c58-867d-41ff-bf26-d97232fdca4f",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/6c655c58-867d-41ff-bf26-d97232fdca4f/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/6c655c58-867d-41ff-bf26-d97232fdca4f",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c10"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/10",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c11",
          "@type": "sc:Canvas",
          "label": "9",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/03b29f62-7ff3-4662-ad0d-417c78d3cc97/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/03b29f62-7ff3-4662-ad0d-417c78d3cc97",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=11",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/03b29f62-7ff3-4662-ad0d-417c78d3cc97",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/03b29f62-7ff3-4662-ad0d-417c78d3cc97/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/03b29f62-7ff3-4662-ad0d-417c78d3cc97",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c11"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/11",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c12",
          "@type": "sc:Canvas",
          "label": "10",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/5e278251-6b5e-4731-98c8-47c96c02e713/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/5e278251-6b5e-4731-98c8-47c96c02e713",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=12",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/5e278251-6b5e-4731-98c8-47c96c02e713",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/5e278251-6b5e-4731-98c8-47c96c02e713/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/5e278251-6b5e-4731-98c8-47c96c02e713",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c12"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/12",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c13",
          "@type": "sc:Canvas",
          "label": "11",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/5faa4bdc-b909-4f92-a243-ff1f2afffaf7/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/5faa4bdc-b909-4f92-a243-ff1f2afffaf7",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=13",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/5faa4bdc-b909-4f92-a243-ff1f2afffaf7",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/5faa4bdc-b909-4f92-a243-ff1f2afffaf7/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/5faa4bdc-b909-4f92-a243-ff1f2afffaf7",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c13"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/13",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c14",
          "@type": "sc:Canvas",
          "label": "12",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/482f0a30-aaeb-4051-99e0-126f9a937b42/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/482f0a30-aaeb-4051-99e0-126f9a937b42",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=14",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/482f0a30-aaeb-4051-99e0-126f9a937b42",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/482f0a30-aaeb-4051-99e0-126f9a937b42/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/482f0a30-aaeb-4051-99e0-126f9a937b42",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c14"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/14",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c15",
          "@type": "sc:Canvas",
          "label": "13",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/97c9ee9e-f1e3-4af2-a4dd-97edb0266b66/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/97c9ee9e-f1e3-4af2-a4dd-97edb0266b66",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=15",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/97c9ee9e-f1e3-4af2-a4dd-97edb0266b66",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/97c9ee9e-f1e3-4af2-a4dd-97edb0266b66/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/97c9ee9e-f1e3-4af2-a4dd-97edb0266b66",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c15"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/15",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c16",
          "@type": "sc:Canvas",
          "label": "14",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/e2616033-5268-4b6f-886f-00a5ab48439c/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/e2616033-5268-4b6f-886f-00a5ab48439c",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=16",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/e2616033-5268-4b6f-886f-00a5ab48439c",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/e2616033-5268-4b6f-886f-00a5ab48439c/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/e2616033-5268-4b6f-886f-00a5ab48439c",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c16"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/16",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c17",
          "@type": "sc:Canvas",
          "label": "15",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/87dd138d-55d7-4ef4-8fe3-5eff74e23b98/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/87dd138d-55d7-4ef4-8fe3-5eff74e23b98",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=17",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/87dd138d-55d7-4ef4-8fe3-5eff74e23b98",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/87dd138d-55d7-4ef4-8fe3-5eff74e23b98/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/87dd138d-55d7-4ef4-8fe3-5eff74e23b98",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c17"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/17",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c18",
          "@type": "sc:Canvas",
          "label": "16",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/6f770796-7aeb-46e8-9967-ce1a0ac80a7e/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/6f770796-7aeb-46e8-9967-ce1a0ac80a7e",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=18",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/6f770796-7aeb-46e8-9967-ce1a0ac80a7e",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/6f770796-7aeb-46e8-9967-ce1a0ac80a7e/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/6f770796-7aeb-46e8-9967-ce1a0ac80a7e",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c18"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/18",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c19",
          "@type": "sc:Canvas",
          "label": "17",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/9121a5a1-e5e9-49a7-876c-4d75d2bc71a0/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/9121a5a1-e5e9-49a7-876c-4d75d2bc71a0",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=19",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/9121a5a1-e5e9-49a7-876c-4d75d2bc71a0",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/9121a5a1-e5e9-49a7-876c-4d75d2bc71a0/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/9121a5a1-e5e9-49a7-876c-4d75d2bc71a0",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c19"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/19",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c20",
          "@type": "sc:Canvas",
          "label": "18",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/1f5aa87c-6c14-410e-a6be-5fbcf7e16389/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/1f5aa87c-6c14-410e-a6be-5fbcf7e16389",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=20",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/1f5aa87c-6c14-410e-a6be-5fbcf7e16389",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/1f5aa87c-6c14-410e-a6be-5fbcf7e16389/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/1f5aa87c-6c14-410e-a6be-5fbcf7e16389",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c20"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/20",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c21",
          "@type": "sc:Canvas",
          "label": "19",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/259370cc-952e-4b39-b87b-e60333446103/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/259370cc-952e-4b39-b87b-e60333446103",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=21",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/259370cc-952e-4b39-b87b-e60333446103",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/259370cc-952e-4b39-b87b-e60333446103/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/259370cc-952e-4b39-b87b-e60333446103",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c21"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/21",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c22",
          "@type": "sc:Canvas",
          "label": "20",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/6a0ed051-201b-49b9-8564-cec7bfa1c8fc/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/6a0ed051-201b-49b9-8564-cec7bfa1c8fc",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=22",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/6a0ed051-201b-49b9-8564-cec7bfa1c8fc",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/6a0ed051-201b-49b9-8564-cec7bfa1c8fc/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/6a0ed051-201b-49b9-8564-cec7bfa1c8fc",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c22"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/22",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c23",
          "@type": "sc:Canvas",
          "label": "21",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/26043b0a-2e0c-4ebe-b2ff-ac638c36eb0e/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/26043b0a-2e0c-4ebe-b2ff-ac638c36eb0e",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=23",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/26043b0a-2e0c-4ebe-b2ff-ac638c36eb0e",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/26043b0a-2e0c-4ebe-b2ff-ac638c36eb0e/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/26043b0a-2e0c-4ebe-b2ff-ac638c36eb0e",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c23"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/23",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c24",
          "@type": "sc:Canvas",
          "label": "22",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/831a54a8-fd79-436b-9be4-f2149a982a15/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/831a54a8-fd79-436b-9be4-f2149a982a15",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=24",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/831a54a8-fd79-436b-9be4-f2149a982a15",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/831a54a8-fd79-436b-9be4-f2149a982a15/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/831a54a8-fd79-436b-9be4-f2149a982a15",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c24"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/24",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c25",
          "@type": "sc:Canvas",
          "label": "23",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/5e5e8f4d-7604-4cad-92d0-b10c096fa112/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/5e5e8f4d-7604-4cad-92d0-b10c096fa112",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=25",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/5e5e8f4d-7604-4cad-92d0-b10c096fa112",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/5e5e8f4d-7604-4cad-92d0-b10c096fa112/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/5e5e8f4d-7604-4cad-92d0-b10c096fa112",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c25"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/25",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c26",
          "@type": "sc:Canvas",
          "label": "24",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/b2517db9-7c7f-4004-bd1a-dfc4884ac209/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/b2517db9-7c7f-4004-bd1a-dfc4884ac209",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=26",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/b2517db9-7c7f-4004-bd1a-dfc4884ac209",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/b2517db9-7c7f-4004-bd1a-dfc4884ac209/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/b2517db9-7c7f-4004-bd1a-dfc4884ac209",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c26"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/26",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c27",
          "@type": "sc:Canvas",
          "label": "25",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/cb77c73f-3b5f-4d9f-9db4-b947cad9a7b1/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/cb77c73f-3b5f-4d9f-9db4-b947cad9a7b1",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=27",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/cb77c73f-3b5f-4d9f-9db4-b947cad9a7b1",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/cb77c73f-3b5f-4d9f-9db4-b947cad9a7b1/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/cb77c73f-3b5f-4d9f-9db4-b947cad9a7b1",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c27"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/27",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c28",
          "@type": "sc:Canvas",
          "label": "26",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/b2e5ca11-409a-4625-92f7-e8faa90c62dd/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/b2e5ca11-409a-4625-92f7-e8faa90c62dd",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=28",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/b2e5ca11-409a-4625-92f7-e8faa90c62dd",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/b2e5ca11-409a-4625-92f7-e8faa90c62dd/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/b2e5ca11-409a-4625-92f7-e8faa90c62dd",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c28"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/28",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c29",
          "@type": "sc:Canvas",
          "label": "27",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/56455ab2-3eda-4ad8-abf3-b7d1a9914e89/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/56455ab2-3eda-4ad8-abf3-b7d1a9914e89",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=29",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/56455ab2-3eda-4ad8-abf3-b7d1a9914e89",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/56455ab2-3eda-4ad8-abf3-b7d1a9914e89/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/56455ab2-3eda-4ad8-abf3-b7d1a9914e89",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c29"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/29",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c30",
          "@type": "sc:Canvas",
          "label": "28",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/c391acdb-b9c4-421f-b2c9-5a214b371746/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/c391acdb-b9c4-421f-b2c9-5a214b371746",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=30",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/c391acdb-b9c4-421f-b2c9-5a214b371746",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/c391acdb-b9c4-421f-b2c9-5a214b371746/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/c391acdb-b9c4-421f-b2c9-5a214b371746",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c30"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/30",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c31",
          "@type": "sc:Canvas",
          "label": "29",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/782ac260-6793-488c-a9c4-6cd2392f32a0/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/782ac260-6793-488c-a9c4-6cd2392f32a0",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=31",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/782ac260-6793-488c-a9c4-6cd2392f32a0",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/782ac260-6793-488c-a9c4-6cd2392f32a0/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/782ac260-6793-488c-a9c4-6cd2392f32a0",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c31"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/31",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c32",
          "@type": "sc:Canvas",
          "label": "30",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/eead7bff-3157-4cf9-8045-bf16f600b9be/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/eead7bff-3157-4cf9-8045-bf16f600b9be",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=32",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/eead7bff-3157-4cf9-8045-bf16f600b9be",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/eead7bff-3157-4cf9-8045-bf16f600b9be/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/eead7bff-3157-4cf9-8045-bf16f600b9be",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c32"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/32",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c33",
          "@type": "sc:Canvas",
          "label": "31",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/0d8e1790-29d0-44e6-974a-1ec31dad4f8c/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/0d8e1790-29d0-44e6-974a-1ec31dad4f8c",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=33",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/0d8e1790-29d0-44e6-974a-1ec31dad4f8c",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/0d8e1790-29d0-44e6-974a-1ec31dad4f8c/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/0d8e1790-29d0-44e6-974a-1ec31dad4f8c",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c33"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/33",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c34",
          "@type": "sc:Canvas",
          "label": " - ",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/5d4f42de-db46-4fd0-a1a4-db4153c27205/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/5d4f42de-db46-4fd0-a1a4-db4153c27205",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=34",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/5d4f42de-db46-4fd0-a1a4-db4153c27205",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/5d4f42de-db46-4fd0-a1a4-db4153c27205/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/5d4f42de-db46-4fd0-a1a4-db4153c27205",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c34"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/34",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c35",
          "@type": "sc:Canvas",
          "label": " - ",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/b10fa692-b92a-472f-8f22-39dfa7a5534b/full/72,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/b10fa692-b92a-472f-8f22-39dfa7a5534b",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 732,
              "sizes": [
                {
                  "width": 72,
                  "height": 100
                },
                {
                  "width": 143,
                  "height": 200
                },
                {
                  "width": 286,
                  "height": 400
                },
                {
                  "width": 732,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=35",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3372,
          "width": 2411,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/b10fa692-b92a-472f-8f22-39dfa7a5534b",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/b10fa692-b92a-472f-8f22-39dfa7a5534b/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 732,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/b10fa692-b92a-472f-8f22-39dfa7a5534b",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c35"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/35",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        },
        {
          "@id": "http://wellcomelibrary.org/iiif/b18035723/canvas/c1",
          "@type": "sc:Canvas",
          "label": " - ",
          "thumbnail": {
            "@id": "https://dlcs.io/thumbs/wellcome/1/67907d59-3167-41bf-a425-cf5369a84575/full/73,100/0/default.jpg",
            "@type": "dctypes:Image",
            "service": {
              "@context": "http://iiif.io/api/image/2/context.json",
              "@id": "https://dlcs.io/thumbs/wellcome/1/67907d59-3167-41bf-a425-cf5369a84575",
              "protocol": "http://iiif.io/api/image",
              "height": 1024,
              "width": 751,
              "sizes": [
                {
                  "width": 73,
                  "height": 100
                },
                {
                  "width": 147,
                  "height": 200
                },
                {
                  "width": 294,
                  "height": 400
                },
                {
                  "width": 751,
                  "height": 1024
                }
              ],
              "profile": [
                "http://iiif.io/api/image/2/level0.json"
              ]
            }
          },
          "seeAlso": {
            "@id": "http://wellcomelibrary.org/service/alto/b18035723/0?image=1",
            "format": "text/xml",
            "profile": "http://www.loc.gov/standards/alto/v3/alto.xsd",
            "label": "METS-ALTO XML"
          },
          "height": 3040,
          "width": 2231,
          "images": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/imageanno/67907d59-3167-41bf-a425-cf5369a84575",
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "resource": {
                "@id": "https://dlcs.io/iiif-img/wellcome/1/67907d59-3167-41bf-a425-cf5369a84575/full/!1024,1024/0/default.jpg",
                "@type": "dctypes:Image",
                "format": "image/jpeg",
                "height": 1024,
                "width": 751,
                "service": {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id": "https://dlcs.io/iiif-img/wellcome/1/67907d59-3167-41bf-a425-cf5369a84575",
                  "profile": "http://iiif.io/api/image/2/level1.json"
                }
              },
              "on": "http://wellcomelibrary.org/iiif/b18035723/canvas/c1"
            }
          ],
          "otherContent": [
            {
              "@id": "http://wellcomelibrary.org/iiif/b18035723/contentAsText/1",
              "@type": "sc:AnnotationList",
              "label": "Text of this page"
            }
          ]
        }
      ]
    }
  ],
  "structures": [
    {
      "@id": "http://wellcomelibrary.org/iiif/b18035723/range/r-0",
      "@type": "sc:Range",
      "label": "Front Cover",
      "canvases": [
        "http://wellcomelibrary.org/iiif/b18035723/canvas/c0"
      ]
    },
    {
      "@id": "http://wellcomelibrary.org/iiif/b18035723/range/r-2",
      "@type": "sc:Range",
      "label": "Title Page",
      "canvases": [
        "http://wellcomelibrary.org/iiif/b18035723/canvas/c3"
      ]
    },
    {
      "@id": "http://wellcomelibrary.org/iiif/b18035723/range/r-1",
      "@type": "sc:Range",
      "label": "Back Cover",
      "canvases": [
        "http://wellcomelibrary.org/iiif/b18035723/canvas/c1"
      ]
    }
  ]
}
];

export default manifests;
