import Head from "next/head";
import styles from "../styles/pages/Home.module.css";

import { AcademicData } from "../components/inputData/academicData";
import { ContactData } from "../components/inputData/contactData";
import { PessoalData } from "../components/inputData/pessoalData";
import { ProfessionalData } from "../components/inputData/professionalData";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Open Currículo Vitae</title>
      </Head>
      <h2>OPEN CV!</h2>
      <section>
        <div></div>
      </section>
    </div>
  );
}
