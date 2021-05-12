/* The chat const defines the Peekobot conversation.
 * 
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 * 
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 * 
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 * 
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */



const chat = {
    1: {
        text: ' Bienvenue ! Je suis Be-bot 🤖, je suis trop content d’avoir quelqu’un avec qui discuter ça faisait longtemps….',
        options: [
            {
                text: 'Me voici me voilà',
                next: 2
            },
             {
                text: 'C’est grâce à ma curiosité insatiable',
                next: 2
            }
        
        ]
    },
    2: {
        text: 'Alors commençons notre discussion et découvrons la démarche de traitement d’un contenu, !',
        next: 3
    },
    3: {
        text: 'Tu sais que tout ce que tu fais sur internet génère des données ?',
        options: [
            {
                text: 'Ah c’est vrai j’en ai déjà entendu parler',
                next: 4
            },
            {
                text: 'peut-être ?',
                next: 4
            }
        ]
    },
   
    4: {
        text: "Et bien ces données, (que l'on peut aussi considérer comme du contenu) vont suivre un certain chemin et c’est ce dernier sur lequel on va se pencher.",
        options: [
            {
                text: 'Ça marche',
                next: 5
            },
            {
                text: 'ok mais j’oublie pas que tu dois me parler de mes données 🤔',
                next: 5
            }
        ]
    
    },
    5: {
        text: 'Ok allons y !',
        next: 6
        },

    6: {
        text: 'Avant de traiter le contenu, il faut le créer !',
        options: [
            {
                text: 'en créant une peinture ? 🎨',
                next: 7

            },
            {
                text: 'en créant une musique ? 🎹',
                next: 7
            },
            {
                text: 'en créant un texte ? 📄',
                next: 7
            }
        ]
       
    },
        7: {
            text: 'Exactement, cela va constituer notre base de données que nous allons traiter ensuite. Donc ça pourrait être une photo que tu postes sur instagram, ou un petit tiktok drôle !',
            next: 8

            },

        8: {
            text: 'Es-tu prête(e) à passer à l’étape suivant ?',
            options: [
            {
                text: 'On continu !',
                next: 9

            },
            {
                text: 'En avant Guingamp !',
                next: 9
            }
            
        ]
    },


        9: {
            text: 'Parfait on passe à la suite…',
            next: 10
            },

        10: {
            text: 'Maintenant il faut les stocker ces données as-tu une idée ?',
            options: [
            {
                text: 'On les met dans une boîte ?',
                next: 11

            },
            {
                text: 'On les déplace vers la mémoire d’un appareil ?',
                next: 12
            }
            
        ]
    },

        11: {
            text: 'Toi tu peux mais… moi je vais avoir du mal…',
            next: 13
     },

        12: {
            text: 'Ça me semble parfait cette idée !',
            next: 13
     },

        13: {
            text: 'L’idée c’est de les stocker de façon immatérielle pour réduire leur taille et en accumuler des centaines, des milliers Bref ! Tout un tas ! ',
            options: [
            {
                text: 'J’en veux pleins pleins pleins',
                next: 14

            },
            {
                text: 'Attention quand même faut pas que ce soit au détriment de la qualité 😌',
                next: 14
            }
            
        ]
    },

        14: {
            text: 'Passons à l’indexation, c’est bien beau d’avoir du contenu mais il faut le classer pour s’y retrouver.',
            options: [
            {
                text: 'Ah je vois, sinon on finit noyé dans tous ces documents',
                next: 15

            },
            {
                text: 'Mais on va devoir trouver un moyen de les reconnaître non ?',
                next: 15
            }
            
        ]
    },


        15: {
            text: 'Exact pour cela on va leur attribuer une sorte de code pour leur créer une identité et les retrouver plus tard !',
            options: [
            {
                text:'C’est marrant parce que notre cerveau fonctionne plus ou moins de la même manière non ?',
                next: 16 
            }
            
        ]
     },

        16: {
            text: 'Oui tu peux voir tes neurones comme un énorme réseau qui fait des liens entre différentes informations !',
            options: [
            {
                text: 'Sympa',
                next: 17

            },
            {
                text: "J'avais jamais vu ça de cette façon...",
                next: 17
            }
            
        ]
     },
             17: {
            text: "Mais près quand on va avoir besoin de l'information à nouveau il va falloir trouver un moyen de sélectionner ce contenu stocké...🤖",
            options: [
            {
                text:'Moi je pense qu’il faut qu’on marche en faisant des liens entre divers éléments, comme le fait notre cerveau !',
                next: 18 
            }
            
        ]
     },

            18: {
            text: 'Super idée ! On fera preuve de logique pour aller à l’essentiel. Tu sais, moi je fonctionne beaucoup avec la logique mais l’être humain aussi !',
            options: [
            {
                text: 'Je suis logique un jour sur deux 😴',
                next: 19

            },
            {
                text: 'Ah c’est cool ça ! 🤓',
                next: 19
            }
            
        ]
     },
            19: {
            text: 'Enfin passons à la suite il ne nous reste que deux étapes !',
            options: [
            {
                text:'Que deux ?',
                next: 20 
            }
            
        ]
     },
            20: {
            text: 'Qui sait tout ça nous mènera peut être à un troisième étape dont tu seras le sujet principal 🤖',
            options: [
            {
                text: 'Que de mystères 🔮',
                next: 21

            },
            {
                text: 'Tu me caches quelque chose Be-bot ? 😳',
                next: 21
            }
            
        ]
     },
            21: {
            text: 'Bref ! Ensuite le contenu il faut bien trouver un moyen de le consulter non ?',
            options: [
            {
                text: 'Effectivement',
                next: 22

            },
            {
                text: 'C’est pas faux',
                next: 22
            }
            
        ]
     },
            22: {
            text: 'Pour cela on peut le reposter, faire en sorte de le refaire émerger ! Et ce qui est encore plus intéressant c’est de confronter les documents !',
            options: [
            {
                text: 'Les confronter ? Comme les comparer ?',
                next: 23

            }
            
        ]
     },
            23: {
            text: 'Exact faire le lien entre plusieurs contenus différents pour en tirer encore plus d’informations.',
            options: [
            {
                text: "C'est trop bien on découvre tout le potentiel d'un document !",
                next: 24

            },
            {
                text: 'Trop cool !',
                next: 24
            }
            
        ]
     },
            24: {
            text: 'Et enfin on fini par partager ce contenu',
            options: [
            {
                text: 'Je connais le rt et tout là 📨',
                next: 25

            },
            {
                text: 'je fais ça, je renvoie des tiktok à des potes en dm 🎶',
                next: 25
            }
            
        ]
     },
            25: {
            text: "Voilà comme tu as compris l’idée c’est de rendre un contenu accessible au plus de gens possible pour que ce cheminement se refasse auprès d'autres utilisateurs etc",
            options: [
            {
                text: 'Et donc si j’en reviens à ce que tu m’as dit plus tôt, je peux y voir un parallèle avec le chemin de mes données.',
                next: 26

            }
            
        ]
     },

            26: {
            text: 'Effectivement pour ça je t’invite à cliquer là pour finir ton apprentissage et surtout pour mieux considérer ce que tu génères et postes sur le web !',
            next: 27
     },
            27: {
            text: "C'était un plaisir de discuter avec toi, Be-bot te remercie ! Maintenant cliques et sors de ta chrysalide petit papillon ⇩",
            options: [
            {
                text: "Faisons le point",
                 url: "topo.html"
            }
                       ]
           
     }
        
};
