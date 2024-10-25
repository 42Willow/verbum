let word = [
  ['word', 'select a stage to begin', 'part of speech', ['translation']],
  ['ā', 'ā, ab + abl.', 'p', ['from', 'by']],
  ['abeō', 'abeō, abīre, abiī', 'v', ['go away']],
  ['absum', 'absum, abesse, āfuī', 'v', ['be out', 'be absent', 'be away']],
  ['ac', 'ac', 'c', ['and']],
  ['accidō', 'accidō, accidere, accidī', 'v', ['happen']],
  ['accipiō', 'accipiō, accipere, accēpī, acceptus', 'v', ['accept', 'take in', 'receive']],
  ['accūsō', 'accūsō, accūsāre, accūsāvī, accūsātus', 'v', ['accuse']],
  ['ad + acc.', 'ad + acc.', 'p', ['to', 'at']],
  ['adeō', 'adeō, adīre, adiī', 'v', ['go', 'approach']],
  ['adeō', 'adeō', 'd', ['so much', 'so greatly']],
  ['adhūc', 'adhūc', 'd', ['up till now']],
  ['adipīscor', 'adipīscor, adipīscī, adeptus sum', 'v', ['receive', 'obtain']],
  ['adiuvō', 'adiuvō, adiuvāre, adiūvī', 'v', ['help', 'assist']],
  ['adsum', 'adsum, adesse, adfuī', 'v', ['be here', 'be present']],
  ['adveniō', 'adveniō, advenīre, advēnī', 'v', ['arrive']],
  ['adversus', 'adversus, adversa, adversum', 'a', ['hostile', 'unfavourable']],
  ['aedificium', 'aedificium, aedificiī, n.', 'n', ['building']],
  ['aedificō', 'aedificō, aedificāre, aedificāvī, aedificātus', 'v', ['build']],
  ['aeger', 'aeger, aegra, aegrum', 'a', ['sick', 'ill']],
  ['aequus', 'aequus, aequa, aequum', 'a', ['fair', 'calm']],
  ['affectus', 'affectus, affecta, affectum', 'a', ['affected', 'overcome']],
  ['afficiō', 'afficiō, afficere, affēcī, affectus', 'v', ['affect', 'treat']],
  ['affirmō', 'affirmō, affirmāre, affirmāvī', 'v', ['declare']],
  ['ager', 'ager, agrī, m.', 'n', ['field']],
  ['agitō', 'agitō, agitāre, agitāvī, agitātus', 'v', ['chase', 'hunt']],
  ['agmen', 'agmen, agminis, n.', 'n', ['column', 'column of men', 'procession']],
  ['agnōscō', 'agnōscō, agnōscere, agnōvī, agnitus', 'v', ['recognise']],
  ['agō', 'agō, agere, ēgī, āctus', 'v', ['do', 'act']],
  ['agricola', 'agricola, agricolae, m.', 'n', ['farmer']],
  ['aliī ... aliī', 'aliī ... aliī', 'z', ['some others']],
  ['aliquis', 'aliquis, aliquid', 'r', ['someone', 'something']],
  ['alius', 'alius, alia, aliud', 'a', ['other', 'another', 'else']],
  ['alter', 'alter, altera, alterum', 'a', ['the other', 'another', 'the second']],
  ['altus', 'altus, alta, altum', 'a', ['high', 'deep']],
  ['ambō', 'ambō, ambae, ambō', 'a', ['both']],
  ['ambulō', 'ambulō, ambulāre, ambulāvī', 'v', ['walk']],
  ['amīcitia', 'amīcitia, amīcitiae, f.', 'n', ['friendship']],
  ['amīcus', 'amīcus, amīcī, m.', 'n', ['friend']],
  ['āmittō', 'āmittō, āmittere, āmīsī, āmissus', 'v', ['lose']],
  ['amō', 'amō, amāre, amāvī, amātus', 'v', ['love', 'like']],
  ['amor', 'amor, amōris, m.', 'n', ['love']],
  ['an', 'an', 'c', ['or']],
  ['ancilla', 'ancilla, ancillae, f.', 'n', ['slave girl', 'maid']],
  ['animadvertō', 'animadvertō, animadvertere, animadvertī, animadversus', 'v', ['notice', 'take notice of']],
  ['animus', 'animus, animī, m.', 'n', ['spirit', 'soul', 'mind']],
  ['annus', 'annus, annī, m.', 'n', ['year']],
  ['ante + acc.', 'ante + acc.', 'p', ['before', 'in front of']],
  ['anteā', 'anteā', 'd', ['before']],
  ['ānulus', 'ānulus, ānulī, m.', 'n', ['ring']],
  ['aperiō', 'aperiō, aperīre, aperuī, apertus', 'v', ['open']],
  ['appāreō', 'appāreō, appārēre, appāruī', 'v', ['appear']],
  ['appellō', 'appellō, appellāre, appellāvī, appellātus', 'v', ['call', 'call out to']],
  ['appropinquō', 'appropinquō, appropinquāre, appropinquāvī + dat.', 'v', ['approach', 'come near to']],
  ['apud + acc.', 'apud + acc.', 'p', ['among', 'at the house of']],
  ['aqua', 'aqua, aquae, f.', 'n', ['water']],
  ['āra', 'āra, ārae, f.', 'n', ['altar']],
  ['arbor', 'arbor, arboris, f.', 'n', ['tree']],
  ['arcessō', 'arcessō, arcessere, arcessīvī, arcessītus', 'v', ['summon', 'send for']],
  ['ardeō', 'ardeō, ardēre, arsī', 'v', ['burn', 'be on fire']],
  ['arma', 'arma, armōrum, n.pl.', 'n', ['arms', 'weapons']],
  ['ars', 'ars, artis, f.', 'n', ['art', 'skill']],
  ['ascendō', 'ascendō, ascendere, ascendī', 'v', ['climb', 'rise']],
  ['at', 'at', 'c', ['but']],
  ['atque', 'atque', 'c', ['and']],
  ['attonitus', 'attonitus, attonita, attonitum', 'a', ['astonished']],
  ['auctor', 'auctor, auctōris, m.', 'n', ['creator', 'originator', 'person responsible']],
  ['auctōritās', 'auctōritās, auctōritātis, f.', 'n', ['authority']],
  ['audācia', 'audācia, audāciae, f.', 'n', ['boldness', 'audacity']],
  ['audāx', 'audāx, gen. audācis', 'a', ['bold', 'daring']],
  ['audeō', 'audeō, audēre', 'v', ['dare']],
  ['audiō', 'audiō, audīre, audīvī, audītus', 'v', ['hear', 'listen to']],
  ['auferō', 'auferō, auferre, abstulī, ablātus', 'v', ['take away', 'steal']],
  ['augeō', 'augeō, augēre, auxī, auctus', 'v', ['increase']],
  ['aula', 'aula, aulae, f.', 'n', ['palace']],
  ['aut', 'aut', 'c', ['or']],
  ['autem', 'autem', 'c', ['but']],
  ['auxilium', 'auxilium, auxiliī, n.', 'n', ['help']],
  ['bellum', 'bellum, bellī, n.', 'n', ['war']],
  ['bellum gerere', 'bellum gerere', 'z', ['wage war', 'campaign']],
  ['bene', 'bene', 'd', ['well']],
  ['benignus', 'benignus, benigna, benignum', 'a', ['kind']],
  ['bibō', 'bibō, bibere, bibī', 'v', ['drink']],
  ['bonus', 'bonus, bona, bonum', 'a', ['good']],
  ['brevis', 'brevis, breve', 'a', ['short', 'brief']],
  ['cadō', 'cadō, cadere, cecidī', 'v', ['fall']],
  ['caelum', 'caelum, caelī, n.', 'n', ['sky', 'heaven']],
  ['callidus', 'callidus, callida, callidum', 'a', ['clever', 'cunning', 'shrewd']],
  ['campus', 'campus, campī, m.', 'n', ['plain']],
  ['canis', 'canis, canis, m.', 'n', ['dog']],
  ['cantō', 'cantō, cantāre, cantāvī', 'v', ['sing', 'chant']],
  ['capillī', 'capillī, capillōrum, m.pl.', 'n', ['hair']],
  ['capiō', 'capiō, capere, cēpī, captus', 'v', ['take', 'catch', 'capture']],
  ['captīvus', 'captīvus, captīvī, m.', 'n', ['prisoner', 'captive']],
  ['caput', 'caput, capitis, n.', 'n', ['head']],
  ['carcer', 'carcer, carceris, m.', 'n', ['prison']],
  ['carmen', 'carmen, carminis, n.', 'n', ['song']],
  ['cārus', 'cārus, cāra, cārum', 'a', ['dear']],
  ['castra', 'castra, castrōrum, n.pl.', 'n', ['camp']],
  ['causa', 'causa, causae, f.', 'n', ['reason', 'cause', 'case']],
  ['caveō', 'caveō, cavēre, cāvī', 'v', ['beware']],
  ['cēdō', 'cēdō, cēdere, cessī', 'v', ['give in', 'give way', 'make way']],
  ['celeriter', 'celeriter', 'd', ['quickly', 'fast']],
  ['cēlō', 'cēlō, cēlāre, cēlāvī, cēlātus', 'v', ['hide']],
  ['cēna', 'cēna, cēnae, f.', 'n', ['dinner']],
  ['cēnō', 'cēnō, cēnāre, cēnāvī', 'v', ['dine', 'have dinner']],
  ['centum', 'centum', 'a', ['a hundred']],
  ['certus', 'certus, certa, certum', 'a', ['certain', 'infallible']],
  ['cēterī', 'cēterī, cēterae, cētera', 'a', ['the others', 'the rest']],
  ['cibus', 'cibus, cibī, m.', 'n', ['food']],
  ['circum + acc.', 'circum + acc.', 'p', ['around']],
  ['circumspectō', 'circumspectō, circumspectāre, circumspectāvī', 'v', ['look round']],
  ['circumveniō', 'circumveniō, circumvenīre, circumvēnī, circumventus', 'v', ['surround']],
  ['cīvis', 'cīvis, cīvis, m./f.', 'n', ['citizen']],
  ['clam', 'clam', 'd', ['secretly', 'in private']],
  ['clāmō', 'clāmō, clāmāre, clāmāvī', 'v', ['shout']],
  ['clāmor', 'clāmor, clāmōris, m.', 'n', ['shout', 'uproar']],
  ['clārus', 'clārus, clāra, clārum', 'a', ['famous', 'distinguished', 'splendid']],
  ['claudō', 'claudō, claudere, clausī, clausus', 'v', ['shut', 'close', 'block', 'conclude', 'complete']],
  ['coepī', 'coepī', 'v', ['I began']],
  ['cōgitō', 'cōgitō, cōgitāre, cōgitāvī', 'v', ['think', 'consider']],
  ['cognōscō', 'cognōscō, cognōscere, cognōvī, cognitus', 'v', ['get to know', 'find out']],
  ['cōgō', 'cōgō, cōgere, coēgī, coāctus', 'v', ['force', 'compel']],
  ['comes', 'comes, comitis, m./f.', 'n', ['comrade', 'companion']],
  ['comitor', 'comitor, comitārī, comitātus sum', 'v', ['accompany']],
  ['commodus', 'commodus, commoda, commodum', 'a', ['convenient']],
  ['commōtus', 'commōtus, commōta, commōtum', 'a', ['moved', 'alarmed', 'excited', 'distressed', 'overcome']],
  ['comparō', 'comparō, comparāre, comparāvī, comparātus', 'v', ['obtain', 'compare']],
  ['compleō', 'compleō, complēre, complēvī, complētus', 'v', ['fill']],
  ['complūrēs', 'complūrēs, complūra', 'a', ['several']],
  ['compōnō', 'compōnō, compōnere, composuī, compositus', 'v', ['put together', 'arrange', 'settle', 'compose']],
  ['comprehendō', 'comprehendō, comprehendere, comprehendī, comprehēnsus', 'v', ['arrest', 'seize']],
  ['cōnficiō', 'cōnficiō, cōnficere, cōnfēcī, cōnfectus', 'v', ['finish']],
  ['cōnfīdō', 'cōnfīdō, cōnfīdere + dat.', 'v', ['trust', 'put trust']],
  ['coniciō', 'coniciō, conicere, coniēcī, coniectus', 'v', ['hurl', 'throw']],
  ['cōnor', 'cōnor, cōnārī, cōnātus sum', 'v', ['try']],
  ['cōnsentiō', 'cōnsentiō, cōnsentīre, cōnsēnsī', 'v', ['agree']],
  ['cōnsilium', 'cōnsilium, cōnsiliī, n.', 'n', ['plan', 'idea', 'advice', 'council']],
  ['cōnsistō', 'cōnsistō, cōnsistere, cōnstitī', 'v', ["stand one's ground", 'stand firm', 'halt', 'stop']],
  ['cōnspiciō', 'cōnspiciō, cōnspicere, cōnspexī, cōnspectus', 'v', ['catch sight of']],
  ['cōnspicor', 'cōnspicor, cōnspicārī, cōnspicātus sum', 'v', ['catch sight of']],
  ['cōnstituō', 'cōnstituō, cōnstituere, cōnstituī, cōnstitūtus', 'v', ['decide']],
  ['cōnsul', 'cōnsul, cōnsulis, m.', 'n', ['consul']],
  ['cōnsulō', 'cōnsulō, cōnsulere, cōnsuluī, cōnsultus', 'v', ['consult']],
  ['cōnsūmō', 'cōnsūmō, cōnsūmere, cōnsūmpsī, cōnsūmptus', 'v', ['eat']],
  ['contendō', 'contendō, contendere, contendī', 'v', ['hurry']],
  ['contentus', 'contentus, contenta, contentum', 'a', ['satisfied']],
  ['contrā', 'contrā', 'd', ['on the other hand']],
  ['contrā + acc.', 'contrā + acc.', 'p', ['against']],
  ['conveniō', 'conveniō, convenīre, convēnī', 'v', ['come together', 'gather', 'meet']],
  ['convertō', 'convertō, convertere, convertī, conversus', 'v', ['turn']],
  ['cōpiae', 'cōpiae, cōpiārum, f.pl.', 'n', ['forces']],
  ['coquō', 'coquō, coquere, coxī, coctus', 'v', ['cook']],
  ['coquus', 'coquus, coquī, m.', 'n', ['cook']],
  ['corpus', 'corpus, corporis, n.', 'n', ['body']],
  ['cotīdiē', 'cotīdiē', 'd', ['every day', 'everyday']],
  ['crās', 'crās', 'd', ['tomorrow']],
  ['crēdō', 'crēdō, crēdere, crēdidī', 'v', ['trust', 'believe', 'have faith in']],
  ['crīmen', 'crīmen, crīminis, n.', 'n', ['charge']],
  ['crūdēlis', 'crūdēlis, crūdēle', 'a', ['cruel']],
  ['cubiculum', 'cubiculum, cubiculī, n.', 'n', ['bedroom']],
  ['culpō', 'culpō, culpāre, culpāvī', 'v', ['blame']],
  ['cum + abl.', 'cum + abl.', 'p', ['with']],
  ['cum', 'cum', 'c', ['when']],
  ['cupiō', 'cupiō, cupere, cupīvī', 'v', ['want']],
  ['cūr', 'cūr', 'd', ['why']],
  ['cūra', 'cūra, cūrae, f.', 'n', ['care']],
  ['cūria', 'cūria, cūriae, f.', 'n', ['senate house']],
  ['cūrō', 'cūrō, cūrāre, cūrāvī', 'v', ['look after', 'supervise']],
  ['currō', 'currō, currere, cucurrī', 'v', ['run']],
  ['custōdiō', 'custōdiō, custōdīre, custōdīvī, custōdītus', 'v', ['guard']],
  ['custōs', 'custōs, custōdis, m.', 'n', ['guard']],
  ['dē + abl.', 'dē + abl.', 'p', ['from', 'down from', 'about', 'over']],
  ['dea', 'dea, deae, f.', 'n', ['goddess']],
  ['dēbeō', 'dēbeō, dēbēre, dēbuī, dēbitus', 'v', ['owe', 'ought', 'should', 'must']],
  ['decem', 'decem', 'a', ['ten']],
  ['dēcidō', 'dēcidō, dēcidere, dēcidī', 'v', ['fall down']],
  ['dēcipiō', 'dēcipiō, dēcipere, dēcēpī, dēceptus', 'v', ['deceive', 'fool', 'trick']],
  ['decōrus', 'decōrus, decōra, decōrum', 'a', ['right', 'proper']],
  ['dēfendō', 'dēfendō, dēfendere, dēfendī, dēfēnsus', 'v', ['defend']],
  ['deinde', 'deinde', 'd', ['then']],
  ['dēlectō', 'dēlectō, dēlectāre, dēlectāvī, dēlectātus', 'v', ['delight', 'please']],
  ['dēleō', 'dēleō, dēlēre, dēlēvī, dēlētus', 'v', ['destroy']],
  ['dēmittō', 'dēmittō, dēmittere, dēmīsī, dēmissus', 'v', ['let down', 'lower']],
  ['dēmōnstrō', 'dēmōnstrō, dēmōnstrāre, dēmōnstrāvī, dēmōnstrātus', 'v', ['point out', 'show']],
  ['dēmum', 'dēmum', 'd', ['at last']],
  ['dēnique', 'dēnique', 'd', ['at last', 'finally']],
  ['dēscendō', 'dēscendō, dēscendere, dēscendī', 'v', ['come down', 'go down']],
  ['dēserō', 'dēserō, dēserere, dēseruī, dēsertus', 'v', ['desert']],
  ['dēspērō', 'dēspērō, dēspērāre, dēspērāvī', 'v', ['despair', 'give up']],
  ['deus', 'deus, deī, m.', 'n', ['god']],
  ['dextra', 'dextra, dextrae, f.', 'n', ['right hand']],
  ['dīcō', 'dīcō, dīcere, dīxī, dictus', 'v', ['say']],
  ['diēs', 'diēs, diēī, m./f.', 'n', ['day']],
  ['difficilis', 'difficilis, difficile', 'a', ['difficult']],
  ['dignitās', 'dignitās, dignitātis, f.', 'n', ['dignity', 'importance', 'prestige', 'honour']],
  ['dignus', 'dignus, digna, dignum', 'a', ['worthy', 'appropriate']],
  ['dīligenter', 'dīligenter', 'd', ['carefully', 'diligently']],
  ['dīrus', 'dīrus, dīra, dīrum', 'a', ['dreadful']],
  ['discēdō', 'discēdō, discēdere, discessī', 'v', ['depart', 'leave']],
  ['discipulus', 'discipulus, discipulī, m.', 'n', ['disciple', 'follower', 'pupil', 'student']],
  ['discō', 'discō, discere, didicī', 'v', ['learn']],
  ['discrīmen', 'discrīmen, discrīminis, n.', 'n', ['crisis', 'boundary', 'dividing line']],
  ['diū', 'diū', 'd', ['for a long time']],
  ['dīves', 'dīves, gen. dīvitis', 'a', ['rich']],
  ['dīvitiae', 'dīvitiae, dīvitiārum, f.pl.', 'n', ['riches']],
  ['dīvus', 'dīvus, dīvī, m.', 'n', ['god']],
  ['dō', 'dō, dare, dedī, datus', 'v', ['give']],
  ['doceō', 'doceō, docēre, docuī, doctus', 'v', ['teach']],
  ['doctus', 'doctus, docta, doctum', 'a', ['learned', 'educated', 'skilful', 'clever']],
  ['doleō', 'doleō, dolēre, doluī', 'v', ['hurt', 'be in pain', 'grieve', 'be sad']],
  ['dolor', 'dolor, dolōris, m.', 'n', ['pain', 'grief']],
  ['domina', 'domina, dominae, f.', 'n', ['mistress', 'madam']],
  ['dominus', 'dominus, dominī, m.', 'n', ['master']],
  ['domus', 'domus, domūs, f.', 'n', ['house', 'home']],
  ['dōnō', 'dōnō, dōnāre, dōnāvī, dōnātus', 'v', ['give']],
  ['dōnum', 'dōnum, dōnī, n.', 'n', ['present', 'gift']],
  ['dormiō', 'dormiō, dormīre, dormīvī', 'v', ['sleep']],
  ['dubitō', 'dubitō, dubitāre, dubitāvī', 'v', ['hesitate', 'doubt']],
  ['dūcō', 'dūcō, dūcere, dūxī, ductus', 'v', ['lead', 'take']],
  ['dum', 'dum', 'c', ['while', 'until', 'so long as']],
  ['duo', 'duo, duae, duo', 'a', ['two']],
  ['dūrus', 'dūrus, dūra, dūrum', 'a', ['harsh', 'hard']],
  ['dux', 'dux, ducis, m.', 'n', ['leader']],
  ['ē', 'ē, ex + abl.', 'p', ['from', 'out of']],
  ['ecce', 'ecce', 'i', ['see', 'look']],
  ['efficiō', 'efficiō, efficere, effēcī, effectus', 'v', ['carry out', 'accomplish']],
  ['effugiō', 'effugiō, effugere, effūgī', 'v', ['escape']],
  ['effundō', 'effundō, effundere, effūdī, effūsus', 'v', ['pour out']],
  ['ego', 'ego, meī', 'r', ['I', 'me']],
  ['ēgredior', 'ēgredior, ēgredī, ēgressus sum', 'v', ['go out']],
  ['ēheu', 'ēheu', 'i', ['oh dear', 'oh no', 'alas']],
  ['ēiciō', 'ēiciō, ēicere, ēiēcī, ēiectus', 'v', ['throw out']],
  ['ēligō', 'ēligō, ēligere, ēlēgī, ēlēctus', 'v', ['choose']],
  ['ēmittō', 'ēmittō, ēmittere, ēmīsī, ēmissus', 'v', ['throw', 'send out']],
  ['emō', 'emō, emere, ēmī, ēmptus', 'v', ['buy']],
  ['enim', 'enim', 'c', ['for']],
  ['eō', 'eō, īre, iī', 'v', ['go']],
  ['epistula', 'epistula, epistulae, f.', 'n', ['letter']],
  ['eques', 'eques, equitis, m.', 'n', ['horseman', 'man of equestrian rank', 'well-to-do man ranking below senator']],
  ['equus', 'equus, equī, m.', 'n', ['horse']],
  ['ergō', 'ergō', 'd', ['therefore']],
  ['ēripiō', 'ēripiō, ēripere, ēripuī, ēreptus', 'v', ['snatch away', 'rescue']],
  ['et', 'et', 'c', ['and']],
  ['et ... et', 'et ... et', 'z', ['both and']],
  ['etiam', 'etiam', 'c', ['even', 'also']],
  ['ex', 'ex, ē + abl.', 'p', ['from', 'out of']],
  ['excipiō', 'excipiō, excipere, excēpī, exceptus', 'v', ['receive', 'take over']],
  ['excitō', 'excitō, excitāre, excitāvī, excitātus', 'v', ['arouse', 'wake up', 'awaken']],
  ['exclāmō', 'exclāmō, exclāmāre, exclāmāvī', 'v', ['exclaim', 'shout']],
  ['exeō', 'exeō, exīre, exiī', 'v', ['go out']],
  ['exercitus', 'exercitus, exercitūs, m.', 'n', ['army']],
  ['exīstimō', 'exīstimō, exīstimāre, exīstimāvī, exīstimātus', 'v', ['think', 'consider']],
  ['explicō', 'explicō, explicāre, explicāvī, explicātus', 'v', ['explain']],
  ['exspectō', 'exspectō, exspectāre, exspectāvī, exspectātus', 'v', ['wait for']],
  ['extrā + acc.', 'extrā + acc.', 'p', ['outside']],
  ['extrēmus', 'extrēmus, extrēma, extrēmum', 'a', ['furthest']],
  ['faber', 'faber, fabrī, m.', 'n', ['craftsman', 'workman']],
  ['fābula', 'fābula, fābulae, f.', 'n', ['story', 'play']],
  ['facile', 'facile', 'd', ['easily']],
  ['facilis', 'facilis, facile', 'a', ['easy']],
  ['faciō', 'faciō, facere, fēcī, factus', 'v', ['make', 'do']],
  ['fallō', 'fallō, fallere, fefellī, falsus', 'v', ['deceive', 'escape notice of', 'slip by']],
  ['falsus', 'falsus, falsa, falsum', 'a', ['false', 'untrue', 'dishonest']],
  ['familia', 'familia, familiae, f.', 'n', ['household']],
  ['faveō', 'faveō, favēre, fāvī + dat.', 'v', ['favour', 'support']],
  ['fēmina', 'fēmina, fēminae, f.', 'n', ['woman']],
  ['ferō', 'ferō, ferre, tulī, lātus', 'v', ['bring', 'carry']],
  ['ferōciter', 'ferōciter', 'd', ['fiercely']],
  ['ferōx', 'ferōx, gen. ferōcis', 'a', ['fierce', 'ferocious']],
  ['fessus', 'fessus, fessa, fessum', 'a', ['tired']],
  ['festīnō', 'festīnō, festīnāre, festīnāvī', 'v', ['hurry']],
  ['fidēlis', 'fidēlis, fidēle', 'a', ['faithful', 'loyal']],
  ['fidēs', 'fidēs, fideī, f.', 'n', ['loyalty', 'trustworthiness']],
  ['fīlia', 'fīlia, fīliae, f.', 'n', ['daughter']],
  ['fīlius', 'fīlius, fīliī, m.', 'n', ['son']],
  ['fīnis', 'fīnis, fīnis, m.', 'n', ['end']],
  ['fīō', 'fīō, fierī, factus sum', 'v', ['become', 'be made', 'occur']],
  ['flamma', 'flamma, flammae, f.', 'n', ['flame']],
  ['flōs', 'flōs, flōris, m.', 'n', ['flower']],
  ['flūmen', 'flūmen, flūminis, n.', 'n', ['river']],
  ['fluō', 'fluō, fluere, flūxī', 'v', ['flow']],
  ['fōns', 'fōns, fontis, m.', 'n', ['fountain', 'spring']],
  ['fortasse', 'fortasse', 'd', ['perhaps']],
  ['forte', 'forte', 'd', ['by chance']],
  ['fortis', 'fortis, forte', 'a', ['brave']],
  ['fortiter', 'fortiter', 'd', ['bravely']],
  ['fragor', 'fragor, fragōris, m.', 'n', ['crash']],
  ['frangō', 'frangō, frangere, frēgī, frāctus', 'v', ['break']],
  ['frāter', 'frāter, frātris, m.', 'n', ['brother']],
  ['frūmentum', 'frūmentum, frūmentī, n.', 'n', ['grain']],
  ['frūstrā', 'frūstrā', 'd', ['in vain']],
  ['fuga', 'fuga, fugae, f.', 'n', ['escape']],
  ['fugiō', 'fugiō, fugere, fūgī', 'v', ['run away', 'flee']],
  ['fundō', 'fundō, fundere, fūdī, fūsus', 'v', ['pour']],
  ['fundus', 'fundus, fundī, m.', 'n', ['farm']],
  ['fūr', 'fūr, fūris, m.', 'n', ['thief']],
  ['gaudeō', 'gaudeō, gaudēre', 'v', ['be pleased', 'rejoice']],
  ['gaudium', 'gaudium, gaudiī, n.', 'n', ['joy']],
  ['gemitus', 'gemitus, gemitūs, m.', 'n', ['groan']],
  ['gēns', 'gēns, gentis, f.', 'n', ['family', 'tribe', 'race']],
  ['genus', 'genus, generis, n.', 'n', ['race']],
  ['gerō', 'gerō, gerere, gessī, gestus', 'v', ['wear', 'achieve']],
  ['gladius', 'gladius, gladiī, m.', 'n', ['sword']],
  ['grātiās agere', 'grātiās agere', 'z', ['thank', 'give thanks']],
  ['grātus', 'grātus, grāta, grātum', 'a', ['acceptable', 'pleasing']],
  ['gravis', 'gravis, grave', 'a', ['heavy', 'serious']],
  ['graviter', 'graviter', 'd', ['heavily', 'seriously', 'soundly']],
  ['habeō', 'habeō, habēre, habuī, habitus', 'v', ['have']],
  ['habitō', 'habitō, habitāre, habitāvī', 'v', ['live']],
  ['hasta', 'hasta, hastae, f.', 'n', ['spear']],
  ['haud', 'haud', 'd', ['not']],
  ['haudquāquam', 'haudquāquam', 'd', ['not at all']],
  ['heri', 'heri', 'd', ['yesterday']],
  ['hic', 'hic, haec, hoc', 'r', ['this']],
  ['hīc', 'hīc', 'd', ['here']],
  ['hinc', 'hinc', 'd', ['from here', 'then', 'next']],
  ['hodiē', 'hodiē', 'd', ['today']],
  ['homō', 'homō, hominis, m.', 'n', ['human being', 'man']],
  ['honor', 'honor, honōris, m.', 'n', ['honour', 'public position', 'official position']],
  ['hōra', 'hōra, hōrae, f.', 'n', ['hour']],
  ['hortor', 'hortor, hortārī, hortātus sum', 'v', ['encourage', 'urge']],
  ['hortus', 'hortus, hortī, m.', 'n', ['garden']],
  ['hospes', 'hospes, hospitis, m.', 'n', ['guest', 'host']],
  ['hostis', 'hostis, hostis, m./f.', 'n', ['enemy']],
  ['hūc', 'hūc', 'd', ['here', 'to this place']],
  ['humī', 'humī', 'd', ['on the ground']],
  ['iaceō', 'iaceō, iacēre, iacuī', 'v', ['lie']],
  ['iaciō', 'iaciō, iacere, iēcī, iactus', 'v', ['throw']],
  ['iactō', 'iactō, iactāre, iactāvī, iactātus', 'v', ['throw']],
  ['iam', 'iam', 'd', ['now']],
  ['iānua', 'iānua, iānuae, f.', 'n', ['door']],
  ['ibi', 'ibi', 'd', ['there']],
  ['īdem', 'īdem, eadem, idem', 'r', ['the same']],
  ['identidem', 'identidem', 'd', ['repeatedly']],
  ['igitur', 'igitur', 'd', ['therefore', 'and so']],
  ['ignārus', 'ignārus, ignāra, ignārum', 'a', ['not knowing', 'unaware']],
  ['ignāvus', 'ignāvus, ignāva, ignāvum', 'a', ['lazy', 'cowardly']],
  ['ignis', 'ignis, ignis, m.', 'n', ['fire']],
  ['ignōrō', 'ignōrō, ignōrāre, ignōrāvī', 'v', ['not know about', 'not know of']],
  ['ignōscō', 'ignōscō, ignōscere, ignōvī + dat.', 'v', ['forgive']],
  ['ille', 'ille, illa, illud', 'r', ['that', 'he', 'she']],
  ['illūc', 'illūc', 'd', ['there', 'to that place']],
  ['immōtus', 'immōtus, immōta, immōtum', 'a', ['still', 'motionless']],
  ['impediō', 'impediō, impedīre, impedīvī, impedītus', 'v', ['delay', 'hinder']],
  ['imperātor', 'imperātor, imperātōris, m.', 'n', ['emperor']],
  ['imperium', 'imperium, imperiī, n.', 'n', ['empire', 'power', 'command']],
  ['imperō', 'imperō, imperāre, imperāvī + dat.', 'v', ['order', 'command']],
  ['in + abl.', 'in + abl.', 'p', ['in', 'on']],
  ['in + acc.', 'in + acc.', 'p', ['into', 'onto']],
  ['inānis', 'inānis, ināne', 'a', ['empty', 'meaningless']],
  ['incēdō', 'incēdō, incēdere, incessī', 'v', ['march', 'stride']],
  ['incendō', 'incendō, incendere, incendī, incēnsus', 'v', ['burn', 'set on fire', 'set fire to']],
  ['incipiō', 'incipiō, incipere, incēpī, inceptus', 'v', ['begin']],
  ['inde', 'inde', 'd', ['then']],
  ['īnfēlīx', 'īnfēlīx, gen. īnfēlīcis', 'a', ['unlucky']],
  ['īnferō', 'īnferō, īnferre, intulī, inlātus', 'v', ['bring in', 'bring on', 'bring against']],
  ['ingēns', 'ingēns, gen. ingentis', 'a', ['huge']],
  ['ingredior', 'ingredior, ingredī, ingressus sum', 'v', ['enter']],
  ['iniūria', 'iniūria, iniūriae, f.', 'n', ['injustice', 'injury']],
  ['inquit', 'inquit', 'v', ['says', 'said']],
  ['īnsidiae', 'īnsidiae, īnsidiārum, f.pl.', 'n', ['trap', 'ambush']],
  ['īnspiciō', 'īnspiciō, īnspicere, īnspexī, īnspectus', 'v', ['look at', 'inspect', 'examine', 'search']],
  ['īnstruō', 'īnstruō, īnstruere, īnstrūxī, īnstrūctus', 'v', ['draw up', 'set up']],
  ['īnsula', 'īnsula, īnsulae, f.', 'n', ['island', 'block of flats', 'apartment building']],
  ['intellegō', 'intellegō, intellegere, intellēxī, intellēctus', 'v', ['understand']],
  ['intentē', 'intentē', 'd', ['closely', 'carefully', 'intently']],
  ['inter + acc.', 'inter + acc.', 'p', ['among', 'between']],
  ['intereā', 'intereā', 'd', ['meanwhile']],
  ['interficiō', 'interficiō, interficere, interfēcī, interfectus', 'v', ['kill']],
  ['intrō', 'intrō, intrāre, intrāvī', 'v', ['enter']],
  ['inveniō', 'inveniō, invenīre, invēnī, inventus', 'v', ['find']],
  ['invidia', 'invidia, invidiae, f.', 'n', ['jealousy', 'envy', 'unpopularity']],
  ['invītō', 'invītō, invītāre, invītāvī, invītātus', 'v', ['invite']],
  ['invītus', 'invītus, invīta, invītum', 'a', ['unwilling', 'reluctant']],
  ['ipse', 'ipse, ipsa, ipsum', 'r', ['himself', 'herself', 'itself']],
  ['īra', 'īra, īrae, f.', 'n', ['anger']],
  ['īrātus', 'īrātus, īrāta, īrātum', 'a', ['angry']],
  ['iste', 'iste, ista, istud', 'r', ['that']],
  ['ita', 'ita', 'd', ['in this way']],
  ['itaque', 'itaque', 'c', ['and so']],
  ['ita vērō', 'ita vērō', 'z', ['yes']],
  ['iter', 'iter, itineris, n.', 'n', ['journey', 'progress']],
  ['iterum', 'iterum', 'd', ['again']],
  ['iubeō', 'iubeō, iubēre, iussī, iussus', 'v', ['order']],
  ['iūdex', 'iūdex, iūdicis, m.', 'n', ['judge']],
  ['iungō', 'iungō, iungere, iūnxī, iūnctus', 'v', ['join']],
  ['iussum', 'iussum, iussī, n.', 'n', ['instruction', 'order']],
  ['iuvenis', 'iuvenis, iuvenis, m.', 'n', ['young man']],
  ['iuvō', 'iuvō, iuvāre, iūvī', 'v', ['help', 'assist']],
  ['labor', 'labor, labōris, m.', 'n', ['work', 'labour']],
  ['labōrō', 'labōrō, labōrāre, labōrāvī', 'v', ['work']],
  ['lacrima', 'lacrima, lacrimae, f.', 'n', ['tear']],
  ['lacrimō', 'lacrimō, lacrimāre, lacrimāvī', 'v', ['weep', 'cry']],
  ['laetus', 'laetus, laeta, laetum', 'a', ['happy']],
  ['lateō', 'lateō, latēre, latuī', 'v', ['lie hidden']],
  ['laudō', 'laudō, laudāre, laudāvī, laudātus', 'v', ['praise']],
  ['lectus', 'lectus, lectī, m.', 'n', ['couch', 'bed']],
  ['lēgātus', 'lēgātus, lēgātī, m.', 'n', ['commander']],
  ['legiō', 'legiō, legiōnis, f.', 'n', ['legion']],
  ['legō', 'legō, legere, lēgī, lēctus', 'v', ['read']],
  ['lentē', 'lentē', 'd', ['slowly']],
  ['leō', 'leō, leōnis, m.', 'n', ['lion']],
  ['levis', 'levis, leve', 'a', ['light', 'slight', 'trivial', 'changeable']],
  ['lēx', 'lēx, lēgis, f.', 'n', ['law']],
  ['libenter', 'libenter', 'd', ['gladly']],
  ['liber', 'liber, librī, m.', 'n', ['book']],
  ['līberālis', 'līberālis, līberāle', 'a', ['generous']],
  ['līberī', 'līberī, līberōrum, m.pl.', 'n', ['children']],
  ['līberō', 'līberō, līberāre, līberāvī, līberātus', 'v', ['free', 'set free']],
  ['lībertās', 'lībertās, lībertātis, f.', 'n', ['freedom']],
  ['lībertus', 'lībertus, lībertī, m.', 'n', ['freedman', 'ex-slave']],
  ['līmen', 'līmen, līminis, n.', 'n', ['threshold', 'doorway']],
  ['littera', 'littera, litterae, f.', 'n', ['letter']],
  ['litterae', 'litterae, litterārum, f.pl.', 'n', ['letter', 'letters', 'literature']],
  ['lītus', 'lītus, lītoris, n.', 'n', ['sea-shore', 'shore']],
  ['locus', 'locus, locī, m.', 'n', ['place']],
  ['loquor', 'loquor, loquī, locūtus sum', 'v', ['speak']],
  ['lūdus', 'lūdus, lūdī, m.', 'n', ['game']],
  ['lūna', 'lūna, lūnae, f.', 'n', ['moon']],
  ['lūx', 'lūx, lūcis, f.', 'n', ['light', 'daylight']],
  ['magis', 'magis', 'd', ['more']],
  ['magnopere', 'magnopere', 'd', ['greatly']],
  ['magnus', 'magnus, magna, magnum', 'a', ['big', 'large', 'great']],
  ['male', 'male', 'd', ['badly', 'unfavourably']],
  ['mālō', 'mālō, mālle, māluī', 'v', ['prefer']],
  ['malus', 'malus, mala, malum', 'a', ['evil', 'bad']],
  ['mandātum', 'mandātum, mandātī, n.', 'n', ['instruction', 'order']],
  ['mandō', 'mandō, mandāre, mandāvī, mandātus', 'v', ['order', 'entrust', 'hand over']],
  ['māne', 'māne', 'd', ['in the morning']],
  ['maneō', 'maneō, manēre, mānsī', 'v', ['remain', 'stay']],
  ['manus', 'manus, manūs, f.', 'n', ['hand', 'band of men']],
  ['mare', 'mare, maris, n.', 'n', ['sea']],
  ['marītus', 'marītus, marītī, m.', 'n', ['husband']],
  ['māter', 'māter, mātris, f.', 'n', ['mother']],
  ['maximē', 'maximē', 'd', ['very greatly', 'very much', 'most of all']],
  ['maximus', 'maximus, maxima, maximum', 'a', ['very big', 'very large', 'very great', 'greatest']],
  ['mē auctōre', 'mē auctōre', 'z', ['at my suggestion']],
  ['medius', 'medius, media, medium', 'a', ['middle']],
  ['melior', 'melior, melius', 'a', ['better']],
  ['mendāx', 'mendāx, mendācis, m.', 'n', ['liar']],
  ['mēnsa', 'mēnsa, mēnsae, f.', 'n', ['table']],
  ['mēnsis', 'mēnsis, mēnsis, m.', 'n', ['month']],
  ['mercātor', 'mercātor, mercātōris, m.', 'n', ['merchant']],
  ['metus', 'metus, metūs, m.', 'n', ['fear']],
  ['meus', 'meus, mea, meum', 'a', ['my', 'mine']],
  ['mīles', 'mīles, mīlitis, m.', 'n', ['soldier']],
  ['mīlia', 'mīlia, n.pl.', 'n', ['thousands']],
  ['mīlle', 'mīlle', 'a', ['a thousand']],
  ['minimē', 'minimē', 'd', ['no', 'least', 'very little']],
  ['minimus', 'minimus, minima, minimum', 'a', ['very little', 'least']],
  ['minor', 'minor, minārī, minātus sum + dat.', 'v', ['threaten']],
  ['mīrābilis', 'mīrābilis, mīrābile', 'a', ['extraordinary', 'strange', 'wonderful']],
  ['mīror', 'mīror, mīrārī, mīrātus sum', 'v', ['admire', 'wonder at']],
  ['miser', 'miser, misera, miserum', 'a', ['miserable', 'wretched', 'sad']],
  ['mittō', 'mittō, mittere, mīsī, missus', 'v', ['send']],
  ['modo', 'modo', 'd', ['just', 'now', 'only', 'just now']],
  ['modus', 'modus, modī, m.', 'n', ['manner', 'way', 'kind']],
  ['moneō', 'moneō, monēre, monuī, monitus', 'v', ['warn', 'advise']],
  ['mōns', 'mōns, montis, m.', 'n', ['mountain']],
  ['morbus', 'morbus, morbī, m.', 'n', ['illness']],
  ['morior', 'morior, morī, mortuus sum', 'v', ['die']],
  ['moror', 'moror, morārī, morātus sum', 'v', ['delay']],
  ['mors', 'mors, mortis, f.', 'n', ['death']],
  ['mortuus', 'mortuus, mortua, mortuum', 'a', ['dead']],
  ['moveō', 'moveō, movēre, mōvī, mōtus', 'v', ['move', 'influence']],
  ['mox', 'mox', 'd', ['soon']],
  ['multī', 'multī, multae, multa', 'a', ['many']],
  ['multō', 'multō', 'd', ['much']],
  ['multus', 'multus, multa, multum', 'a', ['much']],
  ['mūrus', 'mūrus, mūrī, m.', 'n', ['wall']],
  ['mūtō', 'mūtō, mūtāre, mūtāvī, mūtātus', 'v', ['change']],
  ['nam', 'nam', 'c', ['for']],
  ['nārrō', 'nārrō, nārrāre, nārrāvī, nārrātus', 'v', ['tell', 'relate']],
  ['nāscor', 'nāscor, nāscī, nātus sum', 'v', ['be born']],
  ['nātus', 'nātus, nāta, nātum', 'a', ['born']],
  ['nauta', 'nauta, nautae, m.', 'n', ['sailor']],
  ['nāvigō', 'nāvigō, nāvigāre, nāvigāvī', 'v', ['sail']],
  ['nāvis', 'nāvis, nāvis, f.', 'n', ['ship']],
  ['nē', 'nē', 'c', ['that not', 'so that not', 'in order that not']],
  ['nec', 'nec', 'c', ['and not', 'nor']],
  ['necesse', 'necesse', 'a', ['necessary']],
  ['nec ... nec', 'nec ... nec', 'z', ['neither nor']],
  ['necō', 'necō, necāre, necāvī, necātus', 'v', ['kill']],
  ['neglegō', 'neglegō, neglegere, neglēxī, neglēctus', 'v', ['neglect', 'ignore', 'disregard']],
  ['negōtium', 'negōtium, negōtiī, n.', 'n', ['business']],
  ['nēmō', 'nēmō, nēminis, m./f.', 'n', ['no one', 'nobody']],
  ['neque ... neque', 'neque ... neque', 'z', ['neither nor']],
  ['nē ... quidem', 'nē ... quidem', 'z', ['not even']],
  ['nescio', 'nescio, nescīre, nescīvī', 'v', ['not know']],
  ['niger', 'niger, nigra, nigrum', 'a', ['black']],
  ['nihil', 'nihil', 'n', ['nothing']],
  ['nimis', 'nimis', 'd', ['too']],
  ['nimium', 'nimium', 'd', ['too much']],
  ['nisi', 'nisi', 'c', ['except', 'unless']],
  ['nōbilis', 'nōbilis, nōbile', 'a', ['noble', 'of noble birth']],
  ['noceō', 'noceō, nocēre, nocuī + dat.', 'v', ['hurt', 'harm']],
  ['nōlō', 'nōlō, nōlle, nōluī', 'v', ['not want']],
  ['nōmen', 'nōmen, nōminis, n.', 'n', ['name']],
  ['nōn', 'nōn', 'd', ['not']],
  ['nōnāgintā', 'nōnāgintā', 'a', ['ninety']],
  ['nōnne', 'nōnne', 'd', ['surely']],
  ['nōnnūllī', 'nōnnūllī, nōnnūllae, nōnnūlla', 'a', ['some', 'several']],
  ['nōs', 'nōs', 'r', ['we', 'us']],
  ['noster', 'noster, nostra, nostrum', 'a', ['our']],
  ['nōtus', 'nōtus, nōta, nōtum', 'a', ['known', 'well known', 'famous']],
  ['novem', 'novem', 'a', ['nine']],
  ['nōvī', 'nōvī', 'v', ['I know']],
  ['novus', 'novus, nova, novum', 'a', ['new']],
  ['nox', 'nox, noctis, f.', 'n', ['night']],
  ['nūbō', 'nūbō, nūbere, nūpsī, nūptus + dat.', 'v', ['marry']],
  ['nūllus', 'nūllus, nūlla, nūllum', 'a', ['not any', 'no']],
  ['num', 'num', 'd', ['surely not']],
  ['num', 'num', 'c', ['whether']],
  ['numerus', 'numerus, numerī, m.', 'n', ['number']],
  ['numquam', 'numquam', 'd', ['never']],
  ['nunc', 'nunc', 'd', ['now']],
  ['nūntiō', 'nūntiō, nūntiāre, nūntiāvī, nūntiātus', 'v', ['announce']],
  ['nūntius', 'nūntius, nūntiī, m.', 'n', ['messenger', 'news']],
  ['nūper', 'nūper', 'd', ['recently']],
  ['nusquam', 'nusquam', 'd', ['nowhere']],
  ['obiciō', 'obiciō, obicere, obiēcī, obiectus', 'v', ['present', 'put in the way of', 'expose to']],
  ['oblīvīscor', 'oblīvīscor, oblīvīscī, oblītus sum', 'v', ['forget']],
  ['obstō', 'obstō, obstāre, obstitī + dat.', 'v', ['obstruct', 'block the way']],
  ['occīdō', 'occīdō, occīdere, occīdī, occīsus', 'v', ['kill']],
  ['octō', 'octō', 'a', ['eight']],
  ['octōgintā', 'octōgintā', 'a', ['eighty']],
  ['oculus', 'oculus, oculī, m.', 'n', ['eye']],
  ['ōdī', 'ōdī', 'v', ['I hate']],
  ['odium', 'odium, odiī, n.', 'n', ['hatred']],
  ['offerō', 'offerō, offerre, obtulī, oblātus', 'v', ['offer']],
  ['ōlim', 'ōlim', 'd', ['once', 'some time ago']],
  ['omnīnō', 'omnīnō', 'd', ['completely']],
  ['omnis', 'omnis, omne', 'a', ['all']],
  ['opēs', 'opēs, opum, f.pl.', 'n', ['money', 'wealth']],
  ['oppidum', 'oppidum, oppidī, n.', 'n', ['town']],
  ['opprimō', 'opprimō, opprimere, oppressī, oppressus', 'v', ['crush']],
  ['oppugnō', 'oppugnō, oppugnāre, oppugnāvī, oppugnātus', 'v', ['attack']],
  ['optimē', 'optimē', 'd', ['very well']],
  ['optimus', 'optimus, optima, optimum', 'a', ['very good', 'excellent', 'best']],
  ['opus', 'opus, operis, n.', 'n', ['work', 'construction']],
  ['orior', 'orior, orīrī, ortus sum', 'v', ['rise', 'arise']],
  ['ōrnō', 'ōrnō, ōrnāre, ōrnāvī, ōrnātus', 'v', ['decorate']],
  ['ōrō', 'ōrō, ōrāre, ōrāvī', 'v', ['beg']],
  ['ostendō', 'ostendō, ostendere, ostendī, ostentus', 'v', ['show']],
  ['ōtiōsus', 'ōtiōsus, ōtiōsa, ōtiōsum', 'a', ['idle', 'on holiday', 'on vacation']],
  ['paene', 'paene', 'd', ['nearly', 'almost']],
  ['parcō', 'parcō, parcere, pepercī + dat.', 'v', ['spare']],
  ['pāreō', 'pāreō, pārēre, pāruī', 'v', ['obey']],
  ['parō', 'parō, parāre, parāvī, parātus', 'v', ['prepare']],
  ['pars', 'pars, partis, f.', 'n', ['part']],
  ['parvus', 'parvus, parva, parvum', 'a', ['small', 'little']],
  ['patefaciō', 'patefaciō, patefacere, patefēcī, patefactus', 'v', ['reveal']],
  ['pater', 'pater, patris, m.', 'n', ['father']],
  ['patior', 'patior, patī, passus sum', 'v', ['suffer', 'endure']],
  ['patria', 'patria, patriae, f.', 'n', ['country', 'homeland']],
  ['paucī', 'paucī, paucae, pauca', 'a', ['few', 'a few']],
  ['paulō', 'paulō', 'd', ['a little']],
  ['pauper', 'pauper, gen. pauperis', 'a', ['poor']],
  ['pavor', 'pavor, pavōris, m.', 'n', ['panic']],
  ['pāx', 'pāx, pācis, f.', 'n', ['peace']],
  ['pecūnia', 'pecūnia, pecūniae, f.', 'n', ['money']],
  ['per + acc.', 'per + acc.', 'p', ['through', 'along']],
  ['pereō', 'pereō, perīre, periī', 'v', ['die', 'perish']],
  ['perficiō', 'perficiō, perficere, perfēcī, perfectus', 'v', ['finish']],
  ['perīculum', 'perīculum, perīculī, n.', 'n', ['danger']],
  ['perītus', 'perītus, perīta, perītum', 'a', ['skilful']],
  ['persuādeō', 'persuādeō, persuādēre, persuāsī + dat.', 'v', ['persuade']],
  ['perturbō', 'perturbō, perturbāre, perturbāvī, perturbātus', 'v', ['disturb', 'alarm']],
  ['perveniō', 'perveniō, pervenīre, pervēnī', 'v', ['reach', 'arrive at']],
  ['pēs', 'pēs, pedis, m.', 'n', ['foot', 'paw']],
  ['pessimus', 'pessimus, pessima, pessimum', 'a', ['worst', 'very bad']],
  ['petō', 'petō, petere, petīvī, petītus', 'v', ['make for', 'attack', 'seek', 'beg for', 'ask for']],
  ['placeō', 'placeō, placēre, placuī + dat.', 'v', ['please', 'suit']],
  ['plaudō', 'plaudō, plaudere, plausī, plausus', 'v', ['applaud', 'clap']],
  ['plēnus', 'plēnus, plēna, plēnum', 'a', ['full']],
  ['plūrimī', 'plūrimī, plūrimae, plūrima', 'a', ['very many']],
  ['plūs', 'plūs, gen. plūris', 'a', ['more']],
  ['poena', 'poena, poenae, f.', 'n', ['punishment']],
  ['poenās dare', 'poenās dare', 'z', ['pay the penalty', 'be punished']],
  ['poēta', 'poēta, poētae, m.', 'n', ['poet']],
  ['polliceor', 'polliceor, pollicērī, pollicitus sum', 'v', ['promise']],
  ['pōnō', 'pōnō, pōnere, posuī, positus', 'v', ['place', 'put', 'put up']],
  ['pōns', 'pōns, pontis, m.', 'n', ['bridge']],
  ['populus', 'populus, populī, m.', 'n', ['people']],
  ['porta', 'porta, portae, f.', 'n', ['gate']],
  ['portō', 'portō, portāre, portāvī, portātus', 'v', ['carry']],
  ['portus', 'portus, portūs, m.', 'n', ['harbour']],
  ['poscō', 'poscō, poscere, poposcī', 'v', ['demand', 'ask for']],
  ['possum', 'possum, posse, potuī', 'v', ['can', 'be able']],
  ['post + acc.', 'post + acc.', 'p', ['after', 'behind']],
  ['posteā', 'posteā', 'd', ['afterwards']],
  ['postquam', 'postquam', 'c', ['after', 'when']],
  ['postrīdiē', 'postrīdiē', 'd', ['on the next day']],
  ['postulō', 'postulō, postulāre, postulāvī, postulātus', 'v', ['demand']],
  ['potestās', 'potestās, potestātis, f.', 'n', ['power', 'control']],
  ['praebeō', 'praebeō, praebēre, praebuī, praebitus', 'v', ['offer', 'provide']],
  ['praeceps', 'praeceps, gen. praecipitis', 'a', ['headlong']],
  ['praemium', 'praemium, praemiī, n.', 'n', ['prize', 'reward', 'profit']],
  ['praesertim', 'praesertim', 'd', ['especially']],
  ['praeter + acc.', 'praeter + acc.', 'p', ['except']],
  ['precor', 'precor, precārī, precātus sum', 'v', ['pray']],
  ['pretium', 'pretium, pretiī, n.', 'n', ['price']],
  ['prīmus', 'prīmus, prīma, prīmum', 'a', ['first']],
  ['prīnceps', 'prīnceps, prīncipis, m.', 'n', ['chief', 'chieftain', 'emperor']],
  ['prius', 'prius', 'd', ['earlier']],
  ['priusquam', 'priusquam', 'c', ['before', 'until']],
  ['prō + abl.', 'prō + abl.', 'p', ['in front of', 'for', 'in return for']],
  ['probō', 'probō, probāre, probāvī', 'v', ['prove']],
  ['prōcēdō', 'prōcēdō, prōcēdere, prōcessī', 'v', ['advance', 'proceed']],
  ['prō certō habēre', 'prō certō habēre', 'z', ['know for certain']],
  ['procul', 'procul', 'd', ['far off']],
  ['prōdō', 'prōdō, prōdere, prōdidī, prōditus', 'v', ['betray']],
  ['proelium', 'proelium, proeliī, n.', 'n', ['battle']],
  ['proficīscor', 'proficīscor, proficīscī, profectus sum', 'v', ['set out']],
  ['prōgredior', 'prōgredior, prōgredī, prōgressus sum', 'v', ['advance']],
  ['prohibeō', 'prohibeō, prohibēre, prohibuī, prohibitus', 'v', ['prevent']],
  ['prōmittō', 'prōmittō, prōmittere, prōmīsī, prōmissus', 'v', ['promise']],
  ['prope + acc.', 'prope + acc.', 'p', ['near']],
  ['proximus', 'proximus, proxima, proximum', 'a', ['nearest', 'next to', 'last']],
  ['puella', 'puella, puellae, f.', 'n', ['girl']],
  ['puer', 'puer, puerī, m.', 'n', ['boy']],
  ['pugna', 'pugna, pugnae, f.', 'n', ['fight']],
  ['pugnō', 'pugnō, pugnāre, pugnāvī', 'v', ['fight']],
  ['pulcher', 'pulcher, pulchra, pulchrum', 'a', ['beautiful']],
  ['pulsō', 'pulsō, pulsāre, pulsāvī, pulsātus', 'v', ['hit', 'knock at', 'thump', 'punch']],
  ['pūniō', 'pūniō, pūnīre, pūnīvī, pūnītus', 'v', ['punish']],
  ['puto', 'puto, putāre, putāvī', 'v', ['think']],
  ['quadrāgintā', 'quadrāgintā', 'a', ['forty']],
  ['quaerō', 'quaerō, quaerere, quaesīvī, quaesītus', 'v', ['search for', 'look for']],
  ['quālis', 'quālis, quāle', 'a', ['what sort of']],
  ['quam', 'quam', 'd', ['than', 'how']],
  ['quamquam', 'quamquam', 'c', ['although']],
  ['quandō', 'quandō', 'c', ['when']],
  ['quantus', 'quantus, quanta, quantum', 'a', ['how big']],
  ['quārē', 'quārē', 'd', ['why']],
  ['quasi', 'quasi', 'd', ['as if']],
  ['quattuor', 'quattuor', 'a', ['four']],
  ['queror', 'queror, querī, questus sum', 'v', ['lament', 'complain about']],
  ['quī', 'quī, quae, quod', 'r', ['who', 'which']],
  ['quia', 'quia', 'c', ['because']],
  ['quicquam', 'quicquam', 'r', ['anything']],
  ['quīdam', 'quīdam, quaedam, quoddam', 'r', ['one', 'a certain']],
  ['quidem', 'quidem', 'd', ['indeed']],
  ['quīnquāgintā', 'quīnquāgintā', 'a', ['fifty']],
  ['quīnque', 'quīnque', 'a', ['five']],
  ['quis? quid?', 'quis? quid?', 'r', ['who', 'what', 'who what']],
  ['quō', 'quō', 'd', ['where', 'where to']],
  ['quod', 'quod', 'c', ['because']],
  ['quō modō', 'quō modō', 'z', ['how', 'in what way']],
  ['quondam', 'quondam', 'd', ['one day', 'once']],
  ['quoque', 'quoque', 'c', ['also', 'too']],
  ['quot', 'quot', 'a', ['how many']],
  ['quotiēns', 'quotiēns', 'd', ['whenever']],
  ['rapiō', 'rapiō, rapere, rapuī, raptus', 'v', ['seize', 'grab']],
  ['recipiō', 'recipiō, recipere, recēpī, receptus', 'v', ['recover', 'take back']],
  ['recitō', 'recitō, recitāre, recitāvī, recitātus', 'v', ['recite', 'read out']],
  ['recūsō', 'recūsō, recūsāre, recūsāvī, recūsātus', 'v', ['refuse']],
  ['reddō', 'reddō, reddere, reddidī, redditus', 'v', ['give back', 'make']],
  ['redeō', 'redeō, redīre, rediī', 'v', ['return', 'go back', 'come back']],
  ['referō', 'referō, referre, rettulī, relātus', 'v', ['bring back', 'carry', 'deliver', 'tell', 'report']],
  ['reficiō', 'reficiō, reficere, refēcī, refectus', 'v', ['repair']],
  ['rēgīna', 'rēgīna, rēgīnae, f.', 'n', ['queen']],
  ['rēgnum', 'rēgnum, rēgnī, n.', 'n', ['kingdom']],
  ['regō', 'regō, regere, rēxī, rēctus', 'v', ['rule']],
  ['regredior', 'regredior, regredī, regressus sum', 'v', ['go back', 'return']],
  ['relinquō', 'relinquō, relinquere, relīquī, relictus', 'v', ['leave']],
  ['rēs', 'rēs, reī, f.', 'n', ['thing', 'business']],
  ['rēs adversae', 'rēs adversae', 'z', ['misfortune']],
  ['resistō', 'resistō, resistere, restitī + dat.', 'v', ['resist']],
  ['respondeō', 'respondeō, respondēre, respondī', 'v', ['reply']],
  ['reveniō', 'reveniō, revenīre, revēnī', 'v', ['come back', 'return']],
  ['rē vērā', 'rē vērā', 'z', ['in fact', 'truly', 'really']],
  ['revocō', 'revocō, revocāre, revocāvī, revocātus', 'v', ['recall', 'call back']],
  ['rēx', 'rēx, rēgis, m.', 'n', ['king']],
  ['rīdeō', 'rīdeō, rīdēre, rīsī', 'v', ['laugh', 'smile']],
  ['rogō', 'rogō, rogāre, rogāvī, rogātus', 'v', ['ask']],
  ['ruō', 'ruō, ruere, ruī', 'v', ['rush']],
  ['rūrsus', 'rūrsus', 'd', ['again']],
  ['rūs', 'rūs, rūris, n.', 'n', ['country', 'countryside']],
  ['sacer', 'sacer, sacra, sacrum', 'a', ['sacred']],
  ['sacerdōs', 'sacerdōs, sacerdōtis, m./f.', 'n', ['priest']],
  ['saepe', 'saepe', 'd', ['often']],
  ['saevus', 'saevus, saeva, saevum', 'a', ['savage', 'cruel']],
  ['salūs', 'salūs, salūtis, f.', 'n', ['safety', 'health']],
  ['salūtō', 'salūtō, salūtāre, salūtāvī, salūtātus', 'v', ['greet']],
  ['salvē', 'salvē, salvēte', 'i', ['hello']],
  ['sanguis', 'sanguis, sanguinis, m.', 'n', ['blood']],
  ['sapiēns', 'sapiēns, gen. sapientis', 'a', ['wise']],
  ['satis', 'satis', 'd', ['enough']],
  ['saxum', 'saxum, saxī, n.', 'n', ['rock']],
  ['scelestus', 'scelestus, scelesta, scelestum', 'a', ['wicked']],
  ['scelus', 'scelus, sceleris, n.', 'n', ['crime']],
  ['scindō', 'scindō, scindere, scidī, scissus', 'v', ['tear', 'tear up', 'cut up']],
  ['scio', 'scio, scīre, scīvī', 'v', ['know']],
  ['scrībō', 'scrībō, scrībere, scrīpsī, scrīptus', 'v', ['write']],
  ['sē', 'sē', 'r', ['himself', 'herself', 'themselves']],
  ['secō', 'secō, secāre, secuī, sectus', 'v', ['cut', 'carve']],
  ['sēcūrus', 'sēcūrus, sēcūra, sēcūrum', 'a', ['without a care']],
  ['sed', 'sed', 'c', ['but']],
  ['sedeō', 'sedeō, sedēre, sēdī', 'v', ['sit']],
  ['semper', 'semper', 'd', ['always']],
  ['senātor', 'senātor, senātōris, m.', 'n', ['senator']],
  ['senex', 'senex, senis, m.', 'n', ['old man']],
  ['sentiō', 'sentiō, sentīre, sēnsī, sēnsus', 'v', ['feel', 'notice']],
  ['septem', 'septem', 'a', ['seven']],
  ['septuāgintā', 'septuāgintā', 'a', ['seventy']],
  ['sequor', 'sequor, sequī, secūtus sum', 'v', ['follow']],
  ['servō', 'servō, servāre, servāvī, servātus', 'v', ['save', 'look after', 'preserve']],
  ['servus', 'servus, servī, m.', 'n', ['slave']],
  ['sex', 'sex', 'a', ['six']],
  ['sexāgintā', 'sexāgintā', 'a', ['sixty']],
  ['sī', 'sī', 'c', ['if']],
  ['sīc', 'sīc', 'd', ['thus', 'in this way']],
  ['sīcut', 'sīcut', 'd', ['like']],
  ['signum', 'signum, signī, n.', 'n', ['sign', 'seal', 'signal']],
  ['silva', 'silva, silvae, f.', 'n', ['wood']],
  ['similis', 'similis, simile', 'a', ['similar']],
  ['simul', 'simul', 'd', ['at the same time']],
  ['simulac', 'simulac, simulatque', 'd', ['as soon as']],
  ['simulō', 'simulō, simulāre, simulāvī, simulātus', 'v', ['pretend']],
  ['sine + abl.', 'sine + abl.', 'p', ['without']],
  ['socius', 'socius, sociī, m.', 'n', ['companion', 'partner']],
  ['sōl', 'sōl, sōlis, m.', 'n', ['sun']],
  ['soleō', 'soleō, solēre', 'v', ['be accustomed']],
  ['sollicitus', 'sollicitus, sollicita, sollicitum', 'a', ['worried', 'anxious']],
  ['sōlus', 'sōlus, sōla, sōlum', 'a', ['alone', 'lonely', 'only', "on one's own"]],
  ['sonitus', 'sonitus, sonitūs, m.', 'n', ['sound']],
  ['soror', 'soror, sorōris, f.', 'n', ['sister']],
  ['spectāculum', 'spectāculum, spectāculī, n.', 'n', ['show', 'spectacle']],
  ['spectō', 'spectō, spectāre, spectāvī, spectātus', 'v', ['look at', 'watch']],
  ['spernō', 'spernō, spernere, sprēvī, sprētus', 'v', ['despise', 'reject', 'ignore']],
  ['spērō', 'spērō, spērāre, spērāvī', 'v', ['hope', 'expect']],
  ['spēs', 'spēs, speī, f.', 'n', ['hope']],
  ['statim', 'statim', 'd', ['at once']],
  ['stilus', 'stilus, stilī, m.', 'n', ['pen']],
  ['stō', 'stō, stāre, stetī', 'v', ['stand', 'lie at anchor']],
  ['studium', 'studium, studiī, n.', 'n', ['enthusiasm', 'keenness', 'study']],
  ['stultus', 'stultus, stulta, stultum', 'a', ['stupid', 'foolish']],
  ['suādeō', 'suādeō, suādēre, suāsī + dat.', 'v', ['advise', 'suggest']],
  ['suāvis', 'suāvis, suāve', 'a', ['sweet']],
  ['sub + abl.', 'sub + abl.', 'p', ['under', 'beneath']],
  ['subitō', 'subitō', 'd', ['suddenly']],
  ['subveniō', 'subveniō, subvenīre, subvēnī + dat.', 'v', ['help', 'come to help']],
  ['sum', 'sum, esse, fuī', 'v', ['be']],
  ['summus', 'summus, summa, summum', 'a', ['highest', 'greatest', 'top']],
  ['superbus', 'superbus, superba, superbum', 'a', ['arrogant', 'proud']],
  ['superō', 'superō, superāre, superāvī, superātus', 'v', ['overcome', 'overpower']],
  ['surgō', 'surgō, surgere, surrēxī', 'v', ['get up', 'rise']],
  ['suspicor', 'suspicor, suspicārī, suspicātus sum', 'v', ['suspect']],
  ['suus', 'suus, sua, suum', 'a', ['his', 'her', 'their', 'his own', 'their own']],
  ['taberna', 'taberna, tabernae, f.', 'n', ['shop', 'inn']],
  ['taceō', 'taceō, tacēre, tacuī', 'v', ['be silent', 'be quiet']],
  ['tacitē', 'tacitē', 'd', ['quietly', 'silently']],
  ['tacitus', 'tacitus, tacita, tacitum', 'a', ['quiet', 'silent', 'in silence']],
  ['tālis', 'tālis, tāle', 'a', ['such']],
  ['tam', 'tam', 'd', ['so']],
  ['tamen', 'tamen', 'c', ['however']],
  ['tandem', 'tandem', 'd', ['at last']],
  ['tangō', 'tangō, tangere, tetigī, tāctus', 'v', ['touch']],
  ['tantus', 'tantus, tanta, tantum', 'a', ['so great', 'such a great']],
  ['tempestās', 'tempestās, tempestātis, f.', 'n', ['storm']],
  ['templum', 'templum, templī, n.', 'n', ['temple']],
  ['temptō', 'temptō, temptāre, temptāvī, temptātus', 'v', ['try', 'put to the test']],
  ['tempus', 'tempus, temporis, n.', 'n', ['time']],
  ['teneō', 'teneō, tenēre, tenuī, tentus', 'v', ['hold']],
  ['terra', 'terra, terrae, f.', 'n', ['ground', 'land']],
  ['terreō', 'terreō, terrēre, terruī, territus', 'v', ['frighten']],
  ['testis', 'testis, testis, m./f.', 'n', ['witness']],
  ['timeō', 'timeō, timēre, timuī', 'v', ['be afraid', 'fear']],
  ['timor', 'timor, timōris, m.', 'n', ['fear']],
  ['tollō', 'tollō, tollere, sustulī, sublātus', 'v', ['raise', 'lift up', 'hold up', 'remove', 'do away with']],
  ['tot', 'tot', 'a', ['so many']],
  ['tōtus', 'tōtus, tōta, tōtum', 'a', ['whole']],
  ['trādō', 'trādō, trādere, trādidī, trāditus', 'v', ['hand over']],
  ['trahō', 'trahō, trahere, trāxī, tractus', 'v', ['drag']],
  ['trāns + acc.', 'trāns + acc.', 'p', ['across']],
  ['trānseō', 'trānseō, trānsīre, trānsiī', 'v', ['cross']],
  ['trēs', 'trēs, tria', 'a', ['three']],
  ['trīgintā', 'trīgintā', 'a', ['thirty']],
  ['trīstis', 'trīstis, trīste', 'a', ['sad']],
  ['tū', 'tū, tuī', 'r', ['you']],
  ['tum', 'tum', 'd', ['then']],
  ['tum dēmum', 'tum dēmum', 'z', ['then at last', 'only then']],
  ['turba', 'turba, turbae, f.', 'n', ['crowd']],
  ['tūtus', 'tūtus, tūta, tūtum', 'a', ['safe']],
  ['tuus', 'tuus, tua, tuum', 'a', ['your', 'yours']],
  ['ubi', 'ubi', 'd', ['where', 'when']],
  ['ubīque', 'ubīque', 'd', ['everywhere']],
  ['ūllus', 'ūllus, ūlla, ūllum', 'a', ['any']],
  ['ultimus', 'ultimus, ultima, ultimum', 'a', ['furthest', 'last']],
  ['umquam', 'umquam', 'd', ['ever']],
  ['unda', 'unda, undae, f.', 'n', ['wave']],
  ['unde', 'unde', 'd', ['from where']],
  ['undique', 'undique', 'd', ['on all sides', 'from all sides']],
  ['ūnus', 'ūnus, ūna, ūnum', 'a', ['one']],
  ['urbs', 'urbs, urbis, f.', 'n', ['city']],
  ['ut', 'ut', 'c', ['that', 'so that', 'in order that']],
  ['ut', 'ut', 'd', ['as']],
  ['ūtor', 'ūtor, ūtī, ūsus sum', 'v', ['use']],
  ['utrum', 'utrum', 'd', ['whether']],
  ['utrum ... an', 'utrum ... an', 'z', ['whether or']],
  ['uxor', 'uxor, uxōris, f.', 'n', ['wife']],
  ['valdē', 'valdē', 'd', ['very much', 'very']],
  ['valē', 'valē', 'i', ['goodbye', 'farewell']],
  ['validus', 'validus, valida, validum', 'a', ['strong']],
  ['vehementer', 'vehementer', 'd', ['violently', 'loudly']],
  ['vehō', 'vehō, vehere, vexī, vectus', 'v', ['carry']],
  ['vel', 'vel', 'c', ['or']],
  ['vēndō', 'vēndō, vēndere, vēndidī, vēnditus', 'v', ['sell']],
  ['venēnum', 'venēnum, venēnī, n.', 'n', ['poison']],
  ['veniō', 'veniō, venīre, vēnī', 'v', ['come']],
  ['ventus', 'ventus, ventī, m.', 'n', ['wind']],
  ['verberō', 'verberō, verberāre, verberāvī, verberātus', 'v', ['strike', 'beat']],
  ['verbum', 'verbum, verbī, n.', 'n', ['word']],
  ['vereor', 'vereor, verērī, veritus sum', 'v', ['be afraid', 'fear']],
  ['vērō', 'vērō', 'd', ['indeed']],
  ['vertō', 'vertō, vertere, vertī, versus', 'v', ['turn']],
  ['vērum', 'vērum, vērī, n.', 'n', ['truth', 'the truth']],
  ['vērus', 'vērus, vēra, vērum', 'a', ['true', 'real']],
  ['vester', 'vester, vestra, vestrum', 'a', ['your']],
  ['vestīmenta', 'vestīmenta, vestīmentōrum, n.pl.', 'n', ['clothes']],
  ['vetus', 'vetus, gen. veteris', 'a', ['old']],
  ['vexō', 'vexō, vexāre, vexāvī, vexātus', 'v', ['annoy']],
  ['via', 'via, viae, f.', 'n', ['street', 'way']],
  ['videō', 'videō, vidēre, vīdī, vīsus', 'v', ['see']],
  ['videor', 'videor, vidērī, vīsus sum', 'v', ['seem']],
  ['vīgintī', 'vīgintī', 'a', ['twenty']],
  ['vinciō', 'vinciō, vincīre, vīnxī, vīnctus', 'v', ['bind', 'tie up']],
  ['vincō', 'vincō, vincere, vīcī, victus', 'v', ['conquer', 'win', 'be victorious']],
  ['vīnum', 'vīnum, vīnī, n.', 'n', ['wine']],
  ['vir', 'vir, virī, m.', 'n', ['man', 'husband']],
  ['virgō', 'virgō, virginis, f.', 'n', ['virgin']],
  ['virtūs', 'virtūs, virtūtis, f.', 'n', ['courage', 'virtue']],
  ['vīta', 'vīta, vītae, f.', 'n', ['life']],
  ['vītō', 'vītō, vītāre, vītāvī, vītātus', 'v', ['avoid']],
  ['vituperō', 'vituperō, vituperāre, vituperāvī, vituperātus', 'v', ['blame', 'curse']],
  ['vīvō', 'vīvō, vīvere, vīxī', 'v', ['live', 'be alive']],
  ['vīvus', 'vīvus, vīva, vīvum', 'a', ['alive', 'living']],
  ['vix', 'vix', 'd', ['hardly', 'scarcely', 'with difficulty']],
  ['vocō', 'vocō, vocāre, vocāvī, vocātus', 'v', ['call']],
  ['volō', 'volō, velle, voluī', 'v', ['want']],
  ['volvō', 'volvō, volvere, volvī, volūtus', 'v', ['turn', 'roll']],
  ['vōs', 'vōs', 'r', ['you']],
  ['vōx', 'vōx, vōcis, f.', 'n', ['voice']],
  ['vulnerō', 'vulnerō, vulnerāre, vulnerāvī, vulnerātus', 'v', ['wound', 'injure']],
  ['vulnus', 'vulnus, vulneris, n.', 'n', ['wound']],
  ['vultus', 'vultus, vultūs, m.', 'n', ['expression', 'face']],
  ['anima', 'anima, animae, f. ', '', ['mind', 'spirit']],
  ['aquila', 'aquila, aquilae, f.', 'f.', ['eagle', 'standard']],
  ['avāritia', 'avāritia, avāritiae, f.', 'f.', ['greed']],
  ['catēna', 'catēna, catēnae, f.', 'f.', ['chain']],
  ['coma', 'coma, comae, f.', 'f.', ['hair', 'leaves']],
  ['corōna', 'corōna, corōnae, f.', 'f.', ['crown']],
  ['culpa', 'culpa, culpae, f.', 'f.', ['fault']],
  ['fāma', 'fāma, fāmae, f.', 'f.', ['rumour', 'reputation']],
  ['fōrma', 'fōrma, fōrmae, f.', 'f.', ['shape', 'beauty']],
  ['fossa', 'fossa, fossae, f.', 'f.', ['ditch', 'trench']],
  ['harēna', 'harēna, harēnae, f.', 'f.', ['sand']],
  ['inopia', 'inopia, inopiae, f.', 'f.', ['shortage']],
  ['iūstitia', 'iūstitia, iūstitiae, f.', 'f.', ['justice']],
  ['lingua', 'lingua, linguae, f.', 'f.', ['tongue', 'language']],
  ['minae', 'minae, minārum, f. pl.', '', ['threats']],
  ['mora', 'mora, morae, f.', 'f.', ['delay']],
  ['ōra', 'ōra, ōrae, f.', 'f.', ['seashore']],
  ['praeda', 'praeda, praedae, f.', 'f.', ['plunder']],
  ['rīpa', 'rīpa, rīpae, f.', 'f.', ['river bank']],
  ['sagitta', 'sagitta, sagittae, f.', 'f.', ['arrow']],
  ['scientia', 'scientia, scientiae, f.', 'f.', ['knowledge']],
  ['tenebrae', 'tenebrae, tenebrārum, f. pl.', '', ['darkness']],
  ['tuba', 'tuba, tubae, f.', 'f.', ['trumpet']],
  ['avus', 'avus, avī, m.', 'm.', ['grandfather']],
  ['dolus', 'dolus, dolī, m.', 'm.', ['trickery']],
  ['pontus', 'pontus, pontī, m.', 'm.', ['sea']],
  ['rāmus', 'rāmus, rāmī, m.', 'm.', ['branch']],
  ['rēmus', 'rēmus, rēmī, m.', 'm.', ['oar']],
  ['somnus', 'somnus, somnī, m.', 'm.', ['sleep']],
  ['umerus', 'umerus, umerī, f.', 'f.', ['shoulder']],
  ['antrum', 'antrum, antrī, n.', 'n.', ['cave']],
  ['argentum', 'argentum, argentī, n.', 'n.', ['silver']],
  ['Capitōlium', 'Capitōlium, Capitōliī, n.', 'n.', ['the capitoline hill']],
  ['exitium', 'exitium, exitiī, n.', 'n.', ['destruction']],
  ['hiberna', 'hiberna, hibernōrum, n. pl.', '', ['winter camp']],
  ['hospitium', 'hospitium, hospitiī, n.', 'n.', ['hospitality']],
  ['impedimenta', 'impedimenta, impedimentōrum, n. pl.', '', ['baggage']],
  ['ingenium', 'ingenium, ingeniī, n.', 'n.', ['character', 'ability']],
  ['iūdicium', 'iūdicium, iūdiciī, n.', 'n.', ['trial', 'sentence']],
  ['lētum', 'lētum, lētī, n.', 'n.', ['death']],
  ['ferrum', 'ferrum, ferrī, n.', 'n.', ['iron', 'sword']],
  ['ōtium', 'ōtium, ōtiī, n.', 'n.', ['leisure']],
  ['pelagus', 'pelagus, pelagī, n.', 'n.', ['open sea']],
  ['scūtum', 'scūtum, scūtī, n.', 'n.', ['shield']],
  ['similācrum', 'similācrum, simulācrī, n.', 'n.', ['image']],
  ['solum', 'solum, solī, n.', 'n.', ['ground']],
  ['supplicium', 'supplicium, suppliciī, n.', 'n.', ['death penalty']],
  ['telum', 'telum, telī, n.', 'n.', ['spear', 'javelin']],
  ['vallum', 'vallum, vallī, n.', 'n.', ['palisade']],
  ['vēlum', 'vēlum, vēlī, n.', 'n.', ['sail']],
  ['vēstīgium', 'vēstīgium, vēstīgiī, n.', 'n.', ['track']],
  ['vinculum', 'vinculum, vinculī, n.', 'n.', ['chains']],
  ['vulgus', 'vulgus, vulgī, n.', 'n.', ['rabble']],
  ['agger', 'agger, aggeris, m.', 'm.', ['rampart']],
  ['crīnis', 'crīnis, crīnis, m.', 'm.', ['hair']],
  ['ēnsis', 'ēnsis, ēnsis, m.', 'm.', ['sword']],
  ['fūnis', 'fūnis, fūnis, m.', 'm.', ['rope']],
  ['genitor', 'genitor, genitōris, m.', 'm.', ['father']],
  ['Mānēs', 'Mānēs, Mānium, m. pl.', '', ['spirits of the dead']],
  ['mōs', 'mōs, mōris, m.', 'm.', ['custom', 'tradition']],
  ['nepōs', 'nepōs, nepōtis, m.', 'm.', ['grandson']],
  ['obses', 'obses, obsidis, m./f.', '', ['hostage']],
  ['pedes', 'pedes, peditis, m.', 'm.', ['foot soldier', 'infantry']],
  ['praedō', 'praedō, praedōnis, m.', 'm.', ['robber']],
  ['pudor', 'pudor, pudōris, m.', 'm.', ['sense of honour']],
  ['sermō', 'sermō, sermōnis, m.', 'm.', ['conversation']],
  ['vātēs', 'vātēs, vātis, m.', 'm.', ['prophet']],
  ['vesper', 'vesper, vesperis, m.', 'm.', ['evening']],
  ['aestās', 'aestās, aestātis, f.', 'f.', ['summer']],
  ['aetās', 'aetās, aetātis, f.', 'f.', ['age']],
  ['altitūdō', 'altitūdō, altitūdinis, f.', 'f.', ['depth', 'height']],
  ['avis', 'avis, avis, f.', 'f.', ['bird']],
  ['classis', 'classis, classis, f.', 'f.', ['fleet']],
  ['coniūrātiō', 'coniūrātiō, coniūrātiōnis, f.', 'f.', ['conspiracy']],
  ['contentiō', 'contentiō, contentiōnis, f.', 'f.', ['struggle']],
  ['ēruptiō', 'ēruptiō, ēruptiōnis, f.', 'f.', ['counterattack']],
  ['famēs', 'famēs, famis, f.', 'f.', ['hunger']],
  ['fax', 'fax, facis, f.', 'f.', ['torch']],
  ['imāgō', 'imāgō, imāginis, f.', 'f.', ['form']],
  ['iuventūs', 'iuventūs, iuventūtis, f.', 'f.', ['youth']],
  ['māgnitūdō', 'māgnitūdō, māgnitūdinis, f.', 'f.', ['size']],
  ['mōlēs', 'mōlēs, mōlis, f.', 'f.', ['mass']],
  ['mūnitiō', 'mūnitiō, mūnitiōnis, f.', 'f.', ['fortification']],
  ['nūbēs', 'nūbēs, nūbis, f.', 'f.', ['cloud']],
  ['occāsiō', 'occāsiō, occāsiōnis, f.', 'f.', ['opportunity']],
  ['palūs', 'palūs, palūdis, f.', 'f.', ['swamp']],
  ['pellis', 'pellis, pellis, f.', 'f.', ['skin']],
  ['pestis', 'pestis, pestis, f.', 'f.', ['plague', 'destruction']],
  ['rūpēs', 'rūpēs, rūpis, f.', 'f.', ['cliff']],
  ['secūris', 'secūris, secūris, f.', 'f.', ['axe']],
  ['sīdus', 'sīdus, sīderis, n.', 'n.', ['star']],
  ['sors', 'sors, sortis, f.', 'f.', ['lot', 'fortune']],
  ['stirps', 'stirps, stirpis, f.', 'f.', ['lineage']],
  ['tellūs', 'tellūs, tellūris, f.', 'f.', ['earth']],
  ['turris', 'turris, turris, f.', 'f.', ['tower']],
  ['voluptās', 'voluptās, voluptātis, f.', 'f.', ['pleasure']],
  ['aequor', 'aequor, aequoris, n.', 'n.', ['sea']],
  ['aes', 'aes, aeris, n.', 'n.', ['bronze']],
  ['aethēr', 'aethēr, aetheris, n.', 'n.', ['sky']],
  ['certāmen', 'certāmen, certāminis, n.', 'n.', ['struggle']],
  ['cor', 'cor, cordis, n.', 'n.', ['heart']],
  ['facinus', 'facinus, facinoris, n.', 'n.', ['crime']],
  ['foedus', 'foedus, foederis, n.', 'n.', ['treaty']],
  ['fulmen', 'fulmen, fulminis, n.', 'n.', ['thunder']],
  ['fūnus', 'fūnus, fūneris, n.', 'n.', ['funeral']],
  ['lūmen', 'lūmen, lūminis, n.', 'n.', ['light']],
  ['nemus', 'nemus, nemoris, n.', 'n.', ['grove']],
  ['nūmen', 'nūmen, nūminis, n.', 'n.', ['divinity']],
  ['onus', 'onus, oneris, n.', 'n.', ['burden']],
  ['ōs', 'ōs, ōris, n.', 'n.', ['face']],
  ['os', 'os, ossis, n.', 'n.', ['bone']],
  ['pondus', 'pondus, ponderis, n.', 'n.', ['weight']],
  ['adventus', 'adventus, adventūs, m.', 'm.', ['arrival']],
  ['cāsūs', 'cāsūs, cāsūs, m.', 'm.', ['chance', 'accident', 'fall']],
  ['cōnsulātus', 'cōnsulātus, cōnsulātūs, m.', 'm.', ['consulship']],
  ['cornū', 'cornū, cornūs, n.', 'n.', ['horn']],
  ['equitātus', 'equitātus, equitātūs, m.', 'm.', ['cavalry']],
  ['fluctus', 'fluctus, fluctūs, n.', 'n.', ['wave']],
  ['impetus', 'impetus, impetūs, m.', 'm.', ['rush', 'attack']],
  ['lūctus', 'lūctus, lūctus, m.', 'm.', ['mourning']],
  ['sinus', 'sinus, sinūs, m.', 'm.', ['curve', 'bay']],
  ['strepitus', 'strepitus, strepitūs, m.', 'm.', ['uproar']],
  ['tumultus', 'tumultus, tumultūs, m.', 'm.', ['riot']],
  ['versus', 'versus, versūs, m.', 'm.', ['verse']],
  ['aciēs', 'aciēs, aciēī, f.', 'f.', ['battle-line']],
  ['effigiēs', 'effigiēs, effigiēī, f.', 'f.', ['likeness']],
  ['faciēs', 'faciēs, faciēī, f.', 'f.', ['face']],
  ['rēs pūblica', 'rēs pūblica, rēī pūblicae, f.', 'f.', ['state', 'government']],
  ['acerbus', 'acerbus, acerba, acerbum', '', ['bitter']],
  ['adversus', 'adversus, adversa, adversum', '', ['opposite']],
  ['aeturnus', 'aeturnus, aeturna, aeturnum', '', ['everlasting']],
  ['aliēnus', 'aliēnus, aliēna, aliēnum', '', ['foreign']],
  ['angustus', 'angustus, angusta, angustum', '', ['narrow']],
  ['arduus', 'arduus, ardua, arduum', '', ['steep']],
  ['asper', 'asper, aspera, asperum', '', ['rough']],
  ['āter', 'āter, ātra, ātrum', '', ['black']],
  ['aureus', 'aureus, aurea, aureum', '', ['golden']],
  ['caecus', 'caecus, caeca, caecum', '', ['blind']],
  ['cōnfertus', 'cōnfertus, cōnferta, cōnfertum', '', ['crowded']],
  ['cōnscius', 'cōnscius, cōnscia, cōnscium', '', ['aware']],
  ['crēber', 'crēber, crēbra, crēbrum', '', ['frequent', 'thick']],
  ['cūnctus', 'cūnctus, cūncta, cūnctum', '', ['all']],
  ['dēfessus', 'dēfessus, dēfessa, dēfessum', '', ['exhausted']],
  ['dexter', 'dexter, dextra, dextrum', '', ['right']],
  ['dīversus', 'dīversus, dīversa, dīversum', '', ['different from']],
  ['dubius', 'dubius, dubia, dubium', '', ['doubtful']],
  ['ēgregius', 'ēgregius, ēgregia, ēgregium', '', ['outstanding']],
  ['exiguus', 'exiguus, exigua, exiguum', '', ['short']],
  ['ferus', 'ferus, fera, ferum', '', ['wild']],
  ['geminus', 'geminus, gemina, geminum', '', ['twin']],
  ['idōneus', 'idōneus, idōnea, idōneum', '', ['suitable']],
  ['ignōtus', 'ignōtus, ignōta, ignōtum', '', ['unknown']],
  ['improbus', 'improbus, improba, improbum', '', ['wicked']],
  ['imprōvisus', 'imprōvisus, imprōvisa, imprōvisum', '', ['unforeseen']],
  ['īmus', 'īmus, īma, īmum', '', ['lowest']],
  ['īnfēstus', 'īnfēstus, īnfēsta, īnfēstum', '', ['hostile']],
  ['integer', 'integer, integra, integrum', '', ['whole']],
  ['invīsus', 'invīsus, invīsa, invīsum', '', ['hated']],
  ['laevus', 'laevus, laeva, laevum', '', ['left']],
  ['lātus', 'lātus, lāta, lātum', '', ['wide']],
  ['liber', 'liber, libera, liberum', '', ['free']],
  ['obscūrus', 'obscūrus, obscūra, obscūrum', '', ['dark']],
  ['posterus', 'posterus, postera, posterum', '', ['following']],
  ['reliquus', 'reliquus, reliqua, reliquum', '', ['remaining']],
  ['superus', 'superus, supera, superum', '', ['upper']],
  ['ācer', 'ācer, ācris, ācre', '', ['sharp']],
  ['commūnis', 'commūnis, commūne', '', ['common']],
  ['dulcis', 'dulcis, dulce', '', ['sweet']],
  ['felīx', 'felīx, felīcis', '', ['lucky']],
  ['mollis', 'mollis, molle', '', ['soft']],
  ['pār', 'pār, paris', '', ['equal']],
  ['quīcumque', 'quīcumque, quaecumque, quodcumque', '', ['whoever', 'whatever']],
  ['quisque', 'quisque, quaeque, quodque', '', ['each']],
  ['uterque', 'uterque, utraque, utrumque', '', ['each']],
  ['dēferō', 'dēferō, dēferre, dētulī, dēlātum', '', ['carry away']],
  ['praesum', 'praesum, praeesse, praefuī (+ dat)', '', ['be in charge']],
  ['licet', 'licet, licēre, licuit', '', ['be permitted']],
  ['meminī', 'meminī, meminisse', '', ['remember']],
  ['aggredior', 'aggredior, aggredī, aggressus sum', '', ['attack']],
  ['praeficiō', 'praeficiō, praeficere, praefēcī, praefectum', '', ['put in charge']],
  ['experior', 'experior, experīrī, expertus sum', '', ['test out']],
  ['mūniō', 'mūniō, mūnīre, mūnīvī, mūnītum', '', ['fortify']],
  ['accēdō', 'accēdō, accēdere, accessī, accessum', '', ['approach']],
  ['addō', 'addō, addere, addidī, additum', '', ['add']],
  ['caedō', 'caedō, caedere, cecīdī, caesum', '', ['strike']],
  ['colō', 'colō, colere, coluī, cultum', '', ['cultivate', 'practise', 'cherish', 'live in']],
  ['dēdūcō', 'dēdūcō, dēdūcere, dēdūxī, dēductum', '', ['withdraw']],
  ['dēligō', 'dēligō, dēligere, dēlēgī, dēlēctum', '', ['choose']],
  ['īnstituō', 'īnstituō, īnstituere, īnstituī, īnstitūtum', '', ['set up']],
  ['metuō', 'metuō, metuere, metuī, metūtum', '', ['fear']],
  ['pellō', 'pellō, pellere, pepulī, pulsum', '', ['drive away']],
  ['premō', 'premō, premere, pressī, pressum', '', ['press']],
  ['prōpōnō', 'prōpōnō, prōpōnere, prōposuī, prōpositum', '', ['propose']],
  ['sē recipere', 'sē recipere', '', ['retreat']],
  ['solvō', 'solvō, solvere, solvī, solūtum', '', ['release']],
  ['retineō', 'retineō, retinēre, retinuī, retentum', '', ['hold back']],
  ['arbitror', 'arbitror, arbitrarī, arbitrātus sum', '', ['think']],
  ['fugō', 'fugō, fugāre, fugāvī, fugātum', '', ['put to flight']],
  ['for', 'for, fārī, fātus sum', '', ['speak']],
  ['iūrō', 'iūrō, iūrāre, iūrāvī, iūrātum', '', ['swear']],
  ['iuvō', 'iuvō, iuvāre, iūvī, iūtum', '', ['help']],
  ['negō', 'negō, negāre, negāvī, negātum', '', ['deny', 'refuse']],
  ['occupō', 'occupō, occupāre, occupāvī, occupātum', '', ['seize']],
  ['praestō', 'praestō, praestāre, praestitī, praestitum', '', ['stand out']],
  ['vastō', 'vastō, vastāre, vastāvī, vastātum', '', ['devastate']],
  ['-ve', '-ve', '', ['or']],
  ['causā (+ gen)', 'causā (+ gen)', '', ['for the sake of']],
  ['propter (+ acc)', 'propter (+ acc)', '', ['because of']],
  ['super (+ abl)', 'super (+ abl)', '', ['on top of']],
  ['antequam', 'antequam', '', ['before']],
  ['aut . . . aut', 'aut . . . aut', '', ['either ... or']],
  ['vel . . . vel', 'vel . . . vel', '', ['either ... or']],
  ['amplius', 'amplius', '', ['more']],
  ['circiter', 'circiter', '', ['about']],
  ['eō', 'eō', '', ['in that place', 'there', 'is']],
  ['ferē', 'ferē', '', ['almost']],
  ['interim', 'interim', '', ['meanwhile']],
  ['itaque', 'itaque', '', ['and so']],
  ['longē', 'longē', '', ['far off']],
  ['nondum', 'nondum', '', ['not yet']],
  ['parum', 'parum', '', ['too little']],
  ['prīmum', 'prīmum', '', ['at first']],
  ['quā', 'quā', '', ['where']],
  ['tantum', 'tantum', '', ['only', 'so great']],
  ['velut', 'velut', '', ['just as']]
]
let stage = [
  [89, 153, 275, 322, 348, 349, 391, 434, 553, 700, 709, 744, 824],
  [38, 43, 104, 109, 213, 217, 370, 394, 396, 443, 651, 685],
  [8, 82, 111, 115, 225, 243, 250, 254, 331, 377, 402, 423, 478, 499, 586, 670, 675, 686, 748, 751, 825, 830],
  [28, 49, 152, 165, 224, 229, 231, 246, 308, 360, 385, 440, 561, 580, 629, 646, 658, 689, 699, 715, 781, 840],
  [14, 29, 36, 71, 116, 145, 169, 258, 266, 317, 388, 445, 467, 469, 539, 572, 574, 620, 703, 730, 736, 784, 787, 796, 811],
  [3, 160, 235, 268, 271, 285, 296, 366, 411, 531, 551, 562, 592, 625, 648, 667, 695, 742, 747, 782, 786, 809, 836],
  [105, 139, 162, 261, 313, 357, 365, 393, 464, 473, 483, 491, 533, 549, 618, 676, 753, 757, 767, 803],
  [25, 144, 219, 259, 269, 303, 314, 337, 518, 570, 585, 594, 621, 623, 682, 687, 716, 729, 734, 773],
  [27, 102, 164, 193, 207, 234, 267, 318, 323, 341, 362, 383, 430, 438, 466, 530, 544, 590, 609, 624, 671, 774],
  [2, 6, 87, 146, 249, 289, 309, 346, 371, 406, 503, 517, 560, 587, 631, 701, 708, 726, 750, 752, 802, 806, 843],
  [92, 113, 149, 157, 172, 237, 265, 373, 400, 407, 449, 470, 504, 516, 573, 603, 617, 622, 702, 725, 738, 804, 813, 831],
  [39, 128, 170, 221, 238, 278, 286, 291, 293, 295, 327, 330, 335, 452, 455, 459, 538, 546, 704, 758, 762, 766, 769, 778, 795],
  [15, 17, 19, 33, 90, 108, 171, 192, 248, 270, 369, 381, 497, 508, 511, 589, 677, 696, 775, 834, 841, 845],
  [31, 54, 65, 74, 155, 178, 182, 190, 194, 197, 212, 216, 272, 375, 378, 433, 481, 512, 631, 632, 674, 787],
  [26, 32, 55, 118, 125, 174, 240, 245, 344, 397, 401, 415, 432, 454, 476, 604, 639, 659, 681, 765, 792, 829],
  [18, 77, 83, 136, 137, 180, 181, 227, 279, 345, 367, 379, 439, 477, 501, 563, 582, 593, 626, 719, 745, 771, 817],
  [1, 45, 53, 56, 80, 81, 203, 257, 260, 307, 325, 364, 374, 380, 436, 485, 515, 556, 569, 650, 655, 669],
  [70, 94, 119, 121, 173, 184, 199, 283, 332, 405, 431, 446, 472, 486, 523, 550, 572, 591, 607, 647, 657, 724],
  [40, 97, 120, 127, 132, 168, 274, 281, 284, 304, 310, 342, 382, 416, 429, 507, 565, 576, 588, 772, 823, 837, 839, 844],
  [9, 58, 61, 159, 175, 186, 189, 209, 214, 221, 356, 409, 419, 463, 506, 525, 527, 567, 571, 628, 637, 644, 645, 666, 705, 710, 714, 756, 763, 778, 779, 795, 827, 846],
  [1, 13, 46, 103, 110, 222, 226, 282, 306, 320, 355, 384, 460, 502, 519, 535, 575, 577, 602, 680, 688, 793],
  [41, 12, 86, 177, 233, 294, 324, 329, 353, 392, 450, 458, 509, 547, 634, 649, 785, 814, 833, 835],
  [101, 117, 166, 236, 302, 319, 328, 343, 427, 457, 493, 542, 548, 694, 755, 791, 810],
  [67, 69, 95, 131, 163, 188, 239, 280, 326, 368, 435, 487, 537, 552, 583, 777, 780, 818],
  [5, 31, 50, 76, 98, 122, 133, 195, 253, 255, 395, 489, 498, 566, 578, 579, 678, 691, 740, 768],
  [72, 78, 79, 126, 208, 263, 273, 363, 398, 399, 505, 513, 596, 652, 660, 663, 683, 712, 790, 797],
  [10, 48, 51, 59, 123, 297, 336, 347, 352, 361, 387, 431, 496, 597, 598, 619, 630, 741, 754, 760],
  [4, 64, 106, 141, 154, 175, 210, 221, 299, 376, 426, 428, 444, 447, 448, 500, 506, 524, 525, 526, 534, 628, 637, 641, 644, 645, 705, 706, 710, 711, 713, 733, 778, 779, 795, 798, 812, 827],
  [30, 62, 68, 93, 112, 179, 198, 211, 351, 408, 420, 425, 528, 564, 584, 605, 684, 692, 731, 788, 820, 838],
  [11, 21, 22, 35, 143, 183, 204, 205, 300, 359, 422, 475, 492, 495, 532, 540, 559, 635, 690, 697, 723, 728, 770],
  [34, 47, 138, 223, 290, 312, 333, 334, 479, 484, 543, 654, 693, 732, 746, 764, 794, 807, 828, 842, 847],
  [16, 20, 130, 150, 228, 340, 390, 410, 441, 480, 482, 488, 536, 545, 558, 642, 668, 743],
  [52, 63, 84, 134, 147, 148, 156, 176, 187, 232, 244, 247, 292, 315, 418, 465, 494, 514, 595, 640, 661, 662, 672, 800, 819],
  [7, 12, 66, 124, 135, 140, 220, 230, 288, 298, 311, 321, 358, 417, 437, 456, 461, 474, 554, 601, 606, 611, 614, 615, 636, 665, 707, 721, 727, 749, 808, 821],
  [24, 42, 96, 100, 161, 354, 421, 424, 462, 468, 520, 633, 643, 653, 679, 718, 801],
  [44, 60, 99, 200, 215, 256, 276, 338, 453, 479, 490, 599, 600, 656, 759, 822],
  [129, 196, 201, 206, 218, 251, 277, 522, 529, 555, 557, 568, 613, 627, 673, 698, 761, 776, 805],
  [107, 114, 151, 191, 242, 264, 305, 339, 386, 404, 412, 510, 541, 581, 610, 616, 638, 664, 815, 816, 832],
  [57, 75, 85, 88, 91, 202, 241, 262, 287, 301, 316, 389, 413, 414, 442, 720, 735, 737, 789],
  [23, 37, 73, 142, 158, 167, 185, 252, 350, 372, 403, 451, 471, 521, 608, 612, 717, 722, 739, 783, 799, 826],
  [848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072]
]

