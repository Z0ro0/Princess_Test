//MBTI별 공주리스트
const princessList = [
    {
        mbti: 'ISTJ',
        name: '엄격한 무뚝뚝 공주님',
        description1: '공주님은 분석적이고 규칙적이며 규율을 중시하는 모범생 이미지입니다.\n엄격하고 무뚝뚝하지만 친한 주변 공주님들에게는 웃음을 선사하는 의외의 모습이 있습니다.\n각자 할 일을 맡아 완벽하게 굴러가는 체계적인 반을 볼 때 희열을 느낍니다.\n주변 공주님들이 보기에 공주님은 책임감 있고 맡은 일을 해내지만 사실 어제 8시간 이상 주무셨죠?',
        description2: '오늘 하기로 했던 일을 못했잖아… 스트레스 받아.\n진짜? 진심이야? 의심스러운데…\n난 내가 좋아~ 다른 사람에게는 관심 없어\n사기 안 당할 것 같은 공주님 1위'
    },
    {
        mbti: 'ISTP',
        name: '호기심 대마왕 무뚝뚝 공주님',
        description1: '공주님은 호기심이 많고 실용적인 것을 중시하며 행동에 자신감이 있는 공주님입니다.\n손재주가 좋고 기계적인 경우가 많습니다. \n도전을 좋아하기 때문에 위험한 행동에 크게 개의치 않습니다.\n주변 공주님들이 보기에 공주님은 냉철해보입니다! 하지만 친해지면 무심하게 뒤에서 챙겨주는 모습에 가끔 심쿵합니다!',
        description2: '소음을 싫어합니다. 조용히 해 주세요!\n내가 알아서 할 거야! 내 일에 간섭하지 말아주세요\n무인도에 떨어져도 괜찮아… 적응력이 뛰어나니까\n어떠냐고? 빈말은 못하는데…'
    },
    {
        mbti: 'INFJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'INTJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ISFJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ISFP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'INFP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'INTP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ESTJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ESFP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ENFP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ENTP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ESFJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ESTP',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ENFJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
    {
        mbti: 'ENTJ',
        name: '완벽주의 미지근 공주님',
        description1: '공주님은 동정심이 많고 이상주의적이며 완벽주의적인 공주님입니다.\n본인만의 가치관이 뚜렷해요.\n음악, 책 등을 사랑해요! 혹시 과제할 때 노래 자주 들으시나요?\n주변 공주님들은 공주님이 미스테리하다고 생각합니다! 하지만 본인만의 뚜렷한 가치관으로 남에게 흔들리지 않는 공주님이 멋있다고 생각해요!',
        description2: '다 괜찮아~ 마음이 넓어요\n그렇구나… 그런데 그 친구 말도 들어봐야지… 중립을 지켜요\n엇? 1px 오른쪽으로 갔잖아? 꼼꼼하고 세심해요\n이건 이렇게 하자! 창의적인 사고를 가지고 있어요!'
    },
];
const questionList = [
    {
        question: '두근두근 입학 후  처음으로 등교하는 날이다!  반에 들어왔는데 모르는 친구들 뿐이다…',
        option1: '기회는 내가 잡는 거다! 옆자리 친구에게 말은 건다!',
        option2: '말 걸어줄 때까지 자리에서 기다린다.'
    },
    {
        question: '급식을 같이 먹을 친구가 생겼다! 교실 뒷쪽에 다른 친구들이 모여있다.',
        option1: '부끄러워… 같은 반이니까 언젠가 친해지겠지… 가만히 있는다.',
        option2: '우리 가서 친해지자고 해 볼까? 어때? 뒷쪽 친구들에게 말을 걸어보자고 제안한다.'
    },
    {
        question: '담임 선생님께서 들어오시고, 새학기니까 상담을 하자고 하신다. 순서를 정해야 하는데 첫 번째로 할 사람이 있냐고 물으신다. 난 언제 할까?',
        option1: '선생님께서 나에게 제안하실 때까지 가만히 있는다.',
        option2: '저요! 제가 먼저 하겠습니다! 가장 먼저 상담하겠다고 손을 든다. '
    },
    {
        question: '첫 전공 시간은 자바였다. 수업이 끝나고 나가려는데… 선생님께서 과제를 주셨다. 이때 내 생각은?',
        option1: '… 과제는 왜 하는 거지? 내가 이 과제를 안 하면 어떻게 되지? 과제를 왜 주시는 거지? 이걸 해결하면 무슨 도움이 되지…? 이게…(더보기) ',
        option2: '아… 새학기 첫 날인데…'
    },
    {
        question: '힘든 하루였다… 기숙사에 들어와서 친구와 재미있는 영화를 보기로 했다. 영화를 다 본 후 나의 감상평은?',
        option1: '자퇴하는 장면 되게 인상 깊었어… 한 번 더 돌려보고 싶다.',
        option2: '학생 역할 맡은 배우 연기 되게 잘하지 않아? 완전 놀랐어!'
    },
    {
        question: '평화로운 아침… 응? 저기 잘생긴 남자는 누구지? 여고인 우리 학교에 잘생긴 남자가 지나간다… 어떡하지?',
        option1: '눈도 초롱초롱하고… 속눈썹도 이슬이 맺힐 것처럼 길잖아… 내 남자다!',
        option2: '오… 잘생겼는데? 배우 중에 누구 닮은 것 같아…'
    },
    {
        question: '선생님께서 상담을 하자며 교무실로 오라고 하셨다. 상담을 하던 중 감동적인 말씀을 해 주셨는데 나의 반응은?',
        option1: '선생님… 감사합니다… 너무… 너무 감동이에요! 울먹거리며 눈물을 흘린다.',
        option2: '선생님께서 나를 이렇게 생각해 주시는구나… 감동인데?'
    },
    {
        question: '친구가 전공 수업이 어려워서 힘들다며 나에게 고민 상담을 시작했다. 울먹거리며 적성에 맞지 않는 것 같다고 하소연하는 친구를 보며 나는…',
        option1: '힘들겠다… 나도 사실 전공 수업 처음 하면서 되게 힘들었는데… ㅠㅠ 괜찮아? 같이 울먹거리며 친구를 안아준다.',
        option2: '괜찮아. 처음이라서 어려운 거야. 어디가 힘든데? 내가 알려 줄게! 친구에게 공부를 가르쳐주기로 한다.'
    },
    {
        question: '진정된 친구가 나에게 상담을 들어줘서 고맙다며 넌 내 최고의 친구야! 라고 말했다. 이때 나의 심정은?',
        option1: '내가… 최고의 친구…? 우리 진짜 최고의 친구인가 봐!! 너도 내 최고의 친구야!! 친구의 손을 잡고 활짝 웃어준다.',
        option2: '힘들었던 게 조금은 괜찮아진 것 같네… 다행이다. 미소 짓는 친구를 보며 다행이라고 안도한다. '
    },
    {
        question: '중요한 공모전에 작품을 출품하게 되었다. 남은 기간은 일주일! 팀원들은 감감무소식… 어떡하지?',
        option1: '얘들아 우리 회의 언제 할래? 먼저 연락하고 회의 일정을 잡는다.',
        option2: '어떻게든 되겠지! 미래의 내가 알아서 해 줄 것이라고 믿고 침대에 누워서 직캠을 본다.'
    },
    {
        question: '공모전을 출품하고 나니 기말고사가 겨우 일주일 남았다. 이번 기말은 일곱 과목! 어떻게 공부할까?',
        option1: '오늘은 자바… 내일은 국어… 내일 모레는 수학… 하루에 한 과목씩 공부하면 되겠다. 일주일동안 어떻게 공부할지 생각한다.',
        option2: '아 오늘은 자바 공부하면 되겠다. 내일은 뭐 하지? 우선 오늘 할 일부터 생각한다.'
    },
    {
        question: '정신없이 바쁘게 지내다보니 어느새 한 학년을 마무리하게 되었다. 친구들과 추억에 잠기며 이번 학년을 돌아보았다. 다음 학기에는 어떻게 할까?',
        option1: '이번에는 자바가 조금 부족했던 것 같아… 내년에는 자바 열심히 공부해야겠다. 이번 년도에 내가 부족했던 과목을 돌아본다',
        option2: '다음 학기에는 열심히 해야겠다. 열정을 활활 불태우겠다고 다짐한다.'
    },
]
function myFunction(){
    let language = "kr";
    let lan = document.documentElement.getAttribute("lang");

    const containerEls = document.getElementsByClassName("container");

    // 시작하기 버튼 클릭 시, 메인 페이지 사라지는 효과
    document.querySelector(".btn--start").addEventListener("click", function() {
        containerEls[0].style.transition = ".5s";
        containerEls[0].style.opacity = "0";
        containerEls[0].style.transform = "translateX(-1200px)";
        
        setTimeout(function(){
            containerEls[0].style.display = "none";
            // 문제가 담긴 contianer 보이게 하기 
            showQuestion();
        }, 850);
    });

    function showQuestion() {
        document.querySelectorAll(".container")[1].style.display = "block";
        lan = document.documentElement.getAttribute("lang");

        if(lan == 'ko') {
            questionEl.innerText = questionListKr[0].question;
            option[0].innerText = questionListKr[0].option1;
            option[1].innerText = questionListKr[0].option2;
        } else if(lan == 'en') {
            questionEl.innerText = questionListEn[0].question;
            option[0].innerText = questionListEn[0].option1;
            option[1].innerText = questionListEn[0].option2;
        } else if(lan == 'pl') {
            questionEl.innerText = questionListPl[0].question;
            option[0].innerText = questionListPl[0].option1;
            option[1].innerText = questionListPl[0].option2;
        }

        questionNo.innerText = `Q1.`;
        //한국어 버전
    }

    // 버튼 클릭시 다음 문제로 이동 (기존 문제 display:none 처리)

    // 버튼 클릭시 텍스트 변경
    const inner = document.querySelectorAll(".inner");
    const option = document.querySelectorAll(".option");
    let no = 1; 
    const questionEl = document.querySelector(".question>div:nth-child(2)");
    const questionNo = document.querySelector(".question>div:first-child");

    for(let i = 0; i < option.length; i++){
        document.querySelectorAll(".option")[i].addEventListener("click", function() {
            //다음 문제로 넘기기
            if(no != 12) {

                questionNo.innerText = `Q${no+1}.`;
                if(lan == 'ko') {
                    questionEl.innerText = questionListKr[no].question;
                    option[0].innerText = questionListKr[no].option1;
                    option[1].innerText = questionListKr[no].option2;
                    no++;
                } else if(lan == 'en') {
                    questionEl.innerText = questionListEn[no].question;
                    option[0].innerText = questionListEn[no].option1;
                    option[1].innerText = questionListEn[no].option2;
                    no++;
                } else if(lan == 'pl') {
                    questionEl.innerText = questionListPl[no].question;
                    option[0].innerText = questionListPl[no].option1;
                    option[1].innerText = questionListPl[no].option2;
                    no++;
                }
                
            } 
            
            increaseStatusBar();
            // 누를 때마다 점수 계산
            calcScore(i);
        });
    }
    
    let tmp = 1;
    // 상태바 게이지 상승 효과 
    function increaseStatusBar(){
        document.getElementsByClassName("bar__statement")[0].style.width = `${100/12*tmp++}%`;
    }

    let question = 1;
    let ei = 0;
    let ns = 0;
    let ft = 0;
    let jp = 0;

    function calcScore(opt){
        if(question <= 3) {
            //E와 I 구별 문제
            ei = (opt==0) ? --ei : ++ei;
        } else if(question <= 6) {
            //N과 S 구별 문제
            ns = (opt==0) ? --ns : ++ns;
        } else if(question <= 9) {
            //F와 T 구별 문제
            ft = (opt==0) ? --ft : ++ft;
        } else {
            //J와 P 구별 문제
            jp = (opt==0) ? --jp : ++jp;
        }
        question++;

        // 마지막 문제에서 결과 값 도출
        if(question == 13)
            getResult(ei, ns, ft, jp);
    }

    function getResult(ei, ns, ft, jp){
        let result = "";

        if(ei > 0){
            result += "E"
        } else {
            result += "I"
        }
        
        if(ns > 0) {
            result += "S"
        } else {
            result += "N"
        }
        
        if(ft > 0) {
            result += "T"
        } else {
            result += "F"
        }
        
        if(jp > 0) {
            result += "P"
        } else {
            result += "J"
        }
        showResult(result);
    }

    function showResult(result) {
        // 결과 화면 block 처리
        document.querySelector(".result").style.display = "block";
        // 문제 화면 숨김 처리 
        document.getElementsByClassName("container")[1].style.display = "none";
       // 결과 화면에 출력하기
        const charName = document.querySelector(".char_name");
        const charDescription = document.querySelector(".result_description");
        
        for(let i = 0; i < princessList.length; i++) {
            if(result == princessList[i].mbti) {
                if(lan == 'ko') {
                    charName.innerText = princessList[i].name;
                    charDescription.innerText = princessList[i].description; 
                } else if(lan == 'en') {
                    charName.innerText = princessList[i].name_en;
                    charDescription.innerText = princessList[i].description_en; 
                    
                    // 버튼 언어 변경
                    document.querySelector(".btn__share").value = "Share";
                    document.querySelector(".btn__reset").value = "Redo";
                } else if(lan == 'pl') {
                    charName.innerText = princessList[i].name_pl;
                    charDescription.innerText = princessList[i].description_pl; 
                    
                    // 버튼 언어 변경
                    document.querySelector(".btn__share").value = "Udział";
                    document.querySelector(".btn__reset").value = "Przywróć";
                }
                // 이미지 삽입
                document.querySelector(".princess_img").src = `./img/princess/${princessList[i].img_src}`;

                // 좋은 매칭 - 나쁜 매칭 찾기
                for(let j = 0; j < princessList.length; j++) {
                    if(princessList[j].mbti == princessList[i].good_match[0]) {
                        switch(lan) {
                            case "pl": 
                            document.querySelector(".good_princess").innerText = princessList[j].name_pl;
                            document.querySelector(".good_title").innerText = 'dobry z';
                            document.querySelector(".bad_title").innerText = 'źle z';
                            break;
                            case "en":
                                document.querySelector(".good_princess").innerText = princessList[j].name_en;
                                document.querySelector(".good_title").innerText = 'good match';
                                document.querySelector(".bad_title").innerText = 'bad match';
                                break;
                            default : 
                                document.querySelector(".good_princess").innerText = princessList[j].name;
                        }
                    } 
                    
                    if(princessList[j].mbti == princessList[i].bad_match[0]) {
                        switch(lan) {
                            case "pl": 
                            document.querySelector(".bad_princess").innerText = princessList[j].name_pl;
                            break;
                            case "en":
                                document.querySelector(".bad_princess").innerText = princessList[j].name_en;
                                break;
                            default : 
                                document.querySelector(".bad_princess").innerText = princessList[j].name;
                        }
                    }
                }
                break;
            }
        }

        if(document.querySelector(".bad_princess").innerText == "") 
            document.querySelector(".bad_princess").innerText = "-";
            
        // 테스트 다시 하기
        document.querySelector(".btn__reset").addEventListener("click", function() {
            location.reload();
        });
    }

    // 언어 변경
    const langOpt = document.querySelectorAll(".language__option");
    for(let i = 0; i < langOpt.length; i++){
        langOpt[i].addEventListener("click", function(){
                changeLanguage(langOpt[i]);
        });
    }

    function changeLanguage(langOpt) {
        switch(langOpt.innerText){
            // 깜빡이기 - 구현 필요

            case "English":
                document.documentElement.setAttribute("lang", "en");
                changeFonts('en');
                //초기 페이지 화면 영어로 변경 
                document.querySelector(".container>.title>div:first-child").innerText = "Disney Princess Test";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "Which princess am I most similar to?";
                document.querySelector(".btn__start").value = "Start test";
                break;
            case "Polski": 
                document.documentElement.setAttribute("lang", "pl");
                // 폴란드어 폰트 변경 
                changeFonts('pl');
                document.querySelector(".container>.title>div:first-child").innerText = "Test Księżniczki Disneya";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "Jaką jestem księżniczką?";
                document.querySelector(".btn__start").value = "rozpocząć testowanie";
                break; 
            case "한국어":
                document.documentElement.setAttribute("lang", "ko");
                changeFonts('ko');
                document.querySelector(".container>.title>div:first-child").innerText = "디즈니 공주 유형 테스트";
                document.querySelector(".container>.title>div:nth-child(2)").innerText = "나는 어떤 공주와 제일 비슷할까?";
                document.querySelector(".btn__start").value = "테스트 시작하기";
                break;
        }

    }



function changeFonts(lang) {
    if(lang == 'pl') {
        document.body.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        document.querySelector("input[type=button]").style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        // 버튼 폰트를 따로 변경 
        document.querySelector('.btn__reset').style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
        document.querySelector('.btn__share').style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    } else {
        // 다시 기존 폰트로 변경
        document.body.style.fontFamily = "Jua, sans-serif";
        document.querySelector("input[type=button]").style.fontFamily = "Jua, sans-serif";
        // 버튼 폰트를 따로 변경 
        document.querySelector('.btn__reset').style.fontFamily = "Jua, sans-serif";
        document.querySelector('.btn__share').style.fontFamily = "Jua, sans-serif";
    }
}
}
export default myFunction;