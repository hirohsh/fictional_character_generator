import { getRandomNumber } from './randomNumber';
const hobbies = [
  {
    hobby: 'トランプ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'オセロ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'カルタ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '花札',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '野球',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'バスケットボール',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '囲碁',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ジャニオタ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'タロット占い',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '鉄道模型',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ヴァイオリン',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'スキー',
    ageRange: ['子供', '大人'],
  },
  {
    hobby: 'ポイ活',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'スマホゲーム',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '断捨離',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'コラージュ',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'フィギュアスケート鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '将棋鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '将棋',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'マンドリン',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'プログラミング',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '瞑想',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'Tik Tok',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'カジノゲーム',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ゲーム動画鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'フリーマーケット',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '遺跡巡り',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '空港巡り',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '作曲',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '風水',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'エクササイズ',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '音楽鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'イラスト',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'スイミング',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'サッカー',
    ageRange: ['子供', '大人'],
  },
  {
    hobby: 'バレーボール',
    ageRange: ['大人'],
  },
  {
    hobby: 'お笑い',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ソフトテニス',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '読書',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ピアノ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ライブ',
    ageRange: ['大人'],
  },
  {
    hobby: 'お絵かき',
    ageRange: ['子供'],
  },
  {
    hobby: '漫画',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '同人誌製作',
    ageRange: ['大人'],
  },
  {
    hobby: '合唱',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '日本舞踊',
    ageRange: ['大人'],
  },
  {
    hobby: 'バドミントン',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ビーチコーミング',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'DTM',
    ageRange: ['大人'],
  },
  {
    hobby: 'ドラマ鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '色鉛筆画',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '切手収集',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'レトロ品収集',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '古書収集',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '卓球',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '野球観戦',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'アニメ鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'スノーボード',
    ageRange: ['子供', '大人'],
  },
  {
    hobby: 'フィギュア集め',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '相撲観戦',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'スロット',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'エレキギター',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'お酒',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'お弁当作り',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'セリフ覚え',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ぬか床作り',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '華道',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '同人誌即売会',
    ageRange: ['大人'],
  },
  {
    hobby: '釣り',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '裁縫',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ドライブ',
    ageRange: ['大人'],
  },
  {
    hobby: 'ダンス',
    ageRange: ['子供', '大人'],
  },
  {
    hobby: '語学学習',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ラジオ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'デジタルイラスト',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '羊毛フェルト',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'パークゴルフ',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '盆栽',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '書道',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ボクシング',
    ageRange: ['大人'],
  },
  {
    hobby: '社交ダンス',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '刺繍',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'クラシックバレエ',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'アマチュア無線',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '落語鑑賞',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'オーラソーマ',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'プラモデル製作',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'プロレス観戦',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ペン習字',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '神社仏閣巡り',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '箏曲',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'リコーダー',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'アイリッシュハープ',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ウォーキング',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ガーデニング',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'カラオケ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '家庭菜園',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '競馬',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '散歩',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'バイク',
    ageRange: ['大人'],
  },
  {
    hobby: 'アクアリウム',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '登山',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'サーフィン',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ジョギング',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'ツーリング',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'バードウォッチング',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'パン作り',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '塗り絵',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'フルート',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'アロマテラピー',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '数独',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: 'ワイン',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'アウトドア',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '陶芸',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: 'カリンバ',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '空手',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '剣道',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '弓道',
    ageRange: ['子供', '大人', '高齢'],
  },
  {
    hobby: '縄跳び',
    ageRange: ['子供', '大人'],
  },
  {
    hobby: '居合',
    ageRange: ['大人', '高齢'],
  },
  {
    hobby: '爬虫類飼育',
    ageRange: ['子供', '大人', '高齢'],
  },
];

export const getHobby = (ageRange, hobbyOpt) => {
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
  if (hobbyOpt === '無し') {
    result = null;
  } else {
    const hobbyAry = [];
    let n;
    switch (age) {
      case '無し':
        n = getRandomNumber(1, 5);
        for (let i = 0; i < n; i++) {
          const index = getRandomNumber(0, hobbies.length);
          hobbyAry.push(hobbies[index].hobby);
        }
        result = [...new Set(hobbyAry)];
        break;
      default:
        const filterHobbies = hobbies.filter((item) => {
          const result = item.ageRange.some((val) => {
            return val === age;
          });
          return result;
        });
        n = getRandomNumber(1, 5);
        for (let i = 0; i < n; i++) {
          const index = getRandomNumber(0, filterHobbies.length);
          hobbyAry.push(filterHobbies[index].hobby);
        }
        result = [...new Set(hobbyAry)];
        break;
    }
  }
  return result;
};