/*----------------
    VARIABLES
----------------*/

// settings
let sSettingsOpen = false;
let sAnimationDuration = 0.75;
let sSecondChance = true;
let sDopamineBox = false;
// stages
let stagesSelected = "00000000000000000000000000000000000000000";
// timer
let time = 0;
let timerInterval;
// stats
let stCycleCount = 0;
let stCyclePercentage = 0;
let stWordsTested = 0;
let stWordsCorrect = 0;
let stCorrectPercentage = 0;
// dopamine box
let currentDay = (new Date(Date.now()).getDay() + 6) % 7;
let currentWeek = Math.floor(Date.now() / 86400000) - currentDay;
let dbTestsCompleted = "0000000";
// test options
let testOptionsTypes = ["cycle", "word", "s", "m"];
let testOptionsType = 0;
let testOptionsValue = 0;
// word list
let selectedWordlist = [0];
let currentWordlist = [0];
// current words
let currentWords = [0, 0, 0, 0];
let currentPrompts = ["", "", "", ""];
let currentPoss = ["", "", "", ""];
let currentFullNames = ["", "", "", ""];
let previousInput = "";
// animation states
let normalWordState = ["word-small", "word-big", "word-small", "word-gone"];
let animatedWordState = ["word-gone", "word-small", "word-big", "word-small"];
// test results
let wordResultsList = [];
let categoryTypes = ["⎁ WORD", "⌸ STAGE"];
let sortTypes = ["Ⓐ ALPHABETICAL", "🠫 INCORRECT", "🠩 CORRECT"];
let categoryType = 0;
let sortType = 0;
// states
let wait = true;
let chances = 1;
let canSelectStages = true;

