import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'SUPABASE_URL'
const supabaseKey = 'ANON_KEY'
const supabase = createClient(supabaseUrl, supabaseKey)

// 3分類の最小セット（まずは各1問）
const CHALLENGES = {
  'C-1': {
    title: 'コンサル型：原因構造化',
    prompt: '地方のスーパーマーケットの売上が落ちています。考えられる原因を3階層で整理してください。箇条書きでOKです。'
  },
  'P-1': {
    title: '事業会社PM型：優先順位判断',
    prompt: '新規プロジェクトを始めますが、人も時間も足りません。以下の4つを優先度順に並べてください（理由も記載）。①顧客インタビュー ②仕様書作成 ③上司への報告資料 ④スケジュール調整'
  },
  'S-1': {
    title: 'スタートアップ型：仮決め基準',
    prompt: '情報がほとんどない状態で、今日中に決めなければならない方針があります。何を基準に決めますか？'
  }
}

let currentId = 'C-1'

window.setChallenge = (id) => { ... }
window.submitAnswer = async () => { ... }
  currentId = id
  document.getElementById('title').innerText = CHALLENGES[id].title
  document.getElementById('prompt').innerText = CHALLENGES[id].prompt
  document.getElementById('answer').value = ''
}

window.submitAnswer = async () => {
  const btn = document.getElementById('submitBtn')
  const text = document.getElementById('answer').value.trim()

  if (text.length < 50) {
    alert('50文字以上で回答してください')
    return
  }

  btn.disabled = true
  btn.innerText = '送信中...'

  const { error } = await supabase
    .from('submissions')
    .insert({ challenge_id: currentId, answer_text: text })

  btn.disabled = false
  btn.innerText = '送信'

  alert(error ? ('ERROR: ' + error.message) : '送信完了')
}

// 初期表示
window.setChallenge(currentId)
<script type="module" src="script.js"></script>

