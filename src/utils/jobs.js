import { getRandomNumber } from './randomNumber';
const jobs = [
  {
    profession: '医師',
    min: 1000,
    max: 1320,
  },
  {
    profession: '歯科医師',
    min: 510,
    max: 630,
  },
  {
    profession: '獣医師',
    min: 510,
    max: 640,
  },
  {
    profession: '薬剤師',
    min: 500,
    max: 610,
  },
  {
    profession: '看護師',
    min: 430,
    max: 530,
  },
  {
    profession: '准看護師',
    min: 360,
    max: 440,
  },
  {
    profession: '看護補助者',
    min: 270,
    max: 330,
  },
  {
    profession: '診療放射線技師',
    min: 450,
    max: 550,
  },
  {
    profession: '臨床検査技師',
    min: 410,
    max: 500,
  },
  {
    profession: '歯科衛生士',
    min: 330,
    max: 410,
  },
  {
    profession: '歯科技工士',
    min: 300,
    max: 420,
  },
  {
    profession: '理学療法士',
    min: 360,
    max: 440,
  },
  {
    profession: '作業療法士',
    min: 360,
    max: 450,
  },
  {
    profession: 'ケアマネジャー',
    min: 350,
    max: 430,
  },
  {
    profession: 'ホームヘルパー',
    min: 280,
    max: 360,
  },
  {
    profession: '福祉施設介護員',
    min: 310,
    max: 380,
  },
  {
    profession: 'デザイナー',
    min: 380,
    max: 480,
  },
  {
    profession: '美容師',
    min: 270,
    max: 340,
  },
  {
    profession: '理容師',
    min: 270,
    max: 340,
  },
  {
    profession: '百貨店店員',
    min: 280,
    max: 360,
  },
  {
    profession: '販売店員',
    min: 280,
    max: 370,
  },
  {
    profession: '栄養士',
    min: 310,
    max: 390,
  },
  {
    profession: 'パティシエ',
    min: 300,
    max: 380,
  },
  {
    profession: '調理師',
    min: 300,
    max: 370,
  },
  {
    profession: '調理士見習',
    min: 230,
    max: 290,
  },
  {
    profession: '保育士',
    min: 320,
    max: 400,
  },
  {
    profession: '幼稚園教諭',
    min: 330,
    max: 400,
  },
  {
    profession: '高校教師',
    min: 630,
    max: 780,
  },
  {
    profession: '大学教授',
    min: 990,
    max: 1200,
  },
  {
    profession: '大学准教授',
    min: 780,
    max: 950,
  },
  {
    profession: '大学講師',
    min: 630,
    max: 790,
  },
  {
    profession: '専修学校教員',
    min: 450,
    max: 550,
  },
  {
    profession: '予備校講師',
    min: 350,
    max: 430,
  },
  {
    profession: '電車運転士',
    min: 540,
    max: 680,
  },
  {
    profession: '車掌',
    min: 510,
    max: 620,
  },
  {
    profession: 'パイロット',
    min: 1400,
    max: 1850,
  },
  {
    profession: '客室乗務員（CA)',
    min: 440,
    max: 540,
  },
  {
    profession: '自動車整備士',
    min: 390,
    max: 480,
  },
  {
    profession: '自動車組立工',
    min: 450,
    max: 550,
  },
  {
    profession: '自家用乗用自動車運転者',
    min: 310,
    max: 390,
  },
  {
    profession: '自家用貨物自動車運転者',
    min: 360,
    max: 440,
  },
  {
    profession: 'タクシー運転手',
    min: 310,
    max: 390,
  },
  {
    profession: 'バス運転手',
    min: 410,
    max: 510,
  },
  {
    profession: '営業用大型貨物自動車運転者',
    min: 410,
    max: 500,
  },
  {
    profession: '営業用普通・小型貨物自動車運転者',
    min: 360,
    max: 460,
  },
  {
    profession: '新聞記者',
    min: 710,
    max: 860,
  },
  {
    profession: 'システムエンジニア',
    min: 500,
    max: 610,
  },
  {
    profession: 'プログラマー',
    min: 360,
    max: 470,
  },
  {
    profession: '弁護士',
    min: 640,
    max: 800,
  },
  {
    profession: '社会保険労務士',
    min: 430,
    max: 530,
  },
  {
    profession: '電気工',
    min: 420,
    max: 520,
  },
  {
    profession: '建築士',
    min: 630,
    max: 770,
  },
  {
    profession: '測量士',
    min: 410,
    max: 510,
  },
  {
    profession: '不動産鑑定士',
    min: 670,
    max: 820,
  },
  {
    profession: 'とび工',
    min: 350,
    max: 430,
  },
  {
    profession: '大工',
    min: 360,
    max: 460,
  },
  {
    profession: '左官',
    min: 340,
    max: 420,
  },
  {
    profession: '型枠大工',
    min: 340,
    max: 420,
  },
  {
    profession: '配管工',
    min: 410,
    max: 510,
  },
  {
    profession: '家具工',
    min: 300,
    max: 380,
  },
  {
    profession: '土工',
    min: 350,
    max: 430,
  },
  {
    profession: '公認会計士',
    min: 610,
    max: 750,
  },
  {
    profession: '税理士',
    min: 610,
    max: 750,
  },
  {
    profession: '保険外交員',
    min: 360,
    max: 440,
  },
  {
    profession: '自然科学系研究者',
    min: 610,
    max: 750,
  },
  {
    profession: '化学分析員',
    min: 440,
    max: 540,
  },
  {
    profession: '技術士',
    min: 590,
    max: 730,
  },
  {
    profession: 'ワープロ・オペレーター',
    min: 310,
    max: 390,
  },
  {
    profession: 'キーパンチャー',
    min: 240,
    max: 320,
  },
  {
    profession: '電子計算機オペレーター',
    min: 340,
    max: 420,
  },
  {
    profession: 'スーパー店チェッカー',
    min: 210,
    max: 270,
  },
  {
    profession: '自動車外交販売員',
    min: 450,
    max: 560,
  },
  {
    profession: '家庭用品外交販売員',
    min: 400,
    max: 510,
  },
  {
    profession: '洗たく工',
    min: 230,
    max: 290,
  },
  {
    profession: '給仕従事者',
    min: 270,
    max: 330,
  },
  {
    profession: '娯楽接客員',
    min: 280,
    max: 360,
  },
  {
    profession: '警備員',
    min: 280,
    max: 360,
  },
  {
    profession: '守衛',
    min: 290,
    max: 360,
  },
  {
    profession: '旅客掛',
    min: 450,
    max: 550,
  },
  {
    profession: '製鋼工',
    min: 430,
    max: 540,
  },
  {
    profession: '非鉄金属精錬工',
    min: 440,
    max: 540,
  },
  {
    profession: '鋳物工',
    min: 400,
    max: 500,
  },
  {
    profession: '型鍛造工',
    min: 430,
    max: 530,
  },
  {
    profession: '鉄鋼熱処理工',
    min: 400,
    max: 500,
  },
  {
    profession: '圧延伸張工',
    min: 450,
    max: 570,
  },
  {
    profession: '金属検査工',
    min: 320,
    max: 400,
  },
  {
    profession: '一般化学工',
    min: 420,
    max: 520,
  },
  {
    profession: '化繊紡糸工',
    min: 380,
    max: 480,
  },
  {
    profession: 'ガラス製品工',
    min: 390,
    max: 480,
  },
  {
    profession: '陶磁器工',
    min: 360,
    max: 460,
  },
  {
    profession: '旋盤工',
    min: 400,
    max: 500,
  },
  {
    profession: 'フライス盤工',
    min: 370,
    max: 470,
  },
  {
    profession: '金属プレス工',
    min: 360,
    max: 440,
  },
  {
    profession: '鉄工',
    min: 390,
    max: 500,
  },
  {
    profession: '板金工',
    min: 370,
    max: 470,
  },
  {
    profession: '電気めっき工',
    min: 370,
    max: 460,
  },
  {
    profession: 'バフ研磨工',
    min: 340,
    max: 420,
  },
  {
    profession: '仕上工',
    min: 350,
    max: 430,
  },
  {
    profession: '溶接工',
    min: 380,
    max: 480,
  },
  {
    profession: '機械組立工',
    min: 380,
    max: 480,
  },
  {
    profession: '機械検査工',
    min: 360,
    max: 440,
  },
  {
    profession: '機械修理工',
    min: 430,
    max: 530,
  },
  {
    profession: '重電機器組立工',
    min: 360,
    max: 450,
  },
  {
    profession: '通信機器組立工',
    min: 290,
    max: 380,
  },
  {
    profession: '半導体チップ製造工',
    min: 380,
    max: 480,
  },
  {
    profession: 'プリント配線工',
    min: 280,
    max: 360,
  },
  {
    profession: '軽電機器検査工',
    min: 260,
    max: 320,
  },
  {
    profession: '精紡工',
    min: 240,
    max: 300,
  },
  {
    profession: '織布工',
    min: 280,
    max: 350,
  },
  {
    profession: '洋裁工',
    min: 190,
    max: 240,
  },
  {
    profession: 'ミシン縫製工',
    min: 190,
    max: 230,
  },
  {
    profession: '製材工',
    min: 300,
    max: 370,
  },
  {
    profession: '木型工',
    min: 300,
    max: 370,
  },
  {
    profession: '建具製造工',
    min: 320,
    max: 390,
  },
  {
    profession: '製紙工',
    min: 370,
    max: 460,
  },
  {
    profession: '紙器工',
    min: 340,
    max: 420,
  },
  {
    profession: 'プロセス製版工',
    min: 360,
    max: 450,
  },
  {
    profession: 'オフセット印刷工',
    min: 380,
    max: 470,
  },
  {
    profession: '合成樹脂製品成形工',
    min: 350,
    max: 430,
  },
  {
    profession: '金属・建築塗装工',
    min: 370,
    max: 470,
  },
  {
    profession: '機械製図工',
    min: 430,
    max: 520,
  },
  {
    profession: 'ボイラー工',
    min: 340,
    max: 410,
  },
  {
    profession: 'クレーン運転工',
    min: 450,
    max: 560,
  },
  {
    profession: '建設機械運転工',
    min: 370,
    max: 460,
  },
  {
    profession: '玉掛け作業員',
    min: 370,
    max: 480,
  },
  {
    profession: '発電・変電工',
    min: 450,
    max: 570,
  },
  {
    profession: '掘削・発破工',
    min: 540,
    max: 680,
  },
  {
    profession: '鉄筋工',
    min: 390,
    max: 500,
  },
  {
    profession: 'はつり工',
    min: 320,
    max: 400,
  },
  {
    profession: '港湾荷役作業員',
    min: 450,
    max: 590,
  },
  {
    profession: 'ビル清掃員',
    min: 230,
    max: 280,
  },
  {
    profession: '用務員',
    min: 250,
    max: 300,
  },
  {
    profession: '行政事務',
    min: 540,
    max: 680,
  },
  {
    profession: '学校事務警察事務',
    min: 290,
    max: 360,
  },
  {
    profession: '警察官',
    min: 630,
    max: 750,
  },
  {
    profession: '消防官',
    min: 540,
    max: 660,
  },
];

export const getJob = (ageRange, jobOpt) => {
  let result;
  let age;
  if (ageRange === 'ランダム') {
    const i = getRandomNumber(0, 3);
    switch (i) {
      case 0:
        age = '子供';
        break;
      case 1:
        age = '大人';
        break;
      case 2:
        age = '高齢';
        break;
    }
  } else {
    age = ageRange;
  }
  if ((age === '大人' && jobOpt === 'ランダム') || (age === '無し' && jobOpt === 'ランダム')) {
    const index = getRandomNumber(0, jobs.length);
    const job = jobs[index];
    const annualIncome = getRandomNumber(job.min, job.max + 1);
    result = {
      job: job.profession,
      annualIncome,
    };
  } else {
    result = null;
  }
  return result;
};
