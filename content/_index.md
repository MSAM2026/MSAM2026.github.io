---
title: "From Molecules to Cells: Multiscale Simulation and AI-Driven Modeling for Biomolecular Systems (MSAM)"
description: "May 28-30, 2026 | RIKEN — Kobe, Japan"
featured_image: "/images/header.jpg"
---

## Overview

Understanding the essence of life requires an integrated approach that spans the vast spatiotemporal scales from atoms and molecules to entire cells. This workshop aims to establish the foundational methodology for "AI-driven multiscale simulation" that harnesses recent advances in AI technology to bridge simulations across different hierarchical levels.

Through this workshop, we seek to create a new research paradigm for achieving a truly integrated understanding of life phenomena from molecules to cells, establishing "AI-driven Multiscale Life Science".

### Key Topics

- AI-driven molecular dynamics simulations
- Multiscale modeling: from molecules to cells
- Integrative modeling with experimental data
- Protein design and engineering with AI
- QM/MM methods and applications

---

## Registration

Registration is now closed. Both on-site and Zoom (online) registration have reached their deadlines. Zoom connection details will be shared with registered participants before the workshop.

---

## Venue

**8th Floor, Integrated Innovation Building (IIB), RIKEN**

6-7-1 Minatojima-minamimachi, Chuo-ku, Kobe 650-0047, Japan

The nearest station is **Iryo Center (Medical Center)** on the Port Liner. From the station, follow the 2F pedestrian deck directly to the IIB building and enter through the 2F entrance (there is no 1F entrance).

