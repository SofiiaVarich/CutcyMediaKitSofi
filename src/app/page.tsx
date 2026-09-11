import { ScrollProgress } from '@/src/components/ScrollProgress';
import { VisitorCounter } from '@/src/components/VisitorCounter';
import { Footer } from '@/src/components/Footer';
import { Cover } from '@/src/sections/Cover';
import { Intro } from '@/src/sections/Intro';
import { Founder } from '@/src/sections/Founder';
import { Audience } from '@/src/sections/Audience';
import { Numbers } from '@/src/sections/Numbers';
import { ContentPillars } from '@/src/sections/ContentPillars';
import { Creator } from '@/src/sections/Creator';
import { BrandStory } from '@/src/sections/BrandStory';
import { GlobalCommunity } from '@/src/sections/GlobalCommunity';
import { Collaboration } from '@/src/sections/Collaboration';
import { Impact } from '@/src/sections/Impact';
import { Contact } from '@/src/sections/Contact';
import { Challenges } from '@/src/sections/Challenges';
import { YouTube } from '@/src/sections/YouTube';
export default function Page() { return <><ScrollProgress /><main><Cover /><VisitorCounter /><Intro /><Founder /><Audience /><Numbers /><ContentPillars /><Challenges /><YouTube /><Creator /><BrandStory /><GlobalCommunity /><Collaboration /><Impact /><Contact /></main><Footer /></>; }
