export type TechIcon = {
  icon: {
    url: string
    alternativeText: string
  }
  title: string
}

export type Concept = {
  title: string
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type SocialIcon = {
  title: string
  url: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type Author = {
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  role: string
  socialLinks: SocialIcon[]
  description: string
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
    alternativeText: string
  }
}

export type Question = {
  question: string
  answer: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media?: {
    url: string
    alternativeText: string
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Module[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type SectionReviewProps = {
  title: string
  reviews: Review[]
}

export type SectionFAQProps = {
  text: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReview: SectionReviewProps
  sectionFAQ: SectionFAQProps
}
