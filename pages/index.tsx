import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
<form action="/api/checkout_sessions" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
</form>
    </div>
  )
}

export default Home
