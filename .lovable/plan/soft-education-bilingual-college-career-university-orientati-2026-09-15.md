# Soft Education Bilingual College — Career & University Orientation Webapp

A multilingual, responsive guidance app ("School Otherwise") that walks a student from their
education system to a shortlist of universities, with full application and visa guidance.

## The student journey

```text
Education system:  French  |  English (GCE)  |  International (OSSD / IB / Cambridge)
        |
        +-- Not yet in final year (Seconde / Lower Sixth / earlier OSSD grade)
        |      -> choose series family (Scientifique, Littéraire, Industrielle... /
        |         Science, Arts, Commercial, Technical)
        |      -> job categories of that family -> job -> recommended series shown
        |
        +-- Final year (Terminale / Upper Sixth / Grade 12)
               -> choose series (A1..A5, AC, C, D, TI, BIL / A1-A8, S1-S4 / IB & Cambridge
                  & OSSD pathways)
               -> job category -> job -> university specialties
               -> where to study: Cameroon | Africa | Outside Africa
               -> budget: Low | Average | High
               -> matching universities
```

Results are filtered by language of instruction: French-education students only see
French-taught or bilingual programmes, English/OSSD students see English-taught ones,
with the guide's exception rule (Germany, Netherlands, Scandinavia reachable after a
language course or via English-taught programmes).

## University cards and Application Guide

Each result card shows institution, country, city, specialty, level (HND, Bachelor's,
Engineering cycle, Medicine...), language, budget tier with indicative yearly cost, and an
"Application Guide" link.

The Application Guide page covers, for a Cameroonian holder of a GCE A-Level, Baccalauréat
or OSSD:
- eligibility and prerequisites (grades, entrance exam/concours, language test)
- document checklist (diplomas, transcripts, translations, birth certificate, passport...)
- step-by-step application procedure with timing
- for institutions abroad: admission letter, pre-registration (Campus France / equivalent),
  proof of funds, accommodation, visa file, appointment, travel and arrival steps

## Languages

English, French, Spanish, German, Arabic, switchable from the header and remembered between
visits. Arabic renders right-to-left. Interface text is translated in all five languages;
university and career data is stored once with translated labels for the parts students read.

## Budget system

Tiers follow the guide: Low / Average / High, with bands defined per location (Cameroon,
Africa, rest of world). Budget is stored per institution *and per programme*, so one
university can be Average for Agriculture and High for Medicine, exactly as the document
requires.

## Data

Content comes from your uploaded guide: series tables for GCE, Baccalauréat, IB, Cambridge
and OSSD; job categories and jobs; university specialties; and the university lists for
Cameroon, Africa and the rest of the world with their budget tiers.

Note: the guide is longer than 50 pages and only the first 50 could be read. I will build the
full structure and load everything from those pages; if there are later pages with more
universities, send them as a separate file and I will add them.

## Technical section

- TanStack Start routes: `/` (landing with school branding), `/orientation` (the wizard,
  state in URL search params so a step is shareable and the back button works),
  `/results`, `/university/$id`, `/university/$id/guide`, `/about`.
- Lovable Cloud database tables: `series`, `job_categories`, `jobs`, `specialties`,
  `institutions`, `programs` (institution + specialty + level + language + budget tier +
  cost), `application_guides`, plus join tables for series→jobs and job→specialty. All
  seeded via migration with literal INSERTs, with grants and read-only public RLS policies.
- Matching query: specialty + region + budget tier + language track → programmes, ordered by
  fit then cost.
- i18n via a lightweight React context + JSON message catalogues per locale; `dir="rtl"`
  applied for Arabic.
- SEO head metadata per route; mobile-first responsive layout.

## Build order

1. Design directions for the visual identity (school colours, "School Otherwise" tone), you pick one.
2. Database schema + seed data from the guide.
3. Wizard flow and results.
4. Application Guide pages.
5. The five languages and RTL.
