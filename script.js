import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://lgcjvkagdftvkunybctx.supabase.co'
const supabaseKey = 'sb_publishable_Veqod3BidMxYUXB2p0PcoQ_9yUoh-Tf'
const supabase = createClient(supabaseUrl, supabaseKey)

window.submitAnswer = async () => {
  try {
    const text = document.getElementById('answer').value.trim();
    if (!text) {
      alert('何か書いてから送信してください');
      return;
    }

    const { data, error } = await supabase
      .from('submissions')
      .insert({ challenge_id: 'C-1', answer_text: text });

    console.log({ data, error });

    if (error) {
      alert('ERROR: ' + error.message);
    } else {
      alert('送信完了');
    }
  } catch (e) {
    console.error(e);
    alert('JS例外: ' + (e?.message ?? e));
  }
};
