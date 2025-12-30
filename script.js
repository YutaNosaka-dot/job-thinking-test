import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://lgcjvkagdftvkunybctx.supabase.co'
const supabaseKey = 'sb_publishable_Veqod3BidMxYUXB2p0PcoQ_9yUoh-Tf'
const supabase = createClient(supabaseUrl, supabaseKey)

window.submitAnswer = async () => {
  const text = document.getElementById('answer').value

  const { error } = await supabase
    .from('submissions')
    .insert({
      challenge_id: 'C-1',
      answer_text: text
    })

  alert(error ? error.message : '送信完了')
}