/*----------------
     ELEMENTS
----------------*/

// root
let hRoot = document.querySelector(":root");
// screens
let hTestScreen = document.querySelectorAll(".test");
let hHomeScreen = document.querySelectorAll(".home");
let hEndScreen = document.querySelectorAll(".end");
// settings 
let hSettingsButton = document.querySelector(".settings-icon");
let hSettings = document.querySelector(".settings");
let hsAnimationDuration = document.getElementById("animation-duration");
let hsSecondChance = document.getElementById("second-chance");
let hsDopamineBox = document.getElementById("dopamine-box");
// stage buttons
let hStageButtons = document.querySelectorAll(".stage-button");
// stats
let hTimer = document.querySelector(".timer");
let hCycleProgress = document.querySelector(".cycle-progress-text");
let hTestProgress = document.querySelector(".test-progress-text");
let hScoreCount = document.querySelector(".score-count");
// dopamine box
let hDopamineBox = document.querySelector(".dopamine-box");
let hDBWeek = document.querySelector(".db-week");
let hDBDays = document.querySelectorAll(".db-day");
// test options input
let hTestOptions = document.getElementById("test-options");
// buttons
let hStartButton = document.querySelector(".start-button");
let hFreeButton = document.querySelector(".free-button");
let hHomeButton = document.querySelector(".home-button");
let hAgainButton = document.querySelector(".again-button");
let hTiwaButton = document.querySelector(".tiwa-button");
let hEndTestButton = document.querySelector(".end-test-button");
// current words
let hWords = document.querySelectorAll(".word");
let hCurrentInput = document.getElementById("c-input");
let hPreviousInput = document.getElementById("p-input");
let hNextInput = document.getElementById("n-input");
// end screen
let hResults = document.querySelector(".results");
let hResultBar = document.querySelector(".result-bar");
let hResultBarInner = document.querySelector(".result-bar-inner");
let hWordResults = document.querySelector(".word-results");
let hWordResultEx = document.querySelector(".word-result-example");
// results options
let hCategoryType = document.getElementById("category");
let hSortType = document.getElementById("sort");

