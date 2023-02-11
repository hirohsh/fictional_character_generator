import { getRandomNumber } from './randomNumber';
const foods = [
  'アーティチョーク',
  'アーモンド',
  'アーモンドカステラ(山崎製パン)',
  'アーモンドチョコトルテ(スターバックス)',
  'あいがも(合鴨)',
  'アイスクリーム（高脂肪）',
  'あいなめ',
  'あおさ',
  '青のり(あおのり)',
  'あかいか',
  '赤いきつねうどん(関西)(マルちゃん)',
  '赤いきつねうどん(東向け)(マルちゃん)',
  '赤いきつねうどん(北海道)(マルちゃん)',
  '赤貝',
  '赤しそふりかけ',
  'アクエリアス(日本コカ・コーラ)',
  '揚げせんべい',
  'あけび',
  'あげまき(揚巻)',
  'アコウダイ',
  'あさつき',
  'アサリ',
  'アサリ水煮缶詰',
  'あしたば',
  '味つけイワシ缶詰',
  'あじ',
  '味付けロール(山崎製パン)',
  'アジの開き（干し）',
  'アジフライ',
  'あずき（砂糖入り）',
  'アスパラ＆サーモンサラダラップ(スターバックス)',
  'アスパラガス',
  'アセロラ',
  'アッサム　ブラック　ティー　ラテ(スターバックス)',
  'アップルパイ',
  'アップルパイ(山崎製パン)',
  '厚焼きソフト(山崎製パン)',
  'アテモヤ',
  'あなご',
  'あひる',
  '油揚げ',
  'アボガド',
  '甘エビ',
  'あまご',
  '甘食８個入(山崎製パン)',
  '甘鯛(あまだい)',
  'あまのり',
  'アマランサス',
  '甘栗',
  'アマンドクロワッサン(スターバックス)',
  '飴',
  'アメリカンアップルパイ４個入(山崎製パン)',
  'アメリカンファッションドーナツ５個入(山崎製パン)',
  'アユ',
  'アラスカめぬけ',
  'あらめ',
  'あられせんべい',
  'アルフォート',
  'ミニチョコレート　コクのあるミルク味(ブルボン)',
  'あわもち',
  'あわび',
  'あんこう',
  'あんず（生）',
  'あんず（ジャム）',
  'あんドーナツ(山崎製パン)',
  '杏仁豆腐',
  'あんぱん',
  'あんぱん(山崎製パン)',
  'あんまん',
  'あんみつ',
  'イーストドーナッツ',
  'いがい(貽貝)',
  'いかすみスパゲティ',
  'いかなご',
  'イカの塩辛',
  'イカフライ',
  'イクラ',
  'イクラ丼',
  'いさき',
  '石鯛　(いしだい)',
  '伊勢エビ',
  'イタヤ貝',
  'いちご',
  'いちごジャム',
  'イチゴスペシャル(山崎製パン)',
  'いちご大福',
  'いちじく',
  'いとより鯛',
  'いなご',
  'いのしし',
  'いのぶた',
  'いぼだい',
  '今川焼き',
  '芋かりんとう',
  'いよかん',
  'イワナ',
  '岩のり',
  'イングリッシュマフィン',
  'インゲン豆(ゆで)',
  'インスタントラーメン',
  'VAAM(ヴァーム)',
  'ういろう',
  'ウインナーソーセージ',
  'ウーロン茶',
  'ウエハース',
  'ウオッカ',
  'うぐい',
  'うぐいすぱん(山崎製パン)',
  'うぐいすもち',
  'うさぎ',
  '薄皮クリームパン５個入(山崎製パン)',
  '薄皮チョコパン５個入(山崎製パン)',
  '薄皮つぶあんぱん５個入(山崎製パン)',
  '薄皮ピーナッツパン５個入(山崎製パン)',
  '薄皮白あんぱん５個入(山崎製パン)',
  'ウスターソース',
  'うずら',
  'うずら卵',
  'うど',
  'うどん（ゆで）',
  'うな重',
  'うなぎかば焼き',
  'うな丼',
  'ウニ',
  '馬(うま)',
  'うまい棒(やおきん)',
  'うまづらはぎ',
  '海ぶどう（くびれづた）',
  'うめ（生）',
  '梅干',
  'うるめいわし',
  'うんしゅうみかん（温州みかん）',
  'エイ',
  'えごのり',
  'えごま(荏胡麻)',
  'エシャロット',
  'エスカルゴ',
  'エスプレッソケーキドーナツ(スターバックス)',
  'エスプレッソ　プラペチーノ(スターバックス)',
  'エソ',
  '枝豆',
  'えのきだけ',
  'エビ（生）',
  'エビエビカレー(ほっともっと)',
  '海老カツバーガー(モスバーガー）',
  'えびたま丼(ほっともっと)',
  'エビチリ',
  'エビチャーハン',
  'エビピラフ',
  'えびフィレオ',
  '(マクドナルド)',
  'エビフライ',
  'エリンギ',
  'エンゼルクリーム(イースト・シェルドーナッツ)(ミスド)',
  'エンゼルショコラ(ミスド・ミスタードーナッツ)',
  'エンゼルフレンチ(ミスド・ミスタードーナッツ)',
  'エンダイブ',
  'えんどう(ゆで)',
  'おいかわ',
  'オイスターソース',
  'おーいお茶(伊藤園)',
  '大きなコロッケパン(山崎製パン)',
  '大きなチョコチップメロン(山崎製パン)',
  '大きなハム＆タマゴ(山崎製パン)',
  '大きなブドウパン(山崎製パン)',
  '大きなメンチカツドーナツ(山崎製パン)',
  '大阪白菜',
  'おおさが',
  'オールドファション(ミスド)',
  'おかき',
  'おかひじき',
  'おから',
  'おきあみ',
  'オクラ',
  '小倉ぱん(山崎製パン)',
  'おこし',
  'おこぜ',
  'おごのり',
  'おしるこ',
  'お新香（松屋）',
  'お茶漬け',
  'お手軽ホットロール(山崎製パン)',
  'おでん1人用パック',
  '大根・たまご・こんにゃく・焼きちくわ・さつま揚・結び昆布',
  'おにぎり(うめ)',
  'おにぎり(おかか)',
  'おにぎり(辛子明太子)',
  'おにぎり(こんぶ)',
  'おにぎり(さけ)',
  'おにぎり(焼きたらこ)',
  'おにぎり(高菜炒め)',
  'おにぎり(ツナマヨネーズ)',
  'オヒョウ',
  'オムライス',
  '親子丼(ほっともっと)',
  'オリーブ油',
  'オリジナルツイスター(ケンタッキーフライドチキン）',
  'オレンジ',
  'オレンジスコーン(スターバックス)',
  'オレンジゼリー',
  'オレンジタルト(スターバックス)',
  'オレンジピールチョコレートバー(スターバックス)',
  'おろしチキン竜田弁当(ほっともっと)',
  'オロナミンC',
  'オロブランコ',
  'カーネルクリスピー(ケンタッキーフライドチキン）',
  'カール',
  'カイワレ大根',
  'かえる',
  '牡蠣・カキ（海）',
  '柿',
  'かき揚げ天丼',
  '柿の種(亀田製菓)',
  'カキフライ',
  'カクテキ',
  'かさご',
  'かじか',
  '果汁入りメロンパン(山崎製パン)',
  'カシューナッツ',
  '柏餅',
  'カスタード(イースト・シェルドーナッツ)(ミスド)',
  'カスタードプリン(カスタードプディング)',
  'カステラ',
  'カステラサンド(山崎製パン)',
  'カステラまんじゅう',
  '数の子(生)',
  '数の子(塩蔵)',
  'カゼイン',
  'かた揚げリングドーナツ７個入(山崎製パン)',
  'かたくちいわし',
  'カツオ',
  'かつお節',
  'カッテージチーズ',
  'カツ丼(なか卯）',
  'かつ丼(ほっともっと)',
  'かつカレー',
  'かつカレー（並）（なか卯）',
  'かっぱえびせん',
  'カニカマボコ',
  'カニクリームコロッケ',
  'かに玉',
  'カニピラフ',
  'かのこ',
  'カバーリングチョコレート',
  'かぶ',
  'カフェオーレ(グリコ)',
  'カフェベロナビーンチョコレート(スターバックス)',
  'カフェ　モカ　アイス(スターバックス)',
  'カフェ　モカ　ホット(スターバックス)',
  'カプチーノ(スターバックス)',
  'かぼす',
  'かぼちゃ(ゆで)',
  'かまいり茶',
  'カマス',
  'カマボコ',
  'カマンベールチーズ',
  'カマンベールチーズソフト４個入(山崎製パン)',
  '鴨かも',
  '鴨南蛮そば',
  'かや',
  'から揚げ（鶏）',
  'から揚カレー(ほっともっと)',
  'からあげクン　レギュラー',
  'から揚弁当(ほっともっと)',
  'からし菜',
  '辛子明太子(からしめんたいこ)',
  'からすみ',
  'からふとます',
  'ガリガリ君ソーダ',
  'カリフォルニアバーガー（マクドナルド）',
  'カリフラワー',
  'かりん',
  'かりんとう',
  'かるかん',
  'カルパス',
  'カルピスウォーター',
  'カルピスサワー',
  'カルピスソーダ',
  'カルボナーラ',
  'カレイ',
  'カレーうどん',
  'カレーレトルト',
  'カレーパン',
  'カレーパン(山崎製パン)',
  'カレールー',
  'カロリーメイト缶',
  'カロリーメイトゼリー',
  'カロリーメイトブロック',
  '川のり',
  'かわはぎ',
  '缶コーヒー',
  '乾燥わかめ',
  'かんぱち',
  'カンパン',
  'かんぴょう(ゆで)',
  'がんもどき',
  'キウイフルーツ',
  'きくらげ',
  'きじ',
  'キス',
  'きだい',
  'きちじ',
  'キットカット',
  'きつねうどん（並）（なか卯）',
  'きつねそば',
  'きな粉',
  '絹ごし豆腐',
  'きのこの山(明治製菓)',
  'きはだ',
  'きび',
  'きびだんご',
  'きびなご',
  'キムチ',
  'キャビア',
  'キャベツ',
  'キャラメル',
  'キャラメルコーン(東ハト)',
  'キャラメル　スチーマー(スターバックス)',
  'キャラメルドーナッツ(スターバックス)',
  'キャラメルナッツバー(スターバックス)',
  'キャラメル　プラペチーノ(スターバックス)',
  'キャラメル　マキアート　アイス(スターバックス)',
  'キャラメル　マキアート　ホット(スターバックス)',
  'キャロットケーキ(スターバックス)',
  '牛サーロイン',
  '牛脂',
  '牛タン',
  '牛とじ重(ほっともっと)',
  '牛丼(なか卯）',
  '牛ばら',
  '牛ひき肉',
  '牛肉ヒレ肉',
  '牛肉もも肉',
  '牛肉肩ロース',
  '牛めし(松屋)',
  '牛レバー',
  'きゅうり',
  '牛乳',
  'キュラソー',
  '餃子',
  '行者にんにく',
  '京菜',
  '玉露茶',
  '魚肉ソーセージ',
  'きりざんしょ',
  '切干大根',
  'キワノ',
  'キンカン',
  'きんぎょく糖',
  'キングクリップ',
  'ぎんざけ',
  '金山寺味噌',
  'キンサイ',
  'ぎんだら',
  'きんつば',
  '銀杏',
  'きんぴらごぼう',
  'キンメダイ',
  'Qoo とってもアップル',
  'Qoo とってもオレンジ',
  'クォーターパウンダー・チーズ',
  '(マクドナルド)',
  '茎にんにく',
  '草もち',
  '串団子　あん３本入(山崎製パン)',
  '串団子　たれ３本入(山崎製パン)',
  '串団子（しょうゆ）',
  '串団子（あんこ）',
  'くじら',
  'グズベリー',
  'くずまんじゅう',
  'ぐち',
  'クッキー',
  'くびれづた',
  'くらげ',
  'グラタン',
  'クランキーチョコレート(ロッテ)',
  'クランチチョコケーキ(山崎製パン)',
  '栗',
  'クリームコロッケ',
  'クリームスナック６本入(山崎製パン)',
  'クリームチーズ',
  'クリーミーチーズケーキ(山崎製パン)',
  'クリームシチュー',
  'クリームパン',
  'クリームパン(山崎製パン)',
  'グリーンアスパラ',
  'グリーンピース',
  '栗きんとん（栗金団）',
  '栗まん(山崎製パン)',
  '栗まんじゅう',
  'グリルチキンサンド',
  '車えび',
  'くるみ',
  'グルメボックス　とろーりとろけるチーズピザ(山崎製パン)',
  'グレープフルーツ',
  'クレソン',
  'くろあわぴたけ',
  '黒砂糖',
  '黒鯛(くろだい)',
  'くろまぐろ(赤身)',
  'くろまぐろ(脂身)',
  '黒豆（乾燥）',
  '黒豆（煮）',
  'クロワッサン',
  'くわい',
  'ケーキドーナッツ',
  'ケーキドーナッツ４個入(山崎製パン)',
  'ケール',
  '毛がに（ゆで）',
  'けし',
  '削り節',
  'ケチャップ',
  '月餅(山崎製パン)',
  '月餅(げっぺい)',
  'ケンサキイカ',
  'ケンタッキーフライドチキン',
  'オリジナルチキン',
  '玄米ごはん',
  '玄米茶',
  'コアラのマーチ（ロッテ）',
  '鯉',
  'コウイカ',
  '高級クリームパン(山崎製パン)',
  '高級ジャムパン(山崎製パン)',
  '高級つぶあん栗入り(山崎製パン)',
  '紅茶',
  '高野豆腐(乾燥)',
  'コーヒー',
  'コーヒー牛乳',
  'コーヒー　プラペチーノ(スターバックス)',
  'コーヒーロールケーキ(スターバックス)',
  'ゴーヤ',
  'コーラ(コカ・コーラ)',
  'コールスロー(ケンタッキーフライドチキン）',
  'ゴールデンチョコレート(ドーナッツ)(ミスド)',
  'コールラビ',
  'コーンクリームスープ（レトルト）',
  'コーンサラダ(ケンタッキーフライドチキン）',
  'コーンフレーク',
  'ごかぼう (五家宝)',
  '黒糖入りテーブルロール(山崎製パン)',
  '黒糖フークレエ(山崎製パン)',
  'ココア（ピュアココア）',
  'ココア（ミルクココア）',
  'ココアアーモンドクッキー(スターバックス)',
  'ココア　アイス(スターバックス)',
  'ココア　ホット(スターバックス)',
  'ココナツチョコレート(ドーナッツ)(ミスド)',
  'ココナッツパウダー',
  'ココナッツミルク',
  '午後の紅茶 ストレートティー(キリン)',
  '午後の紅茶 ミルクティー(キリン)',
  '午後の紅茶 レモンティー(キリン)',
  'こごみ',
  'こち',
  'コッペパン',
  'コッペパン　ジャム＆マーガリン(山崎製パン)',
  'コッペパン　つぶあん＆マーガリン(山崎製パン)',
  'コッペパン　ハチミツ＆マーガリン(山崎製パン)',
  'コッペパン　ピーナツクリーム(山崎製パン)',
  'このしろ',
  'ごぼう',
  'ごま',
  'ごま油',
  'ごま塩',
  'ゴマチーズパン(山崎製パン)',
  '小松菜',
  '小麦粉',
  '米　ご飯',
  '米ぬか油',
  '五目チャーハン',
  '五目ラーメン',
  'ごれんし（スターフルーツ）',
  'コロッケ',
  'コロネ（ビターチョコクリーム）(山崎製パン)',
  'コロネ（ミルクチョコクリーム）(山崎製パン)',
  'コロン（クリームコロン）（グリコ）',
  'コンソメ固形',
  'こんにゃく',
  'コンビーフ',
  '昆布茶',
  '昆布の佃煮',
  'ザーサイ',
  'サーロインステーキ',
  'サイダー',
  'サウザン野菜バーガー(モスバーガー）',
  'さきいか',
  'さくらえぴ',
  'さくらます',
  '桜餅',
  'さくらんぼ',
  'さくらんぼ缶',
  'ざくろ',
  'サケ',
  'サケ水煮缶詰',
  '鮭わかめごはん(ほっともっと)',
  '笹かまぼこ',
  'サザエ',
  'ザッハトルテ(スターバックス)',
  'サッポロポテトバーベQ味',
  'さつま揚げ',
  'さつまいも',
  'さといも',
  '里いもの煮っころがし',
  '里見の郷(山崎製パン)',
  'サニーレタス',
  'サバ',
  '鯖の味噌煮',
  'サブレ',
  'サフラワー油',
  'さやいんげん',
  'さやえんどう',
  'さより',
  'サラダ菜',
  'サラダ油',
  'ざるうどん',
  'ざるそば',
  'サワラ',
  '三色パン(山崎製パン)',
  '山菜そば',
  '山東菜さんとうさい',
  'サンドロール　女峰苺＆マーガリン(山崎製パン)',
  'サンドロール　小倉＆マーガリン(山崎製パン)',
  'さんぼうかん（三宝柑）',
  'サンマ',
  'サンマ蒲焼き缶詰',
  'しい',
  'シイクワシャー',
  'Ｃ．Ｃ．レモン(サントリー)',
  'しいたけ',
  'しいら',
  'シーチキン',
  'シーフードカレー',
  '塩辛(イカ)',
  '塩キャラメルショコラ(ミスド)',
  '塩サケ',
  '鹿',
  '四角豆しかくまめ',
  'ししとうがらし',
  'シジミ',
  'ししゃも',
  'しその葉',
  'シタビラメ',
  '七面鳥',
  'シチュー（レトルト）',
  'シナモンケーキ(ミスド)',
  'シナモンロール(スターバックス)',
  '芝えび',
  'しまあじ',
  'シマダヤ　本生ラーメン　醤油',
  'シャーベット',
  'じゃがいも',
  'シャカシャカチキン',
  '(マクドナルド)',
  'じゃがりこ　サラダ',
  'シャケ弁当(ほっともっと)',
  'しゃこ',
  'ジャバ　チップ　プラペチーノ(スターバックス)',
  'しゃぶしゃぶ',
  'ジャムパン',
  'ジャムパン(山崎製パン)',
  'ジャンボカリントドーナツ(山崎製パン)',
  'シューロールケーキ(山崎製パン)',
  'シュウマイ',
  '十六ささげ',
  'シュガーケーキ(ミスド)',
  'シュガーチュロ(スターバックス)',
  'シュガードーナッツ(スターバックス)',
  'シュガーレイズド(イースト・リングドーナッツ)(ミスド)',
  'シュガーロール６個入(山崎製パン)',
  'シュリンプ＆ポテトサンドイッチ(スターバックス)',
  '春菊',
  'シュークリーム',
  'じゅんさい',
  'ショートケーキ',
  'ショートニング',
  'しょうが',
  'しょうが焼(豚肉150g)',
  'しょうが焼＆メンチカツ弁当(ほっともっと)',
  'しょうが焼スペシャル弁当(ほっともっと)',
  'しょうが焼弁当(ほっともっと)',
  '食パン',
  'ショコラのタルト(ケンタッキーフライドチキン）',
  'シラウオ',
  'シラス干し（乾燥）',
  'シルバー',
  '白あんぱん(山崎製パン)',
  '白鮭しろさけ',
  '白瓜しろうり',
  '白身フライ',
  'ジン',
  'スイートコーン(ゆで)',
  'スイートブール(山崎製パン)',
  'スイートポテト(スターバックス)',
  'すいか(果実)',
  'ずいき',
  'スイスロール　カスタード(山崎製パン)',
  'スイスロール　炭火焼コーヒー(山崎製パン)',
  'スイスロール　バニラ(山崎製パン)',
  'すいぜんじのり',
  'すき焼き',
  'すきやき弁当(ほっともっと)',
  'すきやき弁当　半熟たまご付(ほっともっと)',
  'スイートワイン',
  'すぐきな',
  'すけとうだら',
  'スコーン チーズ味（湖池屋）',
  'スコーン バーべキュー味（湖池屋）',
  '寿司',
  'スジコ',
  'スズキ',
  'スターバックスシェイプクッキー(スターバックス)',
  'スターバックス　ラテ　アイス(スターバックス)',
  'スターバックス　ラテ　ホット(スターバックス)',
  'スチーム　ミルク(スターバックス)',
  'ズッキーニ',
  'スッポン',
  'ストロベリーホイップフレンチ(ミスド)',
  'ストロベリーミルクリング(イースト・リングドーナッツ)(ミスド)',
  'ストロベリーロール(スターバックス)',
  'スナックスティック９本入(山崎製パン)',
  'スナップえんどう',
  'スパイシーチキン(ファミマ)',
  'スパイシーチリチーズバーガー(モスバーガー）',
  'スパイシーチリバーガー(モスバーガー）',
  'スパイシーモスチーズバーガー(モスバーガー）',
  'スパイシーモスバーガー(モスバーガー）',
  'スパゲティ',
  '酢豚',
  'スプライト(コカ・コーラ)',
  'スペアリブ',
  'スペシャルサンド(山崎製パン)',
  'スポンジケーキ',
  'スモークサーモン',
  'スモークチキン　(スタンダード)(ケンタッキーフライドチキン）',
  'スモークチキン　(パストラミ)(ケンタッキーフライドチキン）',
  'スモークチキン　(フィレ)(ケンタッキーフライドチキン）',
  'すもも',
  'スルメ',
  'スルメイカ',
  'ズワイガニ（ゆで）',
  'ズワイガニ水煮缶詰',
  '赤飯',
  '赤飯おにぎり',
  'せり',
  'ゼリーキャンデー',
  'ゼリービーンズ',
  'セロリー',
  'せん茶',
  'せんべい',
  'ぜんまい',
  'ソイ　ラテ　アイス(スターバックス)',
  'ソイ　ラテ　ホット(スターバックス)',
  'そうめん',
  'そうめんかぼちゃ',
  '雑煮',
  'ソースかつ丼（並）（吉野家）',
  'ソーセージ（ウインナーソーセージ）',
  'ソーセージパイ(スターバックス)',
  'そば（ゆで）',
  'ソフトクリーム',
  'ソフトフレッシュ(山崎製パン)',
  'そらまめ(ゆで)',
  'タアサイ',
  'タイカレー',
  '大根',
  '大正えび',
  '大豆油',
  '大西洋鮭たいせいようさけ',
  'だいだい',
  '大地と緑のバターロール８個入(山崎製パン)',
  '大地と緑のレーズンバターロール７個入(山崎製パン)',
  '大福もち',
  'タイヤキ',
  '平貝たいらがい',
  'たかさご',
  '高菜',
  'たかべ',
  'DAKARA(清涼飲料水)',
  'たくあん',
  'たけのこ',
  'たこ焼き',
  'たこ焼き(銀だこ)',
  'タゾ　チャイ　ティー　ラテ　アイス(スターバックス)',
  'タゾ　チャイ　ティー　ラテ　ホット(スターバックス)',
  'タタミイワシ',
  'タチウオ',
  'たっぷり豆パン（金時）(山崎製パン)',
  '竜田揚げ(鶏)',
  '伊達巻・だて巻き',
  'たにし',
  'たぬきそば',
  'タブルチーズデニッシュ(スターバックス)',
  'ダブルチーズバーガー',
  'ダブルチョコレート(ドーナッツ)(ミスド)',
  'ダブルクォーターパウンダー・チーズ',
  'ダブルロール(山崎製パン)',
  'タマゴ',
  'たまご豆腐',
  '玉子丼',
  'たまごのタルト(ケンタッキーフライドチキン）',
  'たまねぎ',
  'たもぎたけ',
  'たらこスパゲティー',
  'たらの芽',
  'タラバガニ（ゆで）',
  'タラバガニ水煮缶詰',
  'タラコ',
  'タルト',
  '団子',
  'タンゴール',
  'タンゼロ',
  'タンメン',
  'チーズ＆ベーコンクロワッサン(スターバックス)',
  'チーズクリームペストリー(山崎製パン)',
  'チーズバーガー',
  'チーズバーガー(モスバーガー）',
  'チーズハンバーグ弁当(ほっともっと)',
  'チェリモヤ',
  'ちか',
  '力うどん',
  'ちぎりパン　ミルク(山崎製パン)',
  'ちぎりパン　レーズン(山崎製パン)',
  'チキンサラダサンドイッチ(スターバックス)',
  'チキンシーザーサラダラップ(スターバックス)',
  'チキン南蛮弁当(ほっともっと)',
  'チキン南蛮スペシャル弁当(ほっともっと)',
  'チキンバーガー(モスバーガー）',
  'チキンカツ',
  'チキンカレーライス',
  'チキンソテー',
  'チキンフィレオ',
  'チキンフィレサンド(ケンタッキーフライドチキン）',
  'ちくわ',
  'チゲ鍋弁当(ほっともっと)',
  'チコリー',
  'チダイ',
  'チヂミ',
  'チップスター　うすしお(ヤマザキナビスコ)',
  'ちまき',
  'チャーシュー',
  'チャーシューメン',
  'チャイナマーブル',
  '茶通ちゃつう',
  '中華紀行マーラーカオ５個入(山崎製パン)',
  '中華三昧　広東風拉麺(明星食品)',
  '中華三昧　担々麺(明星食品)',
  '中華三昧　汁なし担々麺(明星食品)',
  '中華丼',
  '中華まん　具たっぷり肉まん(山崎製パン)',
  '中華まん　具たっぷりあんまん（こしあん）(山崎製パン)',
  '中華まん　具たっぷりあんまん（つぶあん）(山崎製パン)',
  '中華まん　具たっぷりピザまん(山崎製パン)',
  '中華まん　具たっぷりカレーまん(山崎製パン)',
  'チョココロネ',
  'チョコチップスナック８本入(山崎製パン)',
  'チョコバナナ',
  'チョコファッション(ミスド)',
  'チョコボール　ピーナッツ（森永製菓）',
  'チョコレート',
  'ミルクチョコレート（明治製菓）',
  'チョコレート＆チェリーカップケーキポット(スターバックス)',
  'チョコレート　クリーム　プラペチーノ(スターバックス)',
  'チョコレートケーキ',
  'チョコレートチャンククッキー(スターバックス)',
  'チョコレートチャンクスコーン(スターバックス)',
  'チョコレート(ドーナッツ)(ミスド)',
  'チョコレート　トリュフ(スターバックス)',
  'チョコレートビスコッティ(スターバックス)',
  'チョコレートマカロン(スターバックス)',
  'チョコレートリング(イースト・リングドーナッツ)(ミスド)',
  'ちらし寿司',
  'チリチーズバーガー(モスバーガー）',
  'チリバーガー(モスバーガー）',
  'チリペッパーソース',
  'チンゲン菜',
  'チンジャオロース',
  'ツインシュー５個入(山崎製パン)',
  '月見そば',
  'つくし',
  'つくね',
  'つぶ',
  'つまみな',
  'つみれ',
  'つるな',
  'つるむらさき',
  'つわぶき',
  'テキサスバーガー（マクドナルド）',
  '鉄火丼',
  '手造り風メロン(山崎製パン)',
  'デニッシュあんぱん３個入・５個入(山崎製パン)',
  'デニッシュクリーム３個入・５個入(山崎製パン)',
  'デニッシュペストリー',
  'デニッシュリング　ハーフ(山崎製パン)',
  'デミハンバーグ弁当(ほっともっと)',
  'デミハンバーグスペシャル弁当(ほっともっと)',
  'テラビア',
  'デラックスシュー５個入(山崎製パン)',
  'デラックス弁当(ほっともっと)',
  'テリヤキチキンバーガー(モスバーガー）',
  'テリヤキバーガー(モスバーガー）',
  'てりやきマックバーガー',
  '(マクドナルド)',
  '天下一品あっさりラーメン',
  '天下一品こってりラーメン',
  'てんぐさ',
  '天丼(てんや)',
  '天ぷら(てんや)',
  '天ぷらうどん（なか卯）',
  '天ぷらそば',
  'テンペ',
  '唐辛子(果実生)',
  'とうがん（冬瓜）',
  '豆乳',
  '豆乳バナナマフィン(スターバックス)',
  '豆板醤（トウバンジャン）',
  '豆腐',
  '豆腐よう',
  '唐まんじゅうとうまんじゅう',
  'トウミョウ',
  'とうもろこし',
  'とうもろこし油',
  'ドーナツ',
  '十勝バターブレッド(山崎製パン)',
  '特から揚弁当(ほっともっと)',
  '得弁当(ほっともっと)',
  '特のりタル弁当(ほっともっと)',
  'ところてん',
  'とこぶし',
  'とさかのり',
  'どじょう',
  'トップシェル',
  'トッポ(ロッテ)',
  'とびうお',
  'とびきりチーズハンバーグサンド(モスバーガー）',
  'とびきりハンバーグサンド(モスバーガー）',
  'トフィーアーモンドチョコレート(スターバックス)',
  'トマト',
  'トマトジュース',
  'トマトグリルチキンサンド',
  'トマトケチャップ',
  'トマトチキンフィレオ',
  'ドライカレー',
  'とらふぐ',
  'どら焼き',
  'ドリア',
  'ドリアン',
  'トリ貝',
  'とりカツ弁当(ほっともっと)',
  'とりカツタルタル弁当(ほっともっと)',
  '鳥ささみ',
  '鳥皮',
  '鳥砂肝',
  '鳥手羽',
  '鳥ひき肉',
  '鳥むね',
  '鳥もも',
  '鳥レバー',
  'ドリップコーヒー　アイス(スターバックス)',
  'ドリップコーヒー　ホット(スターバックス)',
  'トレビス',
  'ドロップ',
  'とろろ(松屋）',
  'とろろそば',
  'とんかつ(豚ロース150g)',
  'とんがりコーン 焼きとうもろこし(ハウス)',
  'とん汁(なか卯）',
  '豚汁(松屋）',
  'とんぶり',
  'ナイススティック(山崎製パン)',
  'ながいも',
  '長崎皿うどん(リンガーハット)',
  '長崎ちゃんぽん(リンガーハット)',
  '長ネギ',
  '梨',
  'なす',
  'なずな',
  'なたね油',
  '納豆',
  '夏みかん',
  'なつめ',
  'なつめやし',
  '鍋焼きうどん',
  'ナポリタンスパゲティ',
  '生クリーム',
  'なまこ',
  'なまず',
  '生ハム',
  '生八つ橋あん入り',
  'なめこ',
  'なると',
  'にがうり（ゴーヤ）',
  'にぎす',
  '肉うどん（並）（なか卯）',
  '肉じゃが',
  '肉まん',
  '肉野菜炒め弁当(ほっともっと)',
  'ニジマス(淡水)',
  '２色の豆パン(山崎製パン)',
  'ニシン',
  'ニューソフトツナポテト(山崎製パン)',
  'ニューヨークチーズケーキ(スターバックス)',
  'ニューヨークバーガー（マクドナルド）',
  'ニラ',
  'ニンジン',
  'ニンニク',
  'ぬめりすぎたけ',
  'ネーブル',
  'ネオソフトマーガリン入り黒糖入りロール ３個入・６個入(山崎製パン)',
  'ネオソフトマーガリン入りテーブルロール ３個入・６個入(山崎製パン)',
  'ネオソフトマーガリン入り レーズンロール ３個入・６個入(山崎製パン)',
  'ねぎ',
  'ネギトロ丼',
  '練り切りねりきり',
  '練りようかん',
  '野沢菜',
  '野蒜（のびる）',
  'のりたま(丸美屋)',
  'のりの佃煮',
  'のり弁当(ほっともっと)',
  'のりタルタル弁当(ほっともっと)',
  'ハーゲンダッツ　バニラ　ミニカップ',
  'ハーゲンダッツ　ストロベリー　ミニカップ',
  'パーティバーレル(ケンタッキーフライドチキン）',
  'パーティバーレルB(ケンタッキーフライドチキン）',
  'ハートチョコロリー(スターバックス)',
  'パーム油',
  'バームロール(ブルボン)',
  'ばいがい',
  'パイシュー(山崎製パン)',
  'パイナップル（パインアップル）',
  'パイナップル缶',
  'パイの実(ロッテ)',
  'バウムクーヘン(スターバックス)',
  'ばかがい',
  '白菜',
  'パクチョイ',
  '白米',
  '馬刺し',
  'バジル',
  'はす',
  'ハスカップ',
  'パセリ',
  'はぜ',
  'パセリ',
  'バター',
  'バターケーキ(スターバックス)',
  'バタースコッチ',
  'バターピーナッツ',
  'バターロール',
  'バターロール６個入(山崎製パン)',
  'はたはた',
  'バタークッキー(ブルボン)',
  'バターケーキ',
  'はちの子缶詰',
  'はちみつ',
  'ハツカダイコン（二十日大根）',
  'はっさく',
  'パッションフルーツ',
  'ハッピーターン(亀田製菓)',
  '八宝菜',
  '鳩',
  'はと麦',
  'バナナ',
  'バナナスペシャル(山崎製パン)',
  'ハニーケーキ(ミスド)',
  'ハニーディップ(イースト・リングドーナッツ)(ミスド)',
  'バニラ　クリーム　プラペチーノ(スターバックス)',
  'パパイヤ',
  'ババロア',
  'パピコ　チョココーヒー',
  'はまぐり',
  'ハマフエフキ',
  'ハム',
  'ハム＆エッグサンドイッチ(スターバックス)',
  'はも',
  'ハヤシライス',
  'ハヤシライス（なか卯）',
  'はやとうり',
  'バラクータ',
  'パリパリチョコショコラ(ミスド)',
  'はるさめ(緑豆)',
  '春巻き',
  'パルメザンチーズ',
  'バレンシアオレンジ',
  'バレンタイン　ドリンキング　チョコレート(スターバックス)',
  'バレンタインメッセージチョコレート(スターバックス)',
  'ハワイアンバーガー（マクドナルド）',
  '番茶',
  'ハンバーガー',
  'ハンバーガー(モスバーガー）',
  'ハンバーグ',
  'バンバンジー',
  'ハンペン',
  'ピアディーニ　ベーコン＆エッグ(スターバックス)',
  'ビーフカレー(ほっともっと)',
  'ピータン',
  'ビート（てんさい）',
  'ピーナッツ',
  'ピーナッツバター',
  'ビーフカレーライス',
  'ビーフジャーキー',
  'ビーフストロガノフ',
  'ビーフン',
  'ピーマン',
  'ピーマンの肉詰め',
  'ビール',
  'ビーンズカレー',
  'ひえ',
  '日替り幕の内弁当　メンチカツカレーソース(ほっともっと)',
  '日替り幕の内弁当　ぶり照焼きとチキンカツ(ほっともっと)',
  '日替り幕の内弁当　鶏の黒酢さっぱり煮 (ほっともっと)',
  '日替り幕の内弁当　豚肉とキャベツの味噌だれ(ほっともっと)',
  '日替り幕の内弁当　海老カツタルタルソース(ほっともっと)',
  '日替り幕の内弁当　やわらかヒレカツ(ほっともっと)',
  'ひきわり納豆',
  'ピザ（Mｻｲｽﾞ1/8）',
  'ひしお味噌',
  'ひじき',
  'ビスケット',
  'ビスコッティ(スターバックス)',
  'ピスタチオ',
  'ビターチョコ(イースト・シェルドーナッツ)(ミスド)',
  'ピタヤ(ドラゴンフルーツ)',
  'ひつじ',
  'ビックマック',
  'ヒトエグサ(ひとえぐさ)',
  'ひなあられ',
  'ピノ',
  'ひのな',
  'ひのな漬',
  'ビビンバ',
  'ひまわり油',
  '冷やし中華',
  'ひゅうがなつ（日向夏）',
  'ひよこまめ(ゆで)',
  'ひらまさ',
  'ピラフ',
  'ヒラメ',
  'ひろしまな（広島菜）',
  'ビワ',
  'びんなが',
  'ふ（生ふ）',
  'ファイブミニ',
  'ファミチキ',
  'ファンタ　オレンジ(日本コカ・コーラ)',
  'ファンタ　グレープ(日本コカ・コーラ)',
  'フィシュバーガー(モスバーガー）',
  'フィレオフィシュ',
  'フィローネ ハム＆マリボーチーズ(スターバックス)',
  'フィローネ ビーフパストラミ(スターバックス)',
  'フィローネ ベジタブル(スターバックス)',
  'フォアグラ',
  'ふき',
  'ふきのとう',
  'ふぐ',
  '福神漬け',
  '豚丼（並）（吉野家）',
  'ふじまめ（つるまめ）',
  '豚キムチ丼（並）（吉野家）',
  '豚肉と野菜の味噌炒め弁当(ほっともっと)',
  '豚肩ロース',
  '豚の角煮',
  '豚バラ肉',
  '豚ひき肉',
  '豚ヒレ肉',
  '豚めし(松屋)',
  '豚もも肉',
  '豚レバー',
  '豚ロース',
  'ふだんそう（フダンソウ）',
  'プチトマト',
  'ブドウ',
  'ブドウパン',
  'ふな',
  'ぶなしめじ',
  'ふのり',
  'フライドチキン(ケンタッキーフライドチキンオリジナルチキン)',
  'フライドポテト(ケンタッキーフライドチキン）',
  'ブラックタイガー',
  'フランクフルト',
  'フランスパン',
  'ブランデー',
  'ぶり',
  'ぶり大根',
  'フリフリポテトM(ケンタッキーフライドチキン）',
  'ブリットル',
  'プリン',
  'ブルーチーズ',
  'フルーツ牛乳',
  'フルーツロールケーキ(ケンタッキーフライドチキン）',
  'ブルーベリー',
  'ブルーベリークリームスコーン(スターバックス)',
  'ブルーベリージャム',
  'ブルーベリーマフィン(スターバックス)',
  'プルーン',
  'プレッツェル',
  'フレンチクルーラー(ミスド)',
  'フレンチドレッシング',
  'フローキーシュー　アップル(ミスド)',
  'フローキーシュー　チョコ(ミスド)',
  'フローキーシュー　ブルーベリー(ミスド)',
  'プロセスチーズ',
  'ブロッコリー',
  '文旦ぶんたん',
  'ベーコン',
  'ベーコンレタストマトバーガー',
  'ベーコンレタスバーガー',
  'ヘーゼルナッツ',
  'ペカン',
  'ベジタブルサンドイッチ(スターバックス)',
  'ベジタブルチップス(スターバックス)',
  'ペスカトーレ',
  'へちま',
  'べったら漬け',
  'べにざけ',
  'べにばないんげん(ゆで)',
  'ベビースターラーメン　チキン',
  'ペペロンチーノ',
  'ベリーとヨーグルトのパンケーキ(メープル＆ホイップバター)(スターバックス)',
  '回鍋肉ホイコウロウ',
  'ホイップカスタードシュー４個入(山崎製パン)',
  'ほうじ茶',
  'ほうぼう',
  'ほうれん草',
  'ポークカレーライス',
  'ポークソテー(肉150g)',
  'ホースラディッシュ',
  'ポカリスエット(大塚製薬)',
  'ホキ',
  '干しいも',
  '干し柿',
  '干ししいたけ',
  '干しひじき',
  '干しブドウ',
  'ホタテ貝',
  'ホタテ水煮缶詰',
  'ホタテ貝柱',
  'ホタルイカ',
  '北海道チーズ蒸しケーキ(山崎製パン)',
  'ポッキー',
  'ほっき貝',
  'BOXケンタッキー(ケンタッキーフライドチキン）',
  'ホッケ',
  'ホッケの開き干し',
  'ほっけほぐし弁当(ほっともっと)',
  'ホットケーキ(山崎製パン)',
  'ホットケーキ',
  'ポップコーン',
  'ポテトサラダ',
  'ポテトチップス',
  'ポテトチップス（シーソルト）(スターバックス)',
  'ポテトチップス（ブラックペッパー）(スターバックス)',
  'ポトフ',
  'ポピーシード＆クリームチーズパウンド(スターバックス)',
  'ほや',
  'ぼら',
  'ポリンキー　めんたいあじ（湖池屋）',
  'ホロホロチョウ',
  'ホワイトサポテ',
  'ホワイトチョコレート',
  'ホワイトチョコレートプレッツェル(スターバックス)',
  'ホワイトチョコレートマカダミアクッキー(スターバックス)',
  'ホワイト　チョコレート　モカ　プラペチーノ(スターバックス)',
  'ホワイトデニッシュショコラ(山崎製パン)',
  'ホワイト　ホット　チョコレート　ホット(スターバックス)',
  'ホワイト　ホット　チョコレート　アイス(スターバックス)',
  'ホワイトリングドーナツ５個入(山崎製パン)',
  'ポンカン',
  'ボンゴレ',
  'ポン・デ・黒糖(ミスタードーナッツ)',
  'ポン・デ・ショコラ(ミスド)',
  'ポン・デ・ダブルショコラ(ミスド)',
  'ポン・デ・リング(ミスド)',
  'ホンモロコ',
  'ボンレスチキン(ケンタッキーフライドチキン）',
  'マアジ',
  'マーガリン',
  '麻婆豆腐',
  '麻婆茄子',
  '麻婆春雨',
  'マーブルエスプレッソブラウニー(スターバックス)',
  'マーブルチョコ（コーヒー＆ラズベリー）(スターバックス)',
  'マーマレード',
  'まいたけ',
  'マイワシ',
  'マカジキ',
  'マカダミアナッツ',
  'マガレイ',
  'マカロニ(ゆで)',
  'マカロニグラタン',
  'マカロン',
  'マグロ赤身',
  'まくわうり',
  'マコガレイ',
  'まこも（マコモ茸・マコモタケ）',
  'まさば',
  'マシュマロ',
  'マシュマロ＆チョコレートクッキー(スターバックス)',
  'マスノスケ',
  'マダイ',
  'マダラ',
  'マックスコーヒー',
  'マックフライポテト',
  'マックポーク',
  'マッシュルーム',
  '松茸 まつたけ',
  '抹茶　クリーム　プラペチーノ(スターバックス)',
  '抹茶ケーキドーナツ(スターバックス)',
  '抹茶　ティー　ラテ(スターバックス)',
  'まつも',
  'マナガツオ',
  '豆大福(山崎製パン)',
  'マヨネーズ',
  'まるごとソーセージ(山崎製パン)',
  'まるごとバナナ(山崎製パン)',
  'マルメロ',
  'マロングラッセ',
  'マロン＆マロン(山崎製パン)',
  'マンゴー',
  'マンゴー　パッション　フルーツ　プラペチーノ(スターバックス)',
  'マンゴープリン',
  'マンゴスチン',
  'まんじゅう（黒糖）(山崎製パン)',
  'まんじゅう（吹雪）(山崎製パン)',
  'まんじゅう（草）(山崎製パン)',
  'まんじゅう',
  'まんぷくとりめし＆肉野菜炒め(ほっともっと)',
  'まんぷくのり弁当(ほっともっと)',
  'ミートボール',
  'ミートソーススパゲティ',
  'みかん',
  'みかん缶',
  '水あめ',
  '水かけ菜（みずかけな）',
  '水ようかん',
  '味噌汁(松屋）',
  '味噌ラーメン',
  'ミックスナッツ＆クランベリー(スターバックス)',
  'ミックスナッツ＆レモンピール(スターバックス)',
  '三つ葉',
  '三ツ矢サイダー',
  '緑のたぬき天そば(関西)(マルちゃん)',
  '緑のたぬき天そば(東向け)(マルちゃん)',
  'みなみだら',
  'ミナミマグロ(赤身)',
  'ミナミマグロ(脂身)',
  'ミニ小倉４個入・６個入(山崎製パン)',
  'ミニカレーパン３個入(山崎製パン)',
  'ミニクリーム４個入・６個入(山崎製パン)',
  'ミニクリームドーナツ３個入(山崎製パン)',
  'ミニスコーン　メープルナッツ(スターバックス)',
  'ミニスナックゴールド(山崎製パン)',
  'ミニタマゴパン(山崎製パン)',
  'ミニつぶあんドーナツ３個入(山崎製パン)',
  'ミニピーナツ４個入・６個入(山崎製パン)',
  'みょうが',
  'みるがい',
  'ミルクチョコレート',
  '無塩バター',
  'むかご',
  'むかでのり',
  '蒸しまんじゅう',
  '蒸しようかん',
  'むつ',
  '明治エッセル　スーパーカップ　超バニラ',
  'メープルシロップ',
  'メガテリやき',
  'めかぶわかめ',
  'メガマフィン',
  'メガマック',
  'メキャベツ',
  'めごち',
  'メザシ',
  'めじな',
  'メジマグロ',
  'めたで',
  'めばち',
  'メバル',
  'メルルーサ',
  'メロン',
  'メロンパン',
  'メロンパン(山崎製パン)',
  '明太子スパゲティー',
  '明太弁当(ほっともっと)',
  'メンチカツ（冷凍）',
  'めんつゆ（ストレート）',
  'メンマ',
  'モカ　プラペチーノ(スターバックス)',
  'もがい',
  'もずく',
  'モスチーズバーガー(モスバーガー）',
  'モスバーガー(モスバーガー）',
  'モスライスバーガー　海鮮かきあげ(塩だれ)(モスバーガー）',
  'モスライスバーガー　カルビ焼肉(モスバーガー）',
  'モスライスバーガー　五目きんぴら(モスバーガー）',
  '餅(もち)',
  'モナカ',
  'もめん豆腐',
  '桃',
  '桃の缶詰',
  '桃山(山崎製パン)',
  'もやし（緑豆）',
  'モロヘイヤ',
  'モンブラン２個入(山崎製パン)',
  'やぎ',
  '焼味豚丼(吉野家)',
  '焼きうどん',
  '焼きおにぎり',
  '焼きカレーパン(山崎製パン)',
  '焼肉弁当(ほっともっと)',
  '焼肉スペシャル弁当(ほっともっと)',
  '焼き海苔',
  '焼きそば',
  'ヤクルト',
  '野菜カレー',
  'ヤツメウナギ',
  'やなぎまつたけ',
  'やまいも(長芋）',
  'ヤマザキメロンパン(山崎製パン)',
  'やまめ',
  'ヤリイカ',
  'やわらか卵のシフォンケーキ(山崎製パン)',
  'ゆず（果汁）',
  'ゆず（果皮）',
  'ユッケ（牛肉）',
  'ユッケ丼まぐろ（すき家）',
  'わかめスープ付',
  'ユッケジャンスープ',
  'ゆでタマゴ',
  'ゆば（乾燥）',
  'ゆべし',
  'ゆりね',
  'ようかん',
  'ヨーグルト',
  '嫁菜（よめな）',
  'よもぎ',
  'ラーメン',
  'ライチー',
  'ライム',
  'ライ麦パン',
  'ラクトアイス（普通脂肪）',
  'ラクトアイス（低脂肪）',
  'ラザニア',
  'ラズベリー',
  'ラズベリーマカロン(スターバックス)',
  '落花生',
  'らっきょう',
  'ラベンダー　アール　グレイ　ティー　ラテ(スターバックス)',
  'ラム酒',
  'ラム肉',
  'ランチパック　タマゴ(山崎製パン)',
  'ランチパック　ツナ＆チーズ(山崎製パン)',
  'ランチパック　ツナマヨネーズ(山崎製パン)',
  'ランチパック　ピーナッツ(山崎製パン)',
  'ランチパック　ロースハム(山崎製パン)',
  'リーキ',
  'リップシェイプチョコレート(スターバックス)',
  'りゅうがん　竜眼（乾）',
  '緑豆(ゆで)',
  'リンゴ',
  'ルバーブ',
  'ルマンド（ブルボン）',
  'レーズンバターロール６個入(山崎製パン)',
  'レーズンボール４個入(山崎製パン)',
  'レーズンロール７個入(山崎製パン)',
  'レタス',
  'レバー',
  'レバニラ炒め',
  'レモン',
  'レモンケーキ(スターバックス)',
  'レンコン',
  'レンズ豆(乾)',
  'ロースカツカレー(ほっともっと)',
  'ロースカツバーガー(モスバーガー）',
  'ローストチキン',
  'ローストチキンバーレル(ケンタッキーフライドチキン）',
  'ローストビーフ',
  'ロースとんかつ弁当(ほっともっと)',
  'ローズネットクッキー(山崎製パン)',
  'ロースハム',
  'ロールキャベツ',
  'ロールケーキ(スターバックス)',
  'ロールちゃん（チョコクリーム）(山崎製パン)',
  'ロールちゃん（ホイップクリーム）(山崎製パン)',
  'ロールパン',
  'ロケットサラダ',
  'ロゴチョコレートダーク(スターバックス)',
  'ロゴチョコレートポーチ(スターバックス)',
  'ロゴチョコレートミルク(スターバックス)',
  'わかさぎ',
  'わかめ',
  'わけぎ',
  'わさび',
  'ワッフル',
  '和風キノコスパゲティ',
  '和風チキンカツサンド(ケンタッキーフライドチキン）',
  'わらび',
  'ワンタンメン',
];

export const getSomeFood = (foodOpt) => {
  let result;
  if (foodOpt === '無し') {
    result = null;
  } else {
    const foodAry = [];
    const n = getRandomNumber(1, 5);
    for (let i = 0; i < n; i++) {
      const index = getRandomNumber(0, foods.length);
      foodAry.push(foods[index]);
    }
    result = [...new Set(foodAry)];
  }
  return result;
};