- [Access to RIKEN Kobe Campus](https://www.kobe.riken.jp/en/access/) (airports, Shinkansen, etc.)
- [IIB Building Location](https://www.kobe.riken.jp/en/access/east/)

This workshop is a **hybrid event**. All talks will be streamed via Zoom for remote participants. The Zoom link will be shared with registered participants before the workshop.

**Lunch information:** There are limited dining options near the venue. Lunch boxes will be provided for invited speakers. Other participants are encouraged to bring lunch or use nearby convenience stores. Please refer to the [nearby restaurant & convenience store map (PDF)](/files/restaurant_map.pdf) for available options around the venue.

---

## Program

Each talk: 25 min presentation + 5 min Q&A = 30 min

Click on a talk title (▶) to view the abstract

### Day 1: May 28, 2026 (Thu)

<div class="program-day">
<div class="program-break">08:30 – 08:55 Registration (2F, IIB)</div>
<div class="program-break">08:55 – 09:00 Opening Remarks — Yuji Sugita (RIKEN / University of Tokyo)</div>
<div class="session-title">Session 1: AI/ML for Molecular Dynamics — Sampling, Kinetics & Transitions <span class="session-chair">(Chair: Yasuhiro Matsunaga)</span></div>
<div class="program-talk"><span class="talk-time">09:00 – 09:30</span> <span class="talk-speaker">Pratyush Tiwary</span> <span class="talk-affiliation">(University of Maryland)</span>
<details class="talk-details"><summary>Efficient, explainable and extrapolative AI for biophysics</summary>
<div class="talk-abstract">AI is now everywhere in chemistry, from structure prediction to molecule generation to automated synthesis. The excitement is real, but so is the unease about what is genuinely predictive and what is closer to impressive memorization. In this talk I will take a statistical physicist's perspective and use examples from my group's work to argue for cautious, but clear, enthusiasm for AI in chemistry and allied fields. I will show how we combine generative AI with statistical mechanics to learn Boltzmann weighted ensembles from limited training data, and then extrapolate across temperature, pressure, and other thermodynamic conditions reducing the need for explicit, expensive simulations or experiments. I will highlight the breadth of these methods through applications that include prediction of protein and RNA structural ensembles, and conformation selective drug discovery efforts aimed at Alzheimer's disease and hypertension.</div>
</details></div>
<div class="program-talk"><span class="talk-time">09:30 – 10:00</span> <span class="talk-speaker">Xuhui Huang</span> <span class="talk-affiliation">(University of Wisconsin-Madison)</span><br><span class="talk-title">Machine Learning Models for Non-Markovian Protein Dynamics</span></div>
<div class="program-talk"><span class="talk-time">10:00 – 10:30</span> <span class="talk-speaker">Chris Chipot</span> <span class="talk-affiliation">(CNRS)</span>
<details class="talk-details"><summary>From Atoms to Pathways: A Machine Learning Perspective on Molecular Transitions</summary>
<div class="talk-abstract">Understanding rare events in complex molecular systems requires identifying transition pathways that are both physically meaningful and committor-consistent. I will introduce a neural-network-based framework that simultaneously learns the committor function and the associated committor-consistent transition pathways, providing a unified, data-driven perspective on molecular transformations. The method, rooted in the committor time-correlation function, operates beyond the overdamped diffusive limit and distinguishes multiple competing mechanisms. Next, leveraging geometric graph neural networks built on vector perceptrons, I will show how the committor can be learned directly from atomic coordinates—bypassing the need for predefined collective variables—and yields atom-level interpretability by pinpointing the key atomic contributors to the transition. Last, I will present an iterative refinement between biased sampling and committor learning to identify dominant transition channels, enhance sampling efficiency, and enable accurate estimation of rate constants. Demonstrations on benchmark potentials and molecular systems, from peptide isomerization and folding models to chemical reactions, showcase the robustness, transferability, and ability to uncover physically grounded, of these committor-consistent descriptions of complex molecular processes.</div>
</details></div>
<div class="program-talk"><span class="talk-time">10:30 – 11:00</span> <span class="talk-speaker">Anand Srivastava</span> <span class="talk-affiliation">(Indian Institute of Science)</span>
<details class="talk-details"><summary>Morpheus: Investigating fold switching proteins through the lens of machine learning and statistical thermodynamics</summary>
<div class="talk-abstract">Functionally important metamorphic proteins, which can switch folds between different well-folded conformations, are now thought to be widespread. These protein sequences do not obey the classical folding dogma, and the underlying principles that drive their fold-switching behavior is poorly understood. In my talk, I will present two diverse approaches towards understanding the molecular grammar of fold switchers - one based on machine learning and other on thermodynamics principles.  In the first part, I will present a new fragment-based classification algorithm from my group, named as Morpheus, which can annotate fold-switching proteins from sequence information across proteomes (https://doi.org/10.1093/bioinformatics/btaf635). Since Morpheus server takes in user defined sequences, it can also act a useful screening tool towards the de novo design and engineering of such proteins through further experimentation. However, rationale de novo design of fold switching proteins will require a thorough understanding of the molecular driving forces leading to their conformational propensities. In the second part of my talk, I will discuss our recent unpublished work (https://doi.org/10.1101/2025.10.10.679401) on understanding the thermodynamic design principles that leads to fold-switching behavior in such proteins. As a test case, we considered a recently designed fold-switching protein [John Orban and co-authors, PNAS 2023] that transitions between a 3α fold and α/β fold upon changes in temperature. We performed a detailed thermodynamic analysis on this protein using an advanced and efficient free energy all-atom molecular simulation approach. We find that while 3α fold is stabilized at low temperatures by enthalpic contributions from favorable water-water and protein-water interactions, the transition to the α/β fold at high temperatures is driven by the gain of entropy from the release of ordered water molecules surrounding the 3α conformer into the bulk. Our study elucidates the importance of thinking in terms of entropy-based design in natural systems and provides a  integrated machine learning and physics-based framework that can help in the design and engineering of future synthetic and functional metamorphic proteins.</div>
</details></div>
<div class="program-break">11:00 – 11:20 Coffee Break</div>
<div class="session-title">Session 2: Protein Design, Engineering & Drug Discovery <span class="session-chair">(Chair: Kei-ichi Okazaki)</span></div>
<div class="program-talk"><span class="talk-time">11:20 – 11:50</span> <span class="talk-speaker">Juyong Lee</span> <span class="talk-affiliation">(Seoul National University)</span>
<details class="talk-details"><summary>Integrating AI and Physics-Based Biomolecular Modeling for Multi-Modality Drug Discovery</summary>
<div class="talk-abstract">The integration of artificial intelligence (AI) and molecular dynamics (MD) simulations is rapidly transforming the drug discovery process. Recent advancements demonstrate that state-of-the-art computational techniques are accelerating the discovery of drug candidates across various modalities, including small molecules, peptides, and antibodies. This presentation will explore recent progress in generative biomolecular modeling AI models applied to drug screening and candidate generation, with several case studies illustrating their practical applications. First, the new generative AI methods for protein design, protein sequence generation methods. The new methods show superior performance to existing inverse folding methods, especially for antibody CDR loop generation. Second, we will discuss the development of novel peptides for GLP1R activation, which is a target for treating obesity. Lastly, we will discuss the development of a novel artificial antigen-based RSV vaccine candidate using protein generative models. In all three cases, the success rate for identifying novel candidates was significantly higher compared to traditional high-throughput screening approaches, underscoring the practical advantages of AI-driven strategies in modern drug discovery.</div>
</details></div>
<div class="program-talk"><span class="talk-time">11:50 – 12:20</span> <span class="talk-speaker">Takahiro Kosugi</span> <span class="talk-affiliation">(Kanazawa University)</span>
<details class="talk-details"><summary>Computational Protein Design for Rational Control of ATPases</summary>
<div class="talk-abstract">ATP hydrolysis plays key roles in the functions of numerous proteins, including molecular motors and kinases. Therefore, the ability to control ATP hydrolysis and the resulting ATPase-dependent functions would not only deepen our understanding of biological systems but also enable their targeted manipulation. Recent advances in computational protein design have been substantial, and we recently achieved the de novo design of an ATPase (T. Kosugi, et al. Protein Sci. 2025). Building on this technology, we also introduced artificial allosteric sites into a rotary molecular motor, resulting in enhanced rotational speed (T. Kosugi, et al. Nat. Chem. 2023).</div>
</details></div>
<div class="program-talk"><span class="talk-time">12:20 – 12:50</span> <span class="talk-speaker">Jonathan Essex</span> <span class="talk-affiliation">(University of Southampton)</span><br><span class="talk-title">Engineering antibody structure and function by multiscale simulations</span></div>
<div class="program-break">12:50 – 14:10 Lunch</div>
<div class="session-title">Session 3: Membrane Proteins, Ion Channels & Molecular Machines <span class="session-chair">(Chair: Takahiro Kosugi)</span></div>
<div class="program-talk"><span class="talk-time">14:10 – 14:40</span> <span class="talk-speaker">Syma Khalid</span> <span class="talk-affiliation">(University of Oxford)</span>
<details class="talk-details"><summary>Multiscale simulations of the E. coli outer membrane</summary>
<div class="talk-abstract">The outer membrane of E. coli a proteolipid bilayer - new details of its spatial organisation are emerging from molecular imaging, chemical biology and molecular simulations. 

We use multiscale molecular dynamics simulations to explore these details at a resolution that is not available to experimental methods. A largest, coarse-grained simulations are composed of over 10 million particles. Fine grained resolution is added with  smaller simulations at all atom resolution. We also explore the impact of antimicrobial agents on these membranes.</div>
</details></div>
<div class="program-talk"><span class="talk-time">14:40 – 15:10</span> <span class="talk-speaker">Yi Wang</span> <span class="talk-affiliation">(Chinese University of Hong Kong)</span>
<details class="talk-details"><summary>Structure of the Transmembrane Channel from the Vacuolating Toxin of Helicobacter pylori</summary>
<div class="talk-abstract">Helicobacter pylori (H. pylori) is a bacterial pathogen that infects half of the global population. VacA, a major H. pylori virulence factor, forms an anion-selective, hexameric channel in host cell membranes. No atomic detail of VacA's transmembrane (TM) channel has been revealed by experimental methods, while its structural prediction continues to challenge even state-of-the-art deep learning models. In this talk, I will discuss our recent study using a hierarchical workflow that employs atomistic MD simulations to model the VacA TM channel. Apart from validating our model by nine in silico mutations, we verify its selectivity for chloride over sodium ions and identify the role of VacA's non-transmembrane segment in stabilizing its TM channel. Combining simulations with liposome assays, we further demonstrate a previously uncharacterized feature of VacA, namely, its capacity to leak protons.</div>
</details></div>
<div class="program-talk"><span class="talk-time">15:10 – 15:40</span> <span class="talk-speaker">Kei-ichi Okazaki</span> <span class="talk-affiliation">(Institute for Molecular Science)</span>
<details class="talk-details"><summary>Integration of AlphaFold with Molecular Dynamics for Efficient Simulation and Control of Biomolecular Machines</summary>
<div class="talk-abstract">Biomolecular machines, such as motor and transporter proteins, change conformations when they function. First, I will introduce our approach, AF3-ReD, for predicting conformational changes by applying metadynamics-like biasing potentials to the diffusion generative model in AlphaFold3. Second, I will present AlphaFold-facilitated Markov state modeling, in which Markov state models are constructed from molecular dynamics data initiated from AlphaFold structures to analyze the transition pathway and free energy of a redox-driven transporter protein. Third, I will present our attempt to redesign the inhibitory peptide for FoF1 ATP synthase by constructing a machine learning model that incorporates the AI-predicted sequence variations and the peptide's predicted helical propensity.</div>
</details></div>
<div class="program-talk"><span class="talk-time">15:40 – 16:10</span> <span class="talk-speaker">Jejoong Yoo</span> <span class="talk-affiliation">(KIAS)</span>
<details class="talk-details"><summary>Overcoming Biomolecular Modeling Challenges: AI Reconstruction and Accurate Simulation of IDPs and DNA-Binding Proteins</summary>
<div class="talk-abstract">Simulating intrinsically disordered proteins (IDPs) and DNA-binding proteins is challenging because their highly flexible regions are systematically missing from experimental structures. To create complete, simulation-ready models, we introduce PATCHR, an AI-powered diffusion model that accurately inpaints these missing segments. However, even with complete structures, standard molecular dynamics (MD) force fields often overestimate non-bonded attractions, which artificially stalls physical movements during simulations. To resolve this, we present CUFIX-AMBER, an improved force field with carefully calibrated nonbonded and hydrogen bond parameters. Together, this toolkit bridges generative AI and physical simulation to successfully capture the true conformational ensembles of IDPs and the physical diffusion of proteins along DNA.</div>
</details></div>
<div class="program-talk"><span class="talk-time">16:10 – 16:40</span> <span class="talk-speaker">Kei Moritsugu</span> <span class="talk-affiliation">(Osaka Metropolitan University)</span><br><span class="talk-title">Experimental Data-driven Structural Ensemble Construction of Linear Diubiquitin Using Multi-scale Simulation and Deep Generative Modeling</span></div>
<div class="program-break">16:40 – 17:00 Coffee Break</div>
<div class="program-break">17:00 – 18:00 Open Discussion</div>
<div class="program-break program-social">18:00 – 20:00 Banquet + Poster Session I (6F, IIB, buffet style)</div>
</div>

### Day 2: May 29, 2026 (Fri)

<div class="program-day">
<div class="program-break">08:30 – 09:00 Registration (2F, IIB)</div>
<div class="session-title">Session 4: Multiscale Modeling & Coarse-Graining <span class="session-chair">(Chair: Florence Tama)</span></div>
<div class="program-talk"><span class="talk-time">09:00 – 09:30</span> <span class="talk-speaker">Gregory Voth</span> <span class="talk-affiliation">(University of Chicago)</span>
<details class="talk-details"><summary>Ongoing Advances in the Theory and Application of Coarse-graining</summary>
<div class="talk-abstract">Advances in theoretical and computational methodology will be presented that are designed to simulate complex (biomolecular and other soft matter) systems across multiple length and time scales. This bottom-up approach provides a systematic connection between all-atom (AA) molecular dynamics, coarse-grained (CG) modeling, and mesoscopic phenomena. At the heart of these concepts are methods for deriving CG models from molecular structures and their underlying atomic-scale interactions. An important component of our work in the past few years has been the concept of the "ultra-coarse-grained" (UCG) model and its associated computational implementation. In the UCG approach, the CG sites or "beads" can have internal states, much like quantum mechanical states, so the UCG model involves a conceptual abstraction beyond simply Newtonian or Langevin dynamics for the CG beads. These internal states help to self-consistently quantify a more complicated set of possible interactions within and between the CG sites, while still maintaining a high degree of coarse-graining in the modeling. The presence of the CG site internal states also greatly expands the possible range of systems amenable to accurate CG modeling, including quite heterogeneous systems such as complex self-assembly processes such as occur for large multi-protein complexes. The development of bottom-up CG models from the underlying atomistic interactions also addresses special challenges in terms of the treatment of solvation, multi-body correlations, representability, transferability, and the missing entropy in CG models. Recent breakthroughs in addressing these issues – in particular by employing developments in machine learning – will be a focus of my talk. As time allows, one "pay-off" application from our multi-year effort will focus on processes from HIV-1 virus replication and especially on the maturation of the HIV-1 virus from several thousand proteins – a phenomenon involving a billion atoms or more over long timescales that cannot be approached through AA MD simulation.</div>
</details></div>
<div class="program-talk"><span class="talk-time">09:30 – 10:00</span> <span class="talk-speaker">Cecilia Clementi</span> <span class="talk-affiliation">(Free University Berlin)</span>
<details class="talk-details"><summary>Modelling Protein Dynamics with Machine Learning and Molecular Simulation</summary>
<div class="talk-abstract">The last years have seen an immense increase in high-throughput and high-resolution technologies for experimental observation as well as high-performance techniques to simulate molecular systems at a microscopic level, resulting in vast and ever-increasing amounts of high-dimensional data. However, experiments provide only a partial view of macromolecular processes and are limited in their temporal and spatial resolution. On the other hand, atomistic simulations are still not able to sample the conformation space of
large complexes, thus leaving significant gaps in our ability to study molecular processes at a biologically relevant scale. We present our efforts to bridge these gaps, by exploiting the available data and using state-of-the-art machine-learning methods to design multiscale models for complex macromolecular systems. We show that it is possible to define simplified molecular models to reproduce the essential information contained both in
microscopic simulation and experimental measurements.</div>
</details></div>
<div class="program-talk"><span class="talk-time">10:00 – 10:30</span> <span class="talk-speaker">Shoji Takada</span> <span class="talk-affiliation">(Kyoto University)</span><br><span class="talk-title">Protein-resolution modeling for cellular-scale simulations</span></div>
<div class="program-break">10:30 – 10:40 Group Photo</div>
<div class="program-break">10:40 – 11:00 Coffee Break</div>
<div class="session-title">Session 5: Multiscale Methods, Generative AI & Simulation Infrastructure <span class="session-chair">(Chair: Shoji Takada)</span></div>
<div class="program-talk"><span class="talk-time">11:00 – 11:30</span> <span class="talk-speaker">Yuji Sugita</span> <span class="talk-affiliation">(RIKEN / University of Tokyo)</span><br><span class="talk-title">Multi-scale simulations of biomolecular condensates in cellular environments</span></div>
<div class="program-talk"><span class="talk-time">11:30 – 12:00</span> <span class="talk-speaker">Bernard R. Brooks</span> <span class="talk-affiliation">(NIH)</span>
<details class="talk-details"><summary>An overview of recent applications of machine learning and AI tools for problems in biophysics at the NIH</summary>
<div class="talk-abstract">This presentation consists of a survey of our recent efforts to use machine learning and AI tools for applications in biophysics. Some of the projects presented will include: Leveraging induced polarization for efficient IC50 prediction using minimal features. Predicting iron-sulfur cluster redox potentials using a model derived from protein Structures. Extending protein pKa prediction by tree-based machine learning using PKAD-R, a curated, redesigned and expanded database of experimental pKa values in proteins. Using AI to identify drug repurposing candidates from existing approved drugs that can be used in novel ways for treating unrelated specific cancers.</div>
</details></div>
<div class="program-talk"><span class="talk-time">12:00 – 12:30</span> <span class="talk-speaker">Abhishek Singharoy</span> <span class="talk-affiliation">(Arizona State University)</span><br><span class="talk-title">TBA</span></div>
<div class="program-talk"><span class="talk-time">12:30 – 13:00</span> <span class="talk-speaker">Frank Noé</span> <span class="talk-affiliation">(Microsoft Research)</span><br><span class="talk-title">TBA</span></div>
<div class="program-break">13:00 – 14:30 Lunch</div>
<div class="session-title">Session 6: From Quantum to ML <span class="session-chair">(Chair: Yuko Okamoto)</span></div>
<div class="program-talk"><span class="talk-time">14:30 – 15:00</span> <span class="talk-speaker">Darrin York</span> <span class="talk-affiliation">(Rutgers University)</span>
<details class="talk-details"><summary>Multiscale quantum and machine-learning models for drug discovery and enzyme design</summary>
<div class="talk-abstract">This talk presents AI-driven multiscale modeling tools for drug discovery and enzyme design. We introduce end-state alchemical reservoirs and generalized restraint methods for absolute binding free energy calculations, and a Quantum Deep-learning Potential Interaction (QDπ) force field for drug-like molecules that can be applied for bespoke force field generation and indirect “book-ending” alchemical simulations. We further describe a computational enzymology framework that integrates enhanced sampling, free energy methods, and hybrid quantum/ML potentials to investigate enzymatic catalysis. A key development is the Flexible Inner Region Ensemble Separator (FIRES), a multi-component, multi-site approach for maintaining spatial separation between QM solute, QM solvent, and MM solvent regions. These tools enable detailed simulations of catalytic pathways and reveal design principles in natural and engineered nucleic acid enzymes.</div>
</details></div>
<div class="program-talk"><span class="talk-time">15:00 – 15:30</span> <span class="talk-speaker">Kwangho Nam</span> <span class="talk-affiliation">(University of Texas at Arlington)</span>
<details class="talk-details"><summary>Accelerating Enzyme Catalysis Simulations with Multiscale and Machine Learning-Assisted QM/MM Methods</summary>
<div class="talk-abstract">Understanding enzyme catalysis requires quantum mechanical/molecular mechanical (QM/MM) simulations that are both accurate and capable of accessing biologically relevant time and length scales. However, the high computational cost of conventional QM/MM simulations has long limited their routine application to complex enzymes. In this talk, I will present developments from our group that address these challenges through multiscale and machine learning-assisted QM/MM methodologies. Central to this effort is the multiple time step ai-QM/MM framework, which enable substantially larger time steps while preserving accurate free energy calculations. I will also discuss delta-machine-learning potential approaches that further accelerate QM/MM simulations. Applications to hydride transfer and phosphoryl transfer reactions will be presented, demonstrating how these approaches can efficiently and robustly simulate enzyme catalysis without sacrificing mechanistic detail.</div>
</details></div>
<div class="program-talk"><span class="talk-time">15:30 – 16:00</span> <span class="talk-speaker">Tohru Terada</span> <span class="talk-affiliation">(University of Tokyo)</span>
<details class="talk-details"><summary>Multiscale Molecular Simulations for Elucidating Protein Function and Assembly Mechanisms</summary>
<div class="talk-abstract">Proteins exhibit diverse functions, spanning from the catalysis of small biomolecule reactions, which necessitates the explicit consideration of electronic structures, to cellular scaffolding, which involves the large-scale assembly of numerous protein molecules. To fully elucidate these diverse protein function mechanisms, multiscale simulation approaches are indispensable.
Our research employs hybrid quantum mechanical/molecular mechanical (QM/MM) methods to clarify the catalytic mechanisms of enzymes, and coarse-grained molecular dynamics (CGMD) simulations to investigate the assembly mechanisms of proteins involved in liquid-liquid phase separation (LLPS) and the spontaneous formation of cytoskeletons.
In this workshop, I will present our recent findings utilizing QM/MM and CGMD simulations. I will also introduce our latest methodological developments, which include an artificial intelligence (AI)-accelerated transition state search tool and a rigid-body CGMD method specifically designed for large-scale protein assemblies.</div>
</details></div>
<div class="program-talk"><span class="talk-time">16:00 – 16:30</span> <span class="talk-speaker">Adrian Roitberg</span> <span class="talk-affiliation">(University of Florida)</span><br><span class="talk-title">Machine Learning Potentials: much faster than quantum, somewhat slower than classical. Searching for the right spot.</span></div>
<div class="program-talk"><span class="talk-time">16:30 – 17:00</span> <span class="talk-speaker">Antonio Mirarchi</span> <span class="talk-affiliation">(University Pompeu Fabra)</span>
<details class="talk-details"><summary>Transferable neural network potentials of protein thermodynamics</summary>
<div class="talk-abstract">All-atom molecular simulations offer detailed insights into macromolecular phenomena, but their substantial computational cost hinders the exploration of complex biological processes. We introduce Advanced Machine-learning Atomic Representation Omni-force-field (AMARO), a new neural network potential (NNP) that combines an O(3)-equivariant message-passing neural network architecture, TensorNet, with a coarse-graining map that excludes hydrogen atoms. AMARO demonstrates the feasibility of training coarser NNP, without prior energy terms, to run stable protein dynamics with scalability and generalization capabilities.</div>
</details></div>
<div class="program-break">17:00 – 17:30 Coffee Break / Open Discussion</div>
<div class="program-break program-social">17:30 – 18:30 Poster Session II (6F, IIB)</div>
</div>

### Day 3: May 30, 2026 (Sat)

<div class="program-day">
<div class="program-break">08:30 – 09:00 Registration (2F, IIB)</div>
<div class="session-title">Session 7: Integrative & Data-Driven Modeling <span class="session-chair">(Chair: Gregory Voth)</span></div>
<div class="program-talk"><span class="talk-time">09:00 – 09:30</span> <span class="talk-speaker">Gerhard Hummer</span> <span class="talk-affiliation">(Max Planck Institute of Biophysics)</span><br><span class="talk-title">Learning from molecular simulations</span></div>
<div class="program-talk"><span class="talk-time">09:30 – 10:00</span> <span class="talk-speaker">Florence Tama</span> <span class="talk-affiliation">(RIKEN / Nagoya University)</span><br><span class="talk-title">TBA</span></div>
<div class="program-talk"><span class="talk-time">10:00 – 10:30</span> <span class="talk-speaker">Alberto Perez</span> <span class="talk-affiliation">(University of Florida)</span>
<details class="talk-details"><summary>Scaling Peptide Discovery with AI and Physics-Based Modeling</summary>
<div class="talk-abstract">Peptide-mediated interactions play central roles in signaling, regulation, and disease, but their discovery and structural characterization remain challenging due to the flexibility and conformational heterogeneity of peptide-binding systems. Recent advances in AI-based structure prediction have expanded our ability to explore peptide–protein interactions at scale, enabling rapid interrogation of large peptide libraries and the identification of candidate binders that would be difficult to access experimentally alone. In this talk, I will discuss how we combine AI-driven structural prediction with physics-based modeling and experimental validation to develop scalable and predictive pipelines for peptide discovery. Using BET ET-domain interactions as a primary example, we employ AlphaFold-based competitive binding approaches to screen and prioritize peptide candidates across large sequence spaces. These AI methods provide a powerful framework for scaling discovery, but they also expose important limitations. In several systems, AlphaFold2 and AlphaFold3 predict distinct peptide orientations or even different binding regions for the same complex. While NMR chemical shift perturbation and exchange experiments confirm binding, they cannot distinguish which binding mode is correct. To resolve these ambiguities, we integrate physics-based ensemble modeling and enhanced conformational sampling through the MELD approach to recover the binding mode most compatible with the data and physics model. The resulting models enable the design of new miniprotein binders that experimentally bind the intended targets and engage the correct interfaces. Finally, I will discuss recent extensions of these approaches toward functional biomolecular engineering applications (miniprotein design to functionalize CAR-T cells) through our participation in the Bits to Binders Competition.</div>
</details></div>
<div class="program-break">10:30 – 10:50 Coffee Break</div>
<div class="session-title">Session 8: Complex Biomolecular Assemblies & Phase Behavior <span class="session-chair">(Chair: Tohru Terada)</span></div>
<div class="program-talk"><span class="talk-time">10:50 – 11:20</span> <span class="talk-speaker">Joan-Emma Shea</span> <span class="talk-affiliation">(UC Santa Barbara)</span>
<details class="talk-details"><summary>Self-Assembly of the Tau Protein: Liquid-Liquid Phase Separation and Fibrillization</summary>
<div class="talk-abstract">Intrinsically disordered proteins (IDPs) belong to a class of proteins that do not fold to a well-defined, three-dimensional structure, but rather co-exist between interconverting, partially structured conformations. In the crowded cellular milieu, IDPs can form liquid droplets through liquid-liquid phase separation or self-assemble into beta-sheet enriched amyloid fibrils, processes linked to normal physiological functions and various pathologies. In this talk, we present a new computational framework that scores amyloid and LLPS propensities from protein language model (pLM) embeddings, thereby enabling rapid proteome-wide annotation of peptides and residues. We apply this framework to the Tau protein, an intrinsically disordered protein that plays an important role in stabilizing microtubules and identify segments of Tau that have a propensity to phase separate or form fibrils. Using a multiscale approach combining atomistic, coarse-grained, and field-theoretic simulations, we further characterize the mechanisms of fibrillization and phase separation of these fragments and shed light on the sequence characteristics linked with these two modes of assembly.</div>
</details></div>
<div class="program-talk"><span class="talk-time">11:20 – 11:50</span> <span class="talk-speaker">Xiangze Zeng</span> <span class="talk-affiliation">(Hong Kong Baptist University)</span>
<details class="talk-details"><summary>Developing Temperature-Dependent Coarse-Grained Potentials for Simulating Phase Separation of Disordered Proteins</summary>
<div class="talk-abstract">Thermoresponsive phase transitions of intrinsically disordered proteins (IDPs), including both upper critical solution temperature (UCST) and lower critical solution temperature (LCST) transitions, are widely observed in natural and synthetic sequences. However, most existing coarse-grained (CG) models with implicit solvents employ temperature-independent interactions and fail to capture solvation-driven LCST behavior. Here, we bridge the gap between atomistic hydrations and macroscopic phase separation. Leveraging extensive all-atom molecular dynamics simulations, we reveal a fundamental linear correlation between the temperature-dependent inter-residue interaction strengths and hydration free energies. Furthermore, we demonstrate that the heterotypic interactions at the molecular level can be well approximated by a simple combination of the homotypic interactions. We incorporate these thermodynamic insights into a physics-based framework, TEA (Temperature-dependent Energetics derived from hydrAtion), which introduces temperature-dependent potentials with minimal phenomenological fitting. The TEA-augmented CG models robustly distinguish UCST- and LCST-type sequences, successfully identify experimentally reported outliers, and accurately reproduce LCST-type single-chain compaction trends and phase diagrams of multiple disordered proteins. Our work provides a transferable and physically interpretable framework that bridges atomistic hydration thermodynamics and phase behavior of IDPs, enabling the simulation of thermoresponsive sequences with minimal phenomenological fitting.</div>
</details></div>
<div class="program-talk"><span class="talk-time">11:50 – 12:20</span> <span class="talk-speaker">Ana Damjanovic</span> <span class="talk-affiliation">(Johns Hopkins University)</span><br><span class="talk-title">From Atoms to Neuronal Spikes: A Multiscale Simulation Framework</span></div>
<div class="program-break">12:20 – 12:25 Closing Remarks — Gregory Voth (University of Chicago)</div>
</div>

---

## Poster Sessions

**Setup:** Day 1 morning (please put up your poster before lunch on May 28).

**Removal:** After Poster Session II on Day 2 (please take your poster down by the end of May 29).

Please leave your poster up for the full two days, regardless of your presentation day (Day 1 or Day 2).

**Poster numbering:** Day 1 presenters have odd numbers (P1, P3, …); Day 2 presenters have even numbers (P2, P4, …). Each board holds two posters (front and back) — one Day 1 and one Day 2 — so that only every other board is "active" during each session. Each board will be labeled with the poster number in advance; please mount your poster on the side labeled with your number.

<div class="program-day">
<div class="session-title">Poster Session I — Day 1 (May 28, 2026, 18:00–20:00, 6F, IIB)</div>
<div class="program-talk"><span class="talk-time">P1</span> <span class="talk-speaker">Sandhya Tiwari</span> <span class="talk-affiliation">(IPR, Osaka University)</span><br><span class="talk-title">Uncovering the role of dimerization on dynamics and inhibitor stability in human versus Xenopus LTA4H</span></div>
<div class="program-talk"><span class="talk-time">P3</span> <span class="talk-speaker">Hobeom Kim</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">GA-Score: Learning the Physics of Molecular Interactions for scoring</span></div>
<div class="program-talk"><span class="talk-time">P5</span> <span class="talk-speaker">Yichao Wu</span> <span class="talk-affiliation">(Osaka University PRIMe)</span><br><span class="talk-title">Molecular Dynamics Simulation Study of the Pathogenic Mechanism Underlying the Ala711-Glu714 Deletion Mutation in the IGF1R/INSR Heterodimer</span></div>
<div class="program-talk"><span class="talk-time">P7</span> <span class="talk-speaker">Shweta Kumari</span> <span class="talk-affiliation">(RIKEN)</span><br><span class="talk-title">Mutation-Dependent Changes in EGFR–Shc Recognition through Integrative Modeling, Molecular Dynamics Simulations, and Docking</span></div>
<div class="program-talk"><span class="talk-time">P9</span> <span class="talk-speaker">Minji Kim</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">GateMol-BBB: A gated Multimodal gMLP Framework for Blood-Brain Barrier permeability prediction</span></div>
<div class="program-talk"><span class="talk-time">P11</span> <span class="talk-speaker">Yangyang Zhang</span> <span class="talk-affiliation">(Osaka University PRIMe)</span><br><span class="talk-title">Probing Oxytocin–OXTR Binding through Molecular Dynamics Simulations</span></div>
<div class="program-talk"><span class="talk-time">P13</span> <span class="talk-speaker">Myunghyun Jang</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">EquiFlex: Equivariant flow matching with physics-aware lossses for flexible protein-ligand complex struture prediction</span></div>
<div class="program-talk"><span class="talk-time">P15</span> <span class="talk-speaker">Jaeoh Shin</span> <span class="talk-affiliation">(KIAS)</span><br><span class="talk-title">Evaluating BioEmu-Generated Kinase Ensembles Reveals Structure Selection as the Virtual Screening Bottleneck</span></div>
<div class="program-talk"><span class="talk-time">P17</span> <span class="talk-speaker">Ikhyeong Jun</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">Agentic AI-based automation of structure-based drug discovery workflow</span></div>
<div class="program-talk"><span class="talk-time">P19</span> <span class="talk-speaker">Sujith Sritharan</span> <span class="talk-affiliation">(RIKEN R-CCS)</span><br><span class="talk-title">TBA</span></div>
<div class="program-talk"><span class="talk-time">P21</span> <span class="talk-speaker">Tingting Wang</span> <span class="talk-affiliation">(RIKEN R-CCS)</span><br><span class="talk-title">Cryo-EM and MDSPACE Reveal Continuous Conformational Heterogeneity in Glutamate Dehydrogenase</span></div>
<div class="program-talk"><span class="talk-time">P23</span> <span class="talk-speaker">Tsuyoshi Kawai</span> <span class="talk-affiliation">(Saitama University / RIKEN R-CCS)</span><br><span class="talk-title">AFM-Fold: Rapid Reconstruction of Protein Conformations from AFM Images</span></div>
<div class="program-talk"><span class="talk-time">P25</span> <span class="talk-speaker">Wenyang Zhao</span> <span class="talk-affiliation">(RIKEN R-CCS)</span><br><span class="talk-title">Identifying the most plausible phase-retrieved electron density maps of biocomplexes using 3D CNN autoencoder resampling</span></div>
<div class="program-talk"><span class="talk-time">P27</span> <span class="talk-speaker">Ajeet Kumar Yadav</span> <span class="talk-affiliation">(Nagoya University)</span><br><span class="talk-title">Resolving Differential Cryptochrome Dynamics Using Integrated Molecular Simulation Approaches</span></div>
<div class="program-talk"><span class="talk-time">P29</span> <span class="talk-speaker">Petlada Rattanasombat</span> <span class="talk-affiliation">(Nagoya University)</span><br><span class="talk-title">SAXS-guided prediction of CraCRY structure via coarse-grained MD simulations</span></div>
<div class="program-talk"><span class="talk-time">P31</span> <span class="talk-speaker">Constantin Guyot</span> <span class="talk-affiliation">(Institute for Molecular Science)</span><br><span class="talk-title">Redesign of the inhibitor peptide IF1 for F-type ATP synthase from active learning approach</span></div>
<div class="program-talk"><span class="talk-time">P33</span> <span class="talk-speaker">Martin Byzov</span> <span class="talk-affiliation">(Nagoya University)</span><br><span class="talk-title">Computational Insights into Mosquito Mechanosensation: MD Simulations of NompC and Molecular Docking of Nan-Iav in Aedes aegypti</span></div>
<div class="program-talk"><span class="talk-time">P35</span> <span class="talk-speaker">Takehito Seki</span> <span class="talk-affiliation">(Institute for Molecular Science)</span><br><span class="talk-title">Conformational Dynamics of Na⁺-Pumping NADH–Quinone Oxidoreductase during Na⁺ Translocation from AlphaFold-Facilitated Markov State Modeling</span></div>
<div class="program-talk"><span class="talk-time">P37</span> <span class="talk-speaker">Hideto Tsubouchi</span> <span class="talk-affiliation">(The University of Tokyo)</span><br><span class="talk-title">TBA</span></div>
<div class="program-talk"><span class="talk-time">P39</span> <span class="talk-speaker">Kenta Shobu</span> <span class="talk-affiliation">(Keio University)</span><br><span class="talk-title">Molecular insights into the coupling between retinal isomerization and protein dynamics in ChR2 mutants</span></div>
</div>

<div class="program-day">
<div class="session-title">Poster Session II — Day 2 (May 29, 2026, 17:30–18:30, 6F, IIB)</div>
<div class="program-talk"><span class="talk-time">P2</span> <span class="talk-speaker">Yosuke Teshirogi</span> <span class="talk-affiliation">(The University of Tokyo)</span><br><span class="talk-title">CGRig: a rigid-body protein model with residue-level interaction sites for long-time and large-scale protein assembly simulation</span></div>
<div class="program-talk"><span class="talk-time">P4</span> <span class="talk-speaker">Tarun Maity</span> <span class="talk-affiliation">(RIKEN PRI)</span><br><span class="talk-title">Microscopic Mechanics of Autonomous Self-Healing in AP-Ethylene Copolymers</span></div>
<div class="program-talk"><span class="talk-time">P6</span> <span class="talk-speaker">Diego Ugarte La Torre</span> <span class="talk-affiliation">(The University of Tokyo)</span><br><span class="talk-title">CGBack: Recovering atomistic detail from coarse-grained protein structures using diffusion models</span></div>
<div class="program-talk"><span class="talk-time">P8</span> <span class="talk-speaker">Jaemin Yoo</span> <span class="talk-affiliation">(Sungkyunkwan University)</span><br><span class="talk-title">Balancing Protein–Nucleic Acid Interactions in ff19SB-OPC through Pair-Specific Lennard-Jones Corrections</span></div>
<div class="program-talk"><span class="talk-time">P10</span> <span class="talk-speaker">Mohamed Marzouk Sobaih</span> <span class="talk-affiliation">(Ain Shams University)</span><br><span class="talk-title">Molecular Dynamics and Free-Energy Analyses Reveal Glycan-Driven Destabilization of the IGF Ternary Complex by the D440N ALS Mutation</span></div>
<div class="program-talk"><span class="talk-time">P12</span> <span class="talk-speaker">Jun Ohnuki</span> <span class="talk-affiliation">(Institute for Molecular Science)</span><br><span class="talk-title">Enhanced Sampling of Protein Conformations in AlphaFold3 with Repulsive Bias in the Diffusion Generative Model</span></div>
<div class="program-talk"><span class="talk-time">P14</span> <span class="talk-speaker">Sosuke Asano</span> <span class="talk-affiliation">(Keio University)</span><br><span class="talk-title">An Unsupervised deep learning for identifying characteristic amino acid residues from molecular dynamics simulations of similar systems</span></div>
<div class="program-talk"><span class="talk-time">P16</span> <span class="talk-speaker">Dongwoo Kim</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">A2Holo: Dual-Stream Flow Matching of 3D Structure and Protein Language Model for Conformational Transition Prediction</span></div>
<div class="program-talk"><span class="talk-time">P18</span> <span class="talk-speaker">Cheng Tan</span> <span class="talk-affiliation">(RIKEN R-CCS)</span><br><span class="talk-title">Dual-Scale Mechanism of Condensate Regulation: Nonspecific Electrostatics Paired with Specific Helical Recognition in Hero11-TDP43</span></div>
<div class="program-talk"><span class="talk-time">P20</span> <span class="talk-speaker">Jinyoung Byun</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">Steering Diffusion-based Co-folding model with Physics: Feynman–Kac Sampling under Amber Force-Field Constraints</span></div>
<div class="program-talk"><span class="talk-time">P22</span> <span class="talk-speaker">Elisa Rioual</span> <span class="talk-affiliation">(RIKEN PRI)</span><br><span class="talk-title">When In-Cell NMR Meets MD: Insights into GB1 in Crowded Environments</span></div>
<div class="program-talk"><span class="talk-time">P24</span> <span class="talk-speaker">Yoobeen Shin</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">Quality-Aware Structural Tokenization for Protein Backbone Representation and Generation</span></div>
<div class="program-talk"><span class="talk-time">P26</span> <span class="talk-speaker">Haelyn Kim</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">FoldMapper: Inverse Folding via Structure-Derived Evolutionary Profiles and Cascaded Graph Encoding</span></div>
<div class="program-talk"><span class="talk-time">P28</span> <span class="talk-speaker">Ben Cree</span> <span class="talk-affiliation">(RIKEN R-CCS)</span><br><span class="talk-title">Automated de novo Design of Nanographene inhibitors for Cryptochromes</span></div>
<div class="program-talk"><span class="talk-time">P30</span> <span class="talk-speaker">Jinung Song</span> <span class="talk-affiliation">(Seoul National University)</span><br><span class="talk-title">Design of self-assembling protein nanoparticle using computational methods</span></div>
<div class="program-talk"><span class="talk-time">P32</span> <span class="talk-speaker">Tomoshi Kameda</span> <span class="talk-affiliation">(AIST)</span><br><span class="talk-title">Predicting the evolution of the covid-19 using steered MD simulation and machine learning</span></div>
<div class="program-talk"><span class="talk-time">P34</span> <span class="talk-speaker">Csongor Németh</span> <span class="talk-affiliation">(Vrije Universiteit Amsterdam)</span><br><span class="talk-title">De Novo Protein Design of Chemokine Binders Targeting CXCL12 and CCL25</span></div>
<div class="program-talk"><span class="talk-time">P36</span> <span class="talk-speaker">Shintaroh Kubo</span> <span class="talk-affiliation">(RIKEN)</span><br><span class="talk-title">Computational investigation of how post translational modifications alter microtubule structure and charge to modulate dynein-2</span></div>
<div class="program-talk"><span class="talk-time">P38</span> <span class="talk-speaker">Naonobu Kuribayashi</span> <span class="talk-affiliation">(Keio University)</span><br><span class="talk-title">TBA</span></div>
</div>

---

## Exploring Kobe

For participants interested in exploring Kobe during their stay, the following sites provide useful local information:

- [Kobe Roman Kikou (Hyogo Prefecture Tourism Guide)](https://pr.hyojito.co.jp/kobe-roman-kikou-en/)
- [Ichiban Kobe — Local Information](https://ichibankobe.com/localinfomation/)

---

## Organizing Committee

<div class="organizer-list">
<div class="organizer"><span class="talk-speaker">Gregory Voth</span> <span class="talk-affiliation">(University of Chicago)</span></div>
<div class="organizer"><span class="talk-speaker">Yuji Sugita</span> <span class="talk-affiliation">(RIKEN / University of Tokyo)</span></div>
<div class="organizer"><span class="talk-speaker">Florence Tama</span> <span class="talk-affiliation">(RIKEN / Nagoya University)</span></div>
<div class="organizer"><span class="talk-speaker">Kei Moritsugu</span> <span class="talk-affiliation">(Osaka Metropolitan University)</span></div>
<div class="organizer"><span class="talk-speaker">Yasuhiro Matsunaga</span> <span class="talk-affiliation">(Saitama University / RIKEN)</span></div>
</div>

---

## Co-hosted & Sponsors

- [RIKEN Pioneering Research Institute (PRI)](https://www.riken.jp/en/research/labs/pri/)
- [RIKEN Center for Computational Science (R-CCS)](https://www.r-ccs.riken.jp/en/)
- [Kato Memorial Bioscience Foundation](https://www.katokinen.or.jp/)

---

## Contact

For inquiries, please contact:

Aya Takeuchi - aya.takeuchi at riken.jp

---

## Updates

- 2026-05-26: Updated poster titles
- 2026-05-25: Assigned session chairs and added a new invited talk title and abstract
- 2026-05-24: Registration closed (Zoom registration deadline reached)
- 2026-05-22: Added a poster title
- 2026-05-21: Noted that on-site registration desk is on 2F of IIB for all three days
- 2026-05-20: Added local tourist information for Kobe
- 2026-05-19: Added a poster title
- 2026-05-18: Added a new invited talk title and a poster title
- 2026-05-17: Added three poster titles
- 2026-05-16: Renumbered poster sessions (odd = Day 1, even = Day 2) to reduce crowding at adjacent boards
- 2026-05-15: Added poster session program for Day 1 and Day 2
- 2026-05-15: Updated program with new talk titles and abstracts
- 2026-05-13: Updated Day 2 program due to a speaker cancellation; adjusted Group Photo, Coffee Break, and Session 5 time slots
- 2026-05-13: Added Registration time slots to the program for all three days
- 2026-05-08: Updated program with a speaker change; added an abstract and updated a talk title
- 2026-04-27: Registration update — on-site full; Zoom participation still open
- 2026-04-23: Updated program with new talk title and speaker change; updated nearby restaurant & convenience store map
- 2026-03-12: Updated program with new talk title
- 2026-03-03: This workshop is now a RIKEN Symposium
- 2026-03-01: Updated program with new talk titles and abstracts; updated program for Day 3
- 2026-02-20: Program published (tentative), registration open
- 2025-12-01: Website launched
