import SubpageHeader from "../../SubpageHeader";
import BeliefsCard from "./BeliefsCard";

function page() {
  return (
    <div className="flex-grow pb-10 mx-auto flex flex-col justify-center">
      <SubpageHeader title="What we believe" />
      <div className=" my-20 max-w-6xl mx-auto px-10 xl:px-0 gridgrid-cols-3 gap-10 flex flex-col">
        <BeliefsCard
          title="1. God"
          text="There is one God, who exists eternally in three distinct but equal persons: the Father, the Son, and the Holy Spirit. God is unchangeable in his holiness, justice, wisdom and love. He is the almighty Creator, Saviour and Judge who sustains and governs all things according to his sovereign will for his own glory."
        />
        <BeliefsCard
          title="2. The Bible"
          text="God has revealed himself in the Bible, which consists of the Old and New Testaments alone. Every word was inspired by God through human authors, so that the Bible as originally given is in its entirety the Word of God, without error and fully reliable in fact and doctrine. The Bible alone speaks with final authority and is always sufficient for all matters of belief and practice."
        />
        <BeliefsCard
          title="3. The Human Race"
          text="All men and women, being created in the image of God, have inherent and equal dignity and worth. Their greatest purpose is to obey, worship and love God. As a result of the fall of our first parents, every aspect of human nature has been corrupted and all men and women are without spiritual life, guilty sinners and hostile to God. Every person is therefore under the just condemnation of God and needs to be born again, forgiven and reconciled to God in order to know and please him."
        />
        <BeliefsCard
          title="4. The Lord Jesus Christ"
          text="The Lord Jesus Christ is fully God and fully man. He was conceived by the Holy Spirit, born of a virgin, and lived a sinless life in obedience to the Father. He taught with authority and all his words are true. On the cross he died in the place of sinners, bearing God’s punishment for their sin, redeeming them by his blood. He rose from the dead and in his resurrection body ascended into heaven where he is exalted as Lord of all. He intercedes for his people in the presence of the Father."
        />
        <BeliefsCard
          title="5. Salvation"
          text="Salvation is entirely a work of God’s grace and cannot be earned or deserved. It has been accomplished by the Lord Jesus Christ and is offered to all in the gospel. God in his love forgives sinners whom he calls, granting them repentance and faith. All who believe in Christ are justified by faith alone, adopted into the family of God and receive eternal life."
        />

        <BeliefsCard
          title="6. The Holy Spirit"
          text="The Holy Spirit has been sent from heaven to glorify Christ and to apply his work of salvation. He convicts sinners, imparts spiritual life and gives a true understanding of the Scriptures. He indwells all believers, brings assurance of salvation and produces increasing likeness to Christ. He builds up the Church and empowers its members for worship, service and mission."
        />
        <BeliefsCard
          title="7. The Church"
          text="The universal Church is the body of which Christ is the head and to which all who are saved belong. It is made visible in local churches, which are congregations of believers who are committed to each other for the worship of God, the preaching of the Word, the administering of Baptism and the Lord’s Supper; for pastoral care and discipline, and for evangelism. The unity of the body of Christ is expressed within and between churches by mutual love, care and encouragement. True fellowship between churches exists only where they are faithful to the gospel.

          "
        />
        <BeliefsCard
          title="8. Baptism and the Lord's Supper"
          text="Baptism and the Lord’s Supper have been given to the churches by Christ as visible signs of the gospel. Baptism is a symbol of union with Christ and entry into his Church but does not impart spiritual life. The Lord’s Supper is a commemoration of Christ’s sacrifice offered once for all and involves no change in the bread and wine. All its blessings are received by faith."
        />
        <BeliefsCard
          title="9. The Future"
          text="The Lord Jesus Christ will return in glory. He will raise the dead and judge the world in righteousness. The wicked will be sent to eternal punishment and the righteous will be welcomed into a life of eternal joy in fellowship with God. God will make all things new and will be glorified forever."
        />
      </div>
    </div>
  );
}

export default page;
