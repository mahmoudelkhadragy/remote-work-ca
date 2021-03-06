setTimeout(() => {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
  var counter = 0;
  var opt_cards = [
    {
      id: 'javascript:TarotDeckSubmitTarotCard(1);',
      cardSubTitle: 'The Magician',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-1.svg',
      no: `<b>NO</b><br>You have gone too far in believing in your own power. A fall, decline, or minor humiliation awaits along this path. You have lessons that you have not learned, and you have insulted or angered a higher being. You must restore equilibrium to the elements and acknowledge yourself as a beginner. Then you will be prepared for a new attempt.`,
      yes: `<b>YES</b><br>Space and time will not prevent you from realizing your vision for the situation. Your inner power serves and protects the good in a touchy situation. Be open to what the light reveals to you, and you will emerge victorious. The Magician brings boldness and foresight, so seek within for the deeper meaning. The alchemical wedding commences when you open yourself to insight.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(2);',
      cardSubTitle: 'The High Priestess',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-2.svg',
      no: `<b>NO</b><br>You suffer from a lack of willpower or resolution and follow conflicting pieces of advice. You display childlike ignorance about the basic forces at work in the situation. You will not succeed quite yet, or at least not in the way that you want. You must take a step backward and re-evaluate the situation. In time, you will come to understand why things have not been going your way.`,
      yes: `<b>YES</b><br>The High Priestess signifies a changing situation. Like the phases of the Moon, the Priestess undergoes continual change. The change in progress works in your favor. Your opportunity will arrive soon, so allow yourself to drift with the current and you will arrive at a favorable destination. Keep your goal in mind, but do not force it to come about. Simply allow the situation to work for your benefit.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(3);',
      cardSubTitle: 'The Empress',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-3.svg',
      no: `<b>NO</b><br>You have hesitated to make decisions and lost the opportune moment. You have wished for the best but have failed to act. The Empress shows you that you must seize the day if you want to succeed in life. She sits on the throne but can lose her place through inaction. Better to act than to lose the moment.`,
      yes: `<b>YES</b><br>The Empress enthroned reveals that your good actions in the past are now bearing fruit. Remember your hard work and good deeds months ago? The situation bears the marks of just rewards. You can rest contented and smile, as you deserve everything that you have coming to you. Sit upon the throne and let your beauty, strength, and wisdom show.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(4);',
      cardSubTitle: 'The Emperor',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-4.svg',
      no: `<b>NO</b><br>The Emperor right now shows that you have allowed your emotions to get out of control. You have criticized someone close to you, someone who is loyal and only wishes good things for you. You must step down from your throne and apologize in order to make things right. Only humility will make a difference as you calmly and carefully address the conflict.`,
      yes: `<b>YES</b><br>The Emperor is a card of victory and conquest. You have asserted your will upon the world, and you will prevail. The inner, divine nature triumphs over superficial matters. Mars and the Sun defeat Venus and Saturn. Go forward with full confidence in your abilities and do not hold anything back. Ignore any doubt that might arise and move forward assertively.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(5);',
      cardSubTitle: 'The Pope',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-5.svg',
      no: `<b>NO</b><br>The negative side of the Pope card shows weakness of will and an excess of kindness. You have allowed others to get the better of you through your na??ve and trusting nature. You have neglected your own priorities in order to concentrate on what others want. In this particular situation, a little bit of selfishness will yield a better outcome. It is OK to take care of yourself.`,
      yes: `<b>YES</b><br>The Pope card, sometimes called the Hierophant, signifies divine wisdom and manifestation of blessing. You look deep within to bring the heavenly light to shed clarity on the situation. Others will be inspired by your loving, merciful outlook on life. You have deep reserves of peace and tranquility that take you above this present moment. You bless yourself as you bless others.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(6);',
      cardSubTitle: 'The Lovers',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-6.svg',
      no: `<b>NO</b><br>The negative side of the Lovers shows a love that has been lost or a test that has been failed. Every good thing has its shadow side, and every gain has a hidden loss. This time around, things happen to not go the way that you thought or hoped. It is OK to be sad for a time, since loving and losing is part of life.`,
      yes: `<b>YES</b><br>The Lovers signify inspiration and sometimes help from the spirit world. A test or trial comes your way that you will pass. Someone who is no longer in your life will help you psychically. Be open to receive the intuition, which seems impossible but is there anyway. Be thankful for the kindness of the guides who light your way, and remember to do the same for others when your time comes.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(7);',
      cardSubTitle: 'The Chariot',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-7.svg',
      no: `<b>NO</b><br>A change in the direction of fate means that your plans will not be fulfilled - for now at least. As swift as the wind, the Chariot that once took you to victory now brings you low. Do not be afraid, for sometimes what seems like a loss carries good things in its path. The negative trend will be short lived, and you will find yourself in a better position in a short while.`,
      yes: `<b>YES</b><br>Good health and success come your way as the Chariot brings you victory! You have the ability to overcome obstacles that have stood in your way for years. Your friends come to your aid, and your enemies flee. The wheels of fate have rolled forward, and you find yourself on top of your world. Enjoy this favorable sign, and have confidence.`,
    },
    // You have misunderstood the situation and have employed bad strategy. The Chariot implies impulsiveness and lack of control. Your impatience has gotten the better of you, and the situation will not go your way. You must learn to think on your feet so that you do not make as many mistakes. Leave yourself a better future by acting deliberately and going with your intuition.
    {
      id: 'javascript:TarotDeckSubmitTarotCard(8);',
      cardSubTitle: 'Justice',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-8.svg',
      no: `<b>NO</b><br>The Justice card means that your conscience is bothering you because of some wrong that you committed in the past. A person who seems like an enemy brings your actions into the light. If you can get over your ego nature, you will see the path clearly. You must freely admit what you did wrong, and only then will your plans proceed smoothly.`,
      yes: `<b>YES</b><br>Someone who wronged you in the past will now repay you in a positive sense. The Justice card means that an imbalance will be righted, a bad situation made good, a crooked road made straight. You deserve to have this correction, since it results from your own good deeds in the past. Allow your mind to rest and breathe a deep sigh of relief.`,
    },
    // The Justice card in its negative sense means that an imbalance has come into your life. Someone close to you will lose trust in your words because of your own practice of being less than truthful. You have strayed from the path, and you must return to good ways in order to restore your relationship, which is very important for your future evolution.
    {
      id: 'javascript:TarotDeckSubmitTarotCard(9);',
      cardSubTitle: 'The Hermit',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-9.svg',
      no: `<b>NO</b><br>The Hermit, in its negative sense, means an excess of caution and a harsh form of withdrawal from the world. You have blessings in your life that you are not seeing, and you have allowed this fact to turn you into a lonely soul. A truly wise person knows how to balance the worldly life with the life of the spirit.`,
      yes: `<b>YES</b><br>The Hermit wanders alone, indicating inspired action and lack of concern for material things. Today, this card indicates great inner power and strength... the ability to see things through without regard for the circumstances. You will surely succeed in your endeavor, but sacrifice and commitment will be required. The staff of discipline will guide you.`,
    },
    //The negative side of the Hermit card indicates a failure to take action in the world. You have not been decisive because of an excess of concern for the spiritual world. You have wavered in your worldly commitments, which is not a good thing in this case. You must see your duty properly and carry it through, or your plans will be ruined. 
    {
      id: 'javascript:TarotDeckSubmitTarotCard(10);',
      cardSubTitle: 'The Wheel of Fortune',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-10.svg',
      no: `<b>NO</b><br>The nature of fortune is that it changes, and, in your case, things may take a turn for the worse. Beyond the surface appearance, the mask that you wear for others, lies a deep feeling of loss. But bad luck is just bad luck and is not a permanent state. As easily as you lose, you can also win. Endure bad times so that the good times will come again.`,
      yes: `<b>YES</b><br>The Wheel of Fortune indicates success and prosperity, the outcome of hard work. You have struggled to improve your career, finances, and relationships, and now you begin to see the fruits of your actions. Take heart in this joyful time, and remember to celebrate your good luck with your friends. It is rare in this world that one receives unconditional good.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(11);',
      cardSubTitle: 'Strength',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-11.svg',
      no: `<b>NO</b><br>This card indicates Strength that is not under the guidance of good judgment. You have a tendency to force your way through situations that are not to your liking. This can result in severed ties with potential allies. Learn to be more adaptable and flexible. Seek out the wisdom of a feminine figure. Only then will you succeed.`,
      yes: `<b>YES</b><br>The Strength card reveals that you face formidable obstacles, but you have the resources within you to overcome whatever comes your way. You have great courage radiating from your heart center, and you have many blessings in your life. As you take an inventory of the resources available to you, you will see that the situation is no cause for worry.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(12);',
      cardSubTitle: 'The Hanged Man',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-12.svg',
      no: `<b>NO</b><br>The negative side of the Hanged Man indicates selfishness, an inability to give of oneself for others. You fear suffering, and this prevents you from moving forward in life. The path to goodness and wisdom always includes some pain. Until you embrace the pain of growth, you will remain stuck in your present situation. You must embrace the uncomfortable parts of life to evolve.`,
      yes: `<b>YES</b><br> The Hanged Man indicates a spiritual, emotional, or physical trial that has purifying effects. The troubles that you have experienced lately have given you a more peaceful and compassionate view of the world. You are able to feel for others around you and see the temporary nature of all things and events. Others will look to you for guidance and comfort, and your deep inner resources will not fail.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(14);',
      cardSubTitle: 'Temperance',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-14.svg',
      no: `<b>NO</b><br>The negative side of the Temperance card represents a lower desire interfering with a higher desire. You have failed to regulate your own behavior, which has led to wavering, inefficient thinking and acting. You must learn to place your highest values first, otherwise you will be working at cross purposes. Success involves some sacrifice. Anything worth having will require endurance along the way.`,
      yes: `<b>YES</b><br>Temperance indicates breaking the bonds of bad habits, practicing regularity and self-discipline. You are on the verge of a breakthrough, because you have learned to master yourself. Your mind has stopped wandering from one thing to the next, and you pursue your dreams without interruption. Success is not far away, as a natural outcome of your past and present good actions.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(15);',
      cardSubTitle: 'The Devil',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-15.svg',
      no: `<b>NO</b><br>The negative side of the Devil card represents an evil outcome to the situation, resulting from misuse of material power. You are the victim or perpetrator of wrong due to bad influences in your life. The evil will only be made worse unless you change course by finding a new set of friends or seeking wise advice. Evil begets evil.`,
      yes: `<b>YES</b><br>The Devil represents materialism and material force. You have obstacles in your path, but you have the resources that you need in order to address the challenge. This may be money or physical strength, power belonging to the everyday sphere. A good outcome will result from expending your power at this time. Do not hold back, and you will have what you want.`,
    },
    // The Devil card represents jealousy related to possessions here. You want what someone else has, and this produces constant irritation. You will have to let go of what you desire, as you will not be able to obtain it at this time. The person who you resent may be completely unaware of your feelings, and you are only harming yourself. Jealousy is a form of self-torture.
    {
      id: 'javascript:TarotDeckSubmitTarotCard(16);',
      cardSubTitle: 'The Tower',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-16.svg',
      no: `<b>NO</b><br> The downside of the Tower card represents a fall, or ruin coming to you and your endeavors. The fall will be in proportion to the size of your ambitions and the extent to which you have gotten ahead of your ability to contain the situation. You have been overly optimistic and have promised more than you can deliver. You stand on shaky foundations and will soon see some ill effects.`,
      yes: `<b>YES</b><br>The Tower represents strength, courage, and ambition. It also means a warlike, aggressive attitude. You see what you want and stop at nothing to achieve it. The card should be regarded as a good sign that you will be able to prosper in your undertaking. You will prevail over your obstacles and enemies and have success in what you do. `,
    },
    //no- The negative side of the Tower card represents a warning of some dangerous situation. An enemy approaches your territory, and your defenses are not strong enough to cope with the situation. There may still be time to defend yourself if you act right away. Gather your true friends around you and be on the lookout for an attack. This could come in the form of slander or some physical threat. 
    {
      id: 'javascript:TarotDeckSubmitTarotCard(17);',
      cardSubTitle: 'The Star',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-17.svg',
      no: `<b>NO</b><br>The negative side of the Star card represents loss of hope and disappointment, a dream put on hold. You sense a lack of abundance in your life and see no way to achieve your aims. This results from temporary bad luck and not through any fault of your own. In time the situation will change, and you can try again to achieve the life of your dreams.`,
      yes: `<b>YES</b><br>The very positive Star card represents hope for a bright future and dreams coming to fruition. The thoughts that you have sent out into the Universe over the years will achieve the desired results. You are very close to the life you have imagined, and you will begin to see signs that you are getting what you want. This will happen in the next few days.`,
    },
    //yes- The Star card represents good fortune and abundance coming into your life. The wishes that you made long ago are now coming into existence, and you feel like a child again. The heavens have aligned in your favor, and the Universe returns the good things that you have put out into the world. You have good karma, and good things will result from your activity. 
    {
      id: 'javascript:TarotDeckSubmitTarotCard(18);',
      cardSubTitle: 'The Moon',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-18.svg',
      no: `<b>NO</b><br>The negative side of the Star card represents loss of hope and disappointment, a dream put on hold. You sense a lack of abundance in your life and see no way to achieve your aims. This results from temporary bad luck and not through any fault of your own. In time the situation will change, and you can try again to achieve the life of your dreams.`,
      yes: `<b>YES</b><br>The very positive Star card represents hope for a bright future and dreams coming to fruition. The thoughts that you have sent out into the Universe over the years will achieve the desired results. You are very close to the life you have imagined, and you will begin to see signs that you are getting what you want. This will happen in the next few days.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(19);',
      cardSubTitle: 'The Sun',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-19.svg',
      no: `<b>NO</b><br>The negative side of the Star card represents loss of hope and disappointment, a dream put on hold. You sense a lack of abundance in your life and see no way to achieve your aims. This results from temporary bad luck and not through any fault of your own. In time the situation will change, and you can try again to achieve the life of your dreams.`,
      yes: `<b>YES</b><br>The Sun represents good thoughts, happiness, and contentment. You find a good place in your life where you experience satisfaction. Your worries fade away for a time and you are able to relax. All of the fears that surrounded you for so long now fade into the background. This is a result more of your own attitude changing rather than a turn in events.`,
    },
    {
      id: 'javascript:TarotDeckSubmitTarotCard(20);',
      cardSubTitle: 'The Judgement',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-20.svg',
      no: `<b>NO</b><br>The negative side of the Judgement card means that you will not be able to escape from the negative consequences of your actions. You will have to pay the penalty for what you have done, and your actions will be revealed in the light of day. The only way to improve the situation will be to fully admit wrongdoing and accept whatever punishment waits for you.`,
      yes: `<b>YES</b><br>The Judgement card represents the last day, the culmination of a long process, things reaching completion and fulfillment. You have fought the good fight for many years, and your reward is not far away. All of your confusion will be made clear, and all of your wounds will be healed. You have reached the place that you have sought for a long time.`,
    },
    //yes - The Judgement card represents forgiveness for past wrongs and new beginnings. A situation that has been building for some time now reaches resolution. Your rebirth allows you to go in a new direction, and you are no longer bound by old habits. You can go forward confidently, knowing that you have a clean slate. You will be able to avoid making the same mistakes all over again.
    //yes - The Judgement card represents the last day, the culmination of a long process, things reaching completion and fulfillment. You have fought the good fight for many years, and your reward is not far away. All of your confusion will be made clear, and all of your wounds will be healed. You have reached the place that you have sought for a long time. 
    {
      id: 'javascript:TarotDeckSubmitTarotCard(21);',
      cardSubTitle: 'The World',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-21.svg',
      no: `<b>NO</b><br>The negative side of the World card indicates a disconnection from the larger forces at work in the Universe. You have tried to go it alone, and this has made you less effective in accomplishing your objectives. Realize that you are an instrument in the hands of nature, and you will be able to improve the situation. True strength comes from realizing your place in the cosmos.`,
      yes: `<b>YES</b><br>The World card represents completion of a larger cycle of time. You are one part of a much larger pattern, an ordering that originates outside yourself. You happen to be living through a very important juncture that will make clear your place in the divine plan. You will gain insight into the true nature of things and know your purpose in life.`,
    },

    {
      id: 'javascript:TarotDeckSubmitTarotCard(22);',
      cardSubTitle: 'The Fool',
      cardImg: 'https://www.astrology.com/images-US/tarot/results/tarot-reading-result-22.svg',
      no: `<b>NO</b><br>The negative side of the Judgement card means that you will not be able to escape from the negative consequences of your actions. You will have to pay the penalty for what you have done, and your actions will be revealed in the light of day. The only way to improve the situation will be to fully admit wrongdoing and accept whatever punishment waits for you.`,
      yes: `<b>YES</b><br>The Fool represents divine laughter, the ability to overcome negativity and materialism. You have been given the gift of divine joy. If others don't understand you, it is because they are trapped in the illusions of this world, addictions to power and wealth. You see beyond the veil to the divine heart of all things. You are blessed indeed, both now and in the future.`,
    },
    //no - The Fool does not realize that he laughs and dances on the edge of a cliff. Your situation holds many dangers that you have not recognized. You have failed to listen to good advice and have covered up obstacles with false optimism. You must develop a more serious attitude in order to escape from the danger that you now face. It may be too late to avoid the danger. 
  ];

  $(".deck a").each(function () {
    $(this).attr("id", ($(this).attr("onclick")));
    $(this).prop("onclick", null).off("click");
  });

  $(".deck a").on("click", function () {
    counter += 1;
    if (counter == 4) {
      showAstrology();
    } else {
      const id = $(this).attr("id");
      const selectedCard = opt_cards.find(card => card.id == id);
      const cardDesc = (Math.random() < 0.5) ? selectedCard.yes : selectedCard.no;
      console.log(cardDesc);
      $('.opt_title').text(selectedCard.cardSubTitle);
      $('.opt_desc').html(cardDesc);
      $('.opt_img').attr("src", selectedCard.cardImg);
      $('.opt_card_popup').show();
    }
  })

  $('.opt_card_close').on("click", function () {
    $('.opt_card_popup').hide();
    rearrangeCards();
  });
  $('.opt_other_btn').on("click", function () {
    $('.opt_card_popup').hide();
    rearrangeCards();
  });

  $('.opt_join_close').on("click", function () {
    $('.opt_predict_poppup').hide();
  })

  function showAstrology() {
    $('.opt_predict_poppup').show();
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  function rearrangeCards() {
    var shuffeledArr = shuffle(arr.slice(0, 12));
    $('.deck a').each(function (i) {
      var onclickVal = `javascript:TarotDeckSubmitTarotCard(${shuffeledArr[i]});`
      $(this).attr("id", onclickVal);
    })
  }
}, 500)

