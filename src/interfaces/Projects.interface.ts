
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from 'gatsby-source-contentful/rich-text'
import { IGatsbyImageData } from 'gatsby-plugin-image';

interface IImage {
    gatsbyImageData: IGatsbyImageData
}
interface ProjectNode {
    id: number
    title: string
    techName: string
    description: RenderRichTextData<ContentfulRichTextGatsbyReference>
    githubUrl: string
    url: string
    image: IImage
}
export interface IProject {
    node: ProjectNode
}