/*----------------
     UTILITY
----------------*/

// WRITE TO LOCAL STORAGE
function write(key, value) {
  const d = new Date();
  d.setTime(d.getTime() + 86400000000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

// READ FROM LOCAL STORAGE
function read(key) {
  key = key + "=";
  let cookies = decodeURIComponent(document.cookie);
  cookies = cookies.split(";");
  for (let cookie of cookies) {
    while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
    if (cookie.indexOf(key) == 0) return cookie.substring(key.length, cookie.length);
    // eat(cookie);
  }
  return "";
}

// SORT BY WORDS WRONG
function sortWordsWrong(a, b) {
  if (a[1] - a[2] === b[1] - b[2]) return (a[0] < b[0]) ? -1 : 1;
  else return (a[1] - a[2] > b[1] - b[2]) ? -1 : 1;
}

// SORT BY WORDS CORRECT
function sortWordsCorrect(a, b) {
  if (a[2] == b[2]) return (a[0] < b[0]) ? -1 : 1;
  else return (a[2] > b[2]) ? -1 : 1;
}

// SORT BY ALPHABETICAL
function sortAlphabetical(a, b) {
  return (a[0] < b[0]) ? -1 : 1;
}

// REMOVE CASE AND STRIP STRING
function clean(x) {
  x = x.toLowerCase();
  x = x.trim();
  return x;
}

// CHANGE SCREEN
function changeScreen(screenNum) {
  // home screen
  for (let element of hHomeScreen) {
    if (screenNum === 0) element.style.visibility = 'visible';
    else element.style.visibility = 'hidden';
  }
  // test screen
  for (let element of hTestScreen) {
    if (screenNum === 1) element.style.visibility = 'visible';
    else element.style.visibility = 'hidden';
  }
  // end screen
  for (let element of hEndScreen) {
    if (screenNum === 2) element.style.visibility = 'visible';
    else element.style.visibility = 'hidden';
  }
}

/*----------------
     SETTINGS
----------------*/

// LOAD SETTINGS FROM LOCAL STORAGE
function loadSettings() {
  // read settings from local storage
  if (read("animation-duration") !== "") sAnimationDuration = parseFloat(read("animation-duration"));
  if (read("second-chance") !== "") sSecondChance = read("second-chance") === "true";
  if (read("dopamine-box") !== "") sDopamineBox = read("dopamine-box") === "true";
  displaySettings();
  updateSettings();
}

// DISPLAY SETTINGS VALUES 
function displaySettings() {
  // display settings in settings panel
  hsAnimationDuration.value = sAnimationDuration.toString();
  hsSecondChance.checked = sSecondChance;
  hsDopamineBox.checked = sDopamineBox;
}

// UPDATE THE SETTINGS (SAVE)
function updateSettings() {
  // animation duration
  sAnimationDuration = parseFloat(hsAnimationDuration.value);
  for (let wordElement of hWords) wordElement.style.transition = "all " + (sAnimationDuration*2/3).toString() + "s, margin-bottom " + sAnimationDuration.toString() + "s, visibility 0s";
  // second chance
  sSecondChance = hsSecondChance.checked;
  if (sSecondChance) chances = 1;
  else chances = 0;
  // dopamine box
  sDopamineBox = hsDopamineBox.checked;
  if (sDopamineBox) hDopamineBox.style.display = "block";
  else hDopamineBox.style.display = "none";
  // write settings to local storage
  write("animation-duration", sAnimationDuration.toString());
  write("second-chance", sSecondChance.toString());
  write("dopamine-box", sDopamineBox.toString());
}

// SHOW SETTINGS PANEL WHEN ICON IS CLICKED (TOGGLE)
hSettingsButton.onclick = function() {
  // toggle the settings open
  sSettingsOpen = !sSettingsOpen;
  // open or close the settings
  if (sSettingsOpen) hSettings.style.display = "block";
  if (!sSettingsOpen) hSettings.style.display = "none";
}

// update settings whenever an input field is changed
hsAnimationDuration.onkeyup = function() {updateSettings()};
hsSecondChance.onclick = function() {updateSettings()};
hsDopamineBox.onclick = function() {updateSettings()};

/*----------------
      STAGES
----------------*/

// LOAD STAGES FROM LOCAL STRAGE
function loadStages() {
  if (read("stages-selected") !== "") stagesSelected = read("stages-selected");
  displayStages();
}

// DISPLAY STAGES
function displayStages() {
  for (let i = 0; i < 41; i++) {
    if (stagesSelected[i] === "0") hStageButtons[i].style.backgroundColor = "#313244";
    else hStageButtons[i].style.backgroundColor = "#11111b";
  }
}

// STAGE SELECTION
for (let i = 0; i < 41; i++) {
  hStageButtons[i].onclick = function(event) {
    if (!canSelectStages) return;
    // shift click: toggle up to
    if (event.shiftKey) {
      if (stagesSelected[i] === "0") stagesSelected = "1".repeat(i + 1) + stagesSelected.substring(i + 1);
      else stagesSelected = "0".repeat(i + 1) + stagesSelected.substring(i + 1);
    }
    // normal click: toggle single
    else {
      if (stagesSelected[i] === "0") stagesSelected = stagesSelected.substring(0, i) + "1" + stagesSelected.substring(i + 1);
      else stagesSelected = stagesSelected.substring(0, i) + "0" + stagesSelected.substring(i + 1);
    }
    // write stages selected to local storage
    write("stages-selected", stagesSelected);
    displayStages();
    // reintialise the test
    initialise();
  }
}

/*----------------
      STATS
----------------*/

// RESET STATS
function resetStats() {
  stCycleCount = 0;
  stCyclePercentage = 0;
  stWordsTested = 0;
  stWordsCorrect = 0;
  stCorrectPercentage = 0;
}

// DISPLAY STATS
function displayStats() {
  // test progress
  stCorrectPercentage = Math.floor((stWordsCorrect / stWordsTested) * 100)
  if (stWordsTested === 0) stCorrectPercentage = 0;
  hTestProgress.textContent = stCorrectPercentage.toString() + "%";
  hRoot.style.setProperty("--test-progress-percentage", stCorrectPercentage);
  // cycle progress
  stCycleCount = Math.floor(stWordsTested / selectedWordlist.length);
  hCycleProgress.textContent = stCycleCount;
  stCyclePercentage = Math.floor(((stWordsTested % selectedWordlist.length) / selectedWordlist.length) * 100);
  if (selectedWordlist.length === 0) stCyclePercentage = 0;
  hRoot.style.setProperty("--cycle-progress-percentage", stCyclePercentage);
  // score count
  hScoreCount.textContent = stWordsCorrect.toString() + "/" + stWordsTested.toString();
}

// DISPLAY TIMER
function displayTimer() {
  hTimer.textContent = ("00" + Math.floor(time / 60)).slice(-2) + 
                 ":" + ("00" + (time % 60)).slice(-2);
}

/*----------------
   DOPAMINE BOX
----------------*/

// LOAD DOPAMINE BOX
function loadDopamineBox() {
  if (currentWeek === parseInt(read("db-week"))) {
    dbTestsCompleted = read("db-completed");
  } else {
    write("db-completed", "0000000");
    dbTestsCompleted = "0000000";
  }
  displayDopamineBox();
}

// DISPLAY DOPAMINE BOX
function displayDopamineBox() {
  for (let i = 0; i < 7; i++) {
    if (dbTestsCompleted[i] === "1") {
      hDBDays[i].style.backgroundColor = "var(--c-green)";
    }
  }
  if (dbTestsCompleted === "1111111") {
    hDBWeek.style.backgroundColor = "var(--c-green)";
  }
}

// SAVE DOPAMINE BOX
function saveDopamineBox() {
  write("db-week", currentWeek);
  write("db-completed", dbTestsCompleted);
}

/*----------------
      TEST
----------------*/

// DISPLAY ALL
function display() {
  getWordInfo();
  displayWords();
  displayStats();
}

// DISPLAY WORDS
function displayWords() {
  // prompt, pos, full name
  for (let i = 0; i < 4; i++) {
    hWords[i].querySelector(".prompt").textContent = currentPrompts[i];
    hWords[i].querySelector(".part-of-speech").textContent = currentPoss[i];
    hWords[i].querySelector(".full-name").textContent = currentFullNames[i];
  }
  // display input history
  hPreviousInput.value = previousInput;
}

// CHECK CORRECT OR NOT
function check(input, translations) {
  input = input.split(",");
  for (let i = 0; i < input.length; i++) input[i] = clean(input[i]);
  for (let i = 0; i < input.length; i++) {
    let isCorrect = false;
    for (let j = 0; j < translations.length; j++) {
      if (input[i] === clean(translations[j])) isCorrect = true;
    }
    if (!isCorrect) return false;
  }
  return true;
}

// GET INFORMATION FOR CURRENT WORDS
function getWordInfo() {
  // prompt, pos, full name
  for (let i = 0; i < 4; i++) {
    currentPrompts[i] = word[currentWords[i]][0];
    currentPoss[i] = word[currentWords[i]][2];
    currentFullNames[i] = word[currentWords[i]][1];
  }
}

// GET NEW WORD INFORMATION
function getNewWord() {
  if (currentWordlist.length === 0) {
    currentWordlist = [...selectedWordlist];
  }
  previousInput = hCurrentInput.value;
  hCurrentInput.value = hNextInput.value;
  hNextInput.value = "";
  // shift
  currentWords.splice(0, 1);
  let random = Math.floor(Math.random() * currentWordlist.length);
  currentWords.push(currentWordlist[random]);
  currentWordlist.splice(random, 1);
  display();
}

// INITIALISE WORDLIST AND WORDS
function initialise(fillSelectedWordList = true) {
  resetStats();
  // fill selected word list
  if (fillSelectedWordList) {
    selectedWordlist = [];
    let aStageIsSelected = false;
    for (let i = 0; i < 41; i++) {
      if (stagesSelected[i] === '1') { // if a stage it selected
        aStageIsSelected = true;
        // add all words in the stage
        for (let j = 0; j < stage[i].length; j++) {
          selectedWordlist.push(stage[i][j]);
        }
      }
    }
    // if no stages are selected, use buffers
    if (!aStageIsSelected) {
      selectedWordlist = [0];
    }
  }
  currentWords = [0, 0, 0, 0];
  // add words to the results list
  wordResultsList = [];
  for (let wordId of selectedWordlist) {
    wordResultsList.push([wordId, 0, 0]);
  }
  // fill up the current word list
  currentWordlist = [...selectedWordlist];
  // get 3 starting words
  for (let i = 0; i < 3; i++) {
    getNewWord();
  }
  // display
  display();
  // allow inputs
  wait = false;
  hCurrentInput.select();
}

// CHECK IF THE TEST SHOULD END
function checkEndTest() {
  // cycles
  if (testOptionsType === 0) {
    if (stCycleCount >= testOptionsValue) {
      endTest();
    }
  } 
  // words
  if (testOptionsType === 1) {
    if (stWordsTested >= testOptionsValue) {
      endTest();
    }
  }
}

// RUN
function run() {
  if (check(clean(hCurrentInput.value), word[currentWords[1]][3])) {
    if (sSecondChance) chances = 1;
    // the input is correct
    for (let i = 0; i < 4; i++) {hWords[i].classList.remove(normalWordState[i]);}
    for (let i = 0; i < 4; i++) {hWords[i].classList.add(animatedWordState[i]);}
    hCurrentInput.style.color = "#53b15a";
    // select next input
    hNextInput.readOnly = false;
    hNextInput.focus();
    wait = true;
    setTimeout(function() {
      // after the animation
      for (let i = 0; i < 4; i++) {hWords[i].classList.add("dont-animate");}
      getNewWord();
      display();
      // remove animations
      for (let i = 0; i < 4; i++) {hWords[i].classList.add(normalWordState[i]);}
      for (let i = 0; i < 4; i++) {hWords[i].classList.remove(animatedWordState[i]);}
      hCurrentInput.style.color = "#9399b2";
      hPreviousInput.style.color = "#53b15a";
      for (let i = 0; i < 4; i++) {hWords[i].offsetHeight}
      for (let i = 0; i < 4; i++) {hWords[i].classList.remove("dont-animate");}
      // update stats
      stWordsTested += 1;
      stWordsCorrect += 1;
      displayStats();
      // update word results
      for (let i = 0; i < wordResultsList.length; i++) {
        if (wordResultsList[i][0] === currentWords[0]) {
          wordResultsList[i][1] += 1;
          wordResultsList[i][2] += 1;
        }
      }
      // reselect current input
      hNextInput.readOnly = true;
      hCurrentInput.focus();
      wait = false;
    }, Math.floor(sAnimationDuration * 1000));
  }
  else {
    // the input is wrong
    if (chances) {
      wait = true;
      chances -= 1;
      hCurrentInput.classList.add("shake-animation");
      setTimeout(function() {
        hCurrentInput.classList.remove("shake-animation");
        hCurrentInput.value = "";
        wait = false;
      }, 250);
    }
    else {
      if (sSecondChance) chances = 1;
      // the input is wrong
      for (let i = 0; i < 4; i++) {hWords[i].classList.remove(normalWordState[i]);}
      for (let i = 0; i < 4; i++) {hWords[i].classList.add(animatedWordState[i]);}
      hCurrentInput.style.color = "#d9515c";
      // select next input
      hNextInput.readOnly = false;
      hNextInput.select();
      wait = true;
      setTimeout(function() {
        // after the animation
        for (let i = 0; i < 4; i++) {hWords[i].classList.add("dont-animate");}
        getNewWord();
        display();
        // remove animations
        for (let i = 0; i < 4; i++) {hWords[i].classList.add(normalWordState[i]);}
        for (let i = 0; i < 4; i++) {hWords[i].classList.remove(animatedWordState[i]);}
        hCurrentInput.style.color = "#9399b2";
        hPreviousInput.style.color = "#d9515c";
        for (let i = 0; i < 4; i++) {hWords[i].offsetHeight}
        for (let i = 0; i < 4; i++) {hWords[i].classList.remove("dont-animate");}
        // show correct translation
        let translations = word[currentWords[0]][3][0];
        for (let i = 1; i < word[currentWords[0]][3].length; i++) translations += ", " + word[currentWords[0]][3][i];
        hPreviousInput.value = translations;
        // update stats
        stWordsTested += 1;
        displayStats();
        // update word results
        for (let i = 0; i < wordResultsList.length; i++) {
          if (wordResultsList[i][0] === currentWords[0]) {
            wordResultsList[i][1] += 1;
          }
        }
        // reselect current input
        hNextInput.readOnly = true;
        hCurrentInput.select();
        wait = false;
      }, Math.floor(sAnimationDuration * 1000));
    }
  }
  // check if the test should end
  setTimeout(function() {checkEndTest()}, Math.floor(sAnimationDuration * 1000) + 5);
}

// Shuffle when the enter key is pressed
document.body.addEventListener('keydown', function (event) {
  const key = event.key;
  switch (key) {
    case "Enter":
      if (!wait) run();
  }
});

/*----------------
   HOME AND END
----------------*/

// START TEST WITH CURRENT OPTIONS
function startTest() {
  let testOptionsInput = hTestOptions.value.split(" ");
  // if not a valid test option
  if (!testOptionsTypes.includes(testOptionsInput[0]) || Number.isNaN(parseInt(testOptionsInput[1]))) {
    hTestOptions.classList.add("shake-animation");
    setTimeout(function() {hTestOptions.classList.remove("shake-animation")}, 250);
    return;
  }
  // if no stages are selected
  if (stagesSelected === "00000000000000000000000000000000000000000") {
    document.querySelector(".select-stages-prompt").classList.add("shake-animation");
    setTimeout(function() {document.querySelector(".select-stages-prompt").classList.remove("shake-animation")}, 250);
    return;
  }

  // change the screen
  changeScreen(1);
  // get settings
  testOptionsType = testOptionsTypes.indexOf(testOptionsInput[0]);
  testOptionsValue = parseInt(testOptionsInput[1]);
  // if timed test, calculate the time and start timer
  if (testOptionsType === 3) testOptionsValue = testOptionsValue * 60;
  if (testOptionsType < 2) {
    hTimer.style.visibility = "hidden";
  }
  else {
    hTimer.style.visibility = "visible";
    time = testOptionsValue;
    displayTimer();
    timerInterval = setInterval(function() {
      time -= 1;
      displayTimer();
    }, 1000);
    setTimeout(function() {
      endTest();
    }, 1000 * testOptionsValue);
  }
  // freeze stage lists
  canSelectStages = false;
  // start the test
  initialise();
}

// FREE MODE
function free() {
  // change the screen
  changeScreen(1);
  // remove test options
  testOptionsType = -1;
  testOptionsValue = 0;
  // hide the timer
  hTimer.style.visibility = "hidden";
  // start the test!
  initialise();
}

// RESTART TEST AGAIN
function again() {
  if (testOptionsType === -1) free();
  else startTest();
}

// TRY INCORRECT WORDS AGAIN
function tryIncorrectWordsAgain() {
  let testOptionsInput = hTestOptions.value.split(" ");
  // make list
  selectedWordlist = [];
  for (let result of wordResultsList) {
    if (result[1] - result[2] > 0) {
      selectedWordlist.push(result[0]);
    }
  }
  // if no wrong words (shake animation)
  if (selectedWordlist.length === 0) {
    hTiwaButton.classList.add("shake-animation");
    setTimeout(function() {hTiwaButton.classList.remove("shake-animation")}, 250);
    return;
  }
  // change the screen
  changeScreen(1);
  // get settings
  testOptionsType = testOptionsTypes.indexOf(testOptionsInput[0]);
  testOptionsValue = parseInt(testOptionsInput[1]);
  // if timed test, calculate the time and start timer
  if (testOptionsType === 3) testOptionsValue = testOptionsValue * 60;
  if (testOptionsType < 2) {
    hTimer.style.visibility = "hidden";
  }
  else {
    hTimer.style.visibility = "visible";
    time = testOptionsValue;
    displayTimer();
    timerInterval = setInterval(function() {
      time -= 1;
      displayTimer();
    }, 1000);
    setTimeout(function() {
      endTest();
    }, 1000 * testOptionsValue);
  }
  // freeze stage lists
  canSelectStages = false;
  // start the test
  initialise(false);
}

// LOAD RESULT OPTIONS
function loadResultOptions() {
  if (read("category") === "") write("category", categoryType);
  if (read("sort") === "") write("sort", sortType);
  categoryType = parseInt(read("category"));
  sortType = parseInt(read("sort"));
}

// DISPLAY WORD RESULTS
function displayWordResults() {
  hCategoryType.textContent = categoryTypes[categoryType];
  hSortType.textContent = sortTypes[sortType];
  write("category", categoryType);
  write("sort", sortType);

  let resultsList = [];
  if (categoryType === 0) resultsList = [...wordResultsList];
  if (categoryType === 1) {
    for (let i = 0; i < stage.length; i++) {
      let numTested = 0, numCorrect = 0;
      for (let result of wordResultsList) {
        if (stage[i].includes(result[0])) {
          numTested += result[1];
          numCorrect += result[2];
        }
      }
      if (i === 40) resultsList.push(["Extra list", numTested, numCorrect]);
      else resultsList.push([i + 1, numTested, numCorrect]);
    }
  }

  // show individual word results
  if (sortType === 0) resultsList.sort(sortAlphabetical);
  if (sortType === 1) resultsList.sort(sortWordsWrong);
  if (sortType === 2) resultsList.sort(sortWordsCorrect);
  hWordResults.innerHTML = ``;
  for (let result of resultsList) {
    // don't show if the word wasn't tested
    if (result[1] === 0) continue;
    // create an element
    let wordResultElement = document.createElement("div");
    wordResultElement.classList.add("word-result");
    wordResultElement.innerHTML = `
      <div style="display:flex">
        <div class="word-result-word"></div>
        <div class="word-result-translation"></div>
        <div class="word-result-stats"></div>
      </div>
      <div class="word-result-bar">
        <div class="word-result-bar-inner"></div>
      </div>
    `;
    // display the stats
    if (categoryType === 0) {
      wordResultElement.querySelector(".word-result-word").textContent = word[result[0]][0];
      let translationsText = "";
      for (let j = 0; j < word[result[0]][3].length; j++) {
        translationsText += word[result[0]][3][j];
        if (j != word[result[0]][3].length - 1) translationsText += ", ";
      }
      wordResultElement.querySelector(".word-result-translation").textContent = translationsText;
    }
    if (categoryType === 1) {
      if (result[0] === "Extra list") wordResultElement.querySelector(".word-result-word").textContent = result[0];
      else wordResultElement.querySelector(".word-result-word").textContent = "Stage " + result[0].toString();
    }
    wordResultElement.querySelector(".word-result-stats").textContent = result[2].toString() + "/" + result[1].toString();
    wordResultElement.querySelector(".word-result-bar-inner").style.width = Math.floor(result[2] / result[1] * 580).toString() + "px";
    // append the element to the word results
    hWordResults.appendChild(wordResultElement);
  }
}

// RESULT OPTION BUTTONS
hCategoryType.onclick = function() {
  categoryType = (categoryType + 1) % 2;
  displayWordResults();
}

hSortType.onclick = function() {
  sortType = (sortType + 1) % 3;
  displayWordResults();
}

// END THE TEST AND SHOW RESULTS
function endTest() {
  // if 50% or above and >= 10 words correct, complete dopamine box for this day
  if (stWordsCorrect / stWordsTested >= 0.5 && stWordsCorrect >= 10) {
    dbTestsCompleted = dbTestsCompleted.substring(0, currentDay) + "1" + dbTestsCompleted.substring(currentDay + 1);
    saveDopamineBox();
    displayDopamineBox();
  }  
  // change the screen
  changeScreen(2);
  // show overall results with result bar and results
  hResults.textContent = stWordsCorrect.toString() + "/" + stWordsTested.toString();
  hResultBarInner.style.width = Math.floor(stWordsCorrect / stWordsTested * 500).toString() + "px";
  // show word results
  displayWordResults();
  // allow changing stages
  canSelectStages = true;
  // reset timer
  clearInterval(timerInterval);
  time = 0;
  // prevent inputs
  wait = true;
}

// NAVIGATION BUTTONS
hStartButton.onclick = function() {startTest()};
hFreeButton.onclick = function() {free()};
hHomeButton.onclick = function() {changeScreen(0)};
hAgainButton.onclick = function() {again()};
hTiwaButton.onclick = function() {tryIncorrectWordsAgain()};
hEndTestButton.onclick = function() {endTest()};

// LOAD ALL STUFF AND CHANGE SCREEN
loadSettings();      // settings
loadStages();        // selected stages
loadDopamineBox();   // dopamine box stats
loadResultOptions(); // result options

changeScreen(0);