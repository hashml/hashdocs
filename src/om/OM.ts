import { DocumentOM } from "./DocumentOM";
import { EmphasisOM } from "./EmphasisOM";
import { ParagraphOM } from "./ParagraphOM";
import { RefOM } from "./RefOM";
import { SectionOM } from "./SectionOM";
import { StrongOM } from "./StrongOM";

export type OM = DocumentOM | SectionOM | ParagraphOM | EmphasisOM | StrongOM | RefOM;
