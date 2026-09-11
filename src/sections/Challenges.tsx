import { EditorialHeading } from '@/src/components/EditorialHeading';

const challenges = [
  ['A0', 'German Vocabulary A0', 'A free first step with essential words, greetings, numbers, colours, and alphabet practice.'],
  ['A1', 'Everyday German', 'Build confidence with practical vocabulary, short dialogues, signs, family, and daily routines.'],
  ['A2', 'Useful conversations', 'Move from basic phrases to more independent communication in familiar situations.'],
  ['B1', 'German in context', 'Use German through culture, current topics, reading practice, and real-life examples.'],
  ['B2', 'Fluent connections', 'Explore nuanced vocabulary, ideas, and more complex language for confident communication.'],
  ['C1', 'Advanced expression', 'Refine precision, comprehension, and sophisticated German for study and professional contexts.'],
];

export function Challenges() {
  return <section className="section challenges"><EditorialHeading eyebrow="Learn with Konnektoren" title="Challenges for every level." intro="The Challenges area turns German learning into a clear path: choose a level, earn progress, and practise with focused activities." /><div className="challenge-grid">{challenges.map(([level, title, description]) => <article className="challenge-card" key={level}><span className="challenge-level">{level}</span><h3>{title}</h3><p>{description}</p><a href="https://konnektoren.help/challenges/">Explore challenges ↗</a></article>)}</div></section>;
}
