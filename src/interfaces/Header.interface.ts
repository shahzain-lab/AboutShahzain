import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text'


interface Content{
    title: string
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

interface IHeader{
    contentfulMaintitle : Content
}

export interface IAbout{
    data: IHeader
}
