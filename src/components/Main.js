import React, {Component} from 'react';
import {Section, SectionTitle, Row, Col, Head, Paragraph, List, Image, Fact, Progress, CarrierBox, UnorderedList, ServiceBox, PortfolioBox} from '.';

class Main extends Component{

    constructor(props){
        super(props);
    }


    render() {

        return(

            <main id="main">
                {/* {sections} */}

                {/* about section */}
                <Section title={this.props.data.sections[0].title}>
                    <SectionTitle title={this.props.data.sections[0].title} subtitle={this.props.data.sections[0].subtitle}></SectionTitle>
                    <Row>
                        <Col colNum={3}>
                            <Image src={"assets/img/profile-img2.JPG"} alt={"mine"} width={300} height={350}></Image>
                        </Col>
                        <Col colNum={9}>
                            <Head
                                style={{
                                    "margin" : "10px 0 10px 0",
                                    "fontWeight": "700",
                                    "fontSize": "26px",
                                    "color" : "#728394",
                                }}>
                                {this.props.data.sections[0].info.title}
                            </Head>
                            <Paragraph
                                style={{
                                    "fontStyle" : "italic",
                                    "fontSize" : "14px"
                                }}
                            >
                                {this.props.data.sections[0].info.subtitle}
                            </Paragraph>
                            <List
                                data={this.props.data.sections[0].info.user}
                                colNum={2}
                                fontSize={16}>    
                            </List>
                            <Paragraph>
                                {this.props.data.sections[0].info.description}
                            </Paragraph>
                        </Col>
                    </Row>
                </Section>

                {/* facts section */}
                <Section title={this.props.data.sections[1].title}>
                    <SectionTitle title={this.props.data.sections[1].title} subtitle={this.props.data.sections[1].subtitle}></SectionTitle>
                    <Row>
                        <Col colNum={3}>
                            <Fact 
                                title={this.props.data.sections[1].facts[0].title}
                                count={this.props.data.sections[1].facts[0].count}
                                icon={this.props.data.sections[1].facts[0].icon}>
                            </Fact>
                            <UnorderedList
                                items={this.props.data.sections[1].facts[0].item}
                                style={{
                                    "fontSize" : "11px"
                                }}
                            ></UnorderedList>
                        </Col>
                        <Col colNum={3}>
                            <Fact 
                                title={this.props.data.sections[1].facts[1].title}
                                count={this.props.data.sections[1].facts[1].count}
                                icon={this.props.data.sections[1].facts[1].icon}>
                            </Fact>
                            <UnorderedList
                                items={this.props.data.sections[1].facts[1].item}
                                style={{
                                    "fontSize" : "11px"
                                }}
                            ></UnorderedList>
                        </Col>
                        <Col colNum={3}>
                            <Fact 
                                title={this.props.data.sections[1].facts[2].title}
                                count={this.props.data.sections[1].facts[2].count}
                                icon={this.props.data.sections[1].facts[2].icon}>
                            </Fact>
                            <UnorderedList
                                items={this.props.data.sections[1].facts[2].item}
                                style={{
                                    "fontSize" : "11px"
                                }}
                            ></UnorderedList> 
                        </Col>
                        <Col colNum={3}>
                            <Fact 
                                title={this.props.data.sections[1].facts[3].title}
                                count={this.props.data.sections[1].facts[3].count}
                                icon={this.props.data.sections[1].facts[3].icon}>
                            </Fact>
                            <UnorderedList
                                items={this.props.data.sections[1].facts[3].item}
                                style={{
                                    "fontSize" : "11px"
                                }}
                            ></UnorderedList>
                        </Col>
                    </Row>
                </Section>

                {/* skills section */}
                <Section title={this.props.data.sections[2].title}>
                    <SectionTitle title={this.props.data.sections[2].title} subtitle={this.props.data.sections[2].subtitle}></SectionTitle>
                    <Row>
                        <Col colNum={6}>
                            <Progress 
                                skill={this.props.data.sections[2].skills[0].skill}
                                proficiency={this.props.data.sections[2].skills[0].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[1].skill}
                                proficiency={this.props.data.sections[2].skills[1].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[2].skill}
                                proficiency={this.props.data.sections[2].skills[2].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[3].skill}
                                proficiency={this.props.data.sections[2].skills[3].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[4].skill}
                                proficiency={this.props.data.sections[2].skills[4].proficiency}>
                            </Progress>
                        </Col>
                        <Col colNum={6}>
                            <Progress 
                                skill={this.props.data.sections[2].skills[5].skill}
                                proficiency={this.props.data.sections[2].skills[5].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[6].skill}
                                proficiency={this.props.data.sections[2].skills[6].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[7].skill}
                                proficiency={this.props.data.sections[2].skills[7].proficiency}>
                            </Progress>
                            <Progress 
                                skill={this.props.data.sections[2].skills[8].skill}
                                proficiency={this.props.data.sections[2].skills[8].proficiency}>
                            </Progress>
                        </Col>
                    </Row>
                </Section>
                <Section title={this.props.data.sections[3].title}>
                    <SectionTitle title={this.props.data.sections[3].title} subtitle={this.props.data.sections[3].subtitle}></SectionTitle>
                    <Row>
                        <Col colNum={6}>
                            <Head
                                style={{
                                    "fontSize" : "26px",
                                    "fontWeight" : "700",
                                    "marginTop" : "20px",
                                    "marginBottom" : "20px",
                                }}
                            >{this.props.data.sections[3].resumes[0].carrier}</Head>
                            <CarrierBox>    
                                <Head
                                    style={{
                                        "lineHeight": "18px",
                                        "fontSize": "18px",
                                        "fontWeight": "600",
                                        "textTransform": "uppercase",
                                        "fontFamily": "'Poppins', sans-serif",
                                        "color": "#0563bb",
                                        "marginBottom": "10px"
                                    }}
                                >{this.props.data.sections[3].resumes[0].items[0].title}</Head>
                                <Head
                                    style={{
                                        "fontSize": "16px",
                                        "background": "#f7f8f9",
                                        "padding": "5px 15px",
                                        "display": "inline-block",
                                        "fontWeight": "600",
                                        "marginBottom": "10px"
                                    }}
                                >{this.props.data.sections[3].resumes[0].items[0].period}</Head>
                                <Paragraph>
                                    <em>{this.props.data.sections[3].resumes[0].items[0].emphasized}</em>
                                </Paragraph>
                                <UnorderedList items={this.props.data.sections[3].resumes[0].items[0].activities}></UnorderedList>
                            </CarrierBox>

                            <CarrierBox>    
                                <Head
                                    style={{
                                        "lineHeight": "18px",
                                        "fontSize": "18px",
                                        "fontWeight": "600",
                                        "textTransform": "uppercase",
                                        "fontFamily": "'Poppins', sans-serif",
                                        "color": "#0563bb",
                                        "marginBottom": "10px"
                                    }}
                                >{this.props.data.sections[3].resumes[0].items[1].title}</Head>
                                <Head
                                    style={{
                                        "fontSize": "16px",
                                        "background": "#f7f8f9",
                                        "padding": "5px 15px",
                                        "display": "inline-block",
                                        "fontWeight": "600",
                                        "marginBottom": "10px"
                                    }}
                                >{this.props.data.sections[3].resumes[0].items[1].period}</Head>
                                <Paragraph>
                                    <em>{this.props.data.sections[3].resumes[0].items[1].emphasized}</em>
                                </Paragraph>
                                <UnorderedList items={this.props.data.sections[3].resumes[0].items[1].activities}></UnorderedList>

                            </CarrierBox>
                        </Col>
                        <Col colNum={6}>
                            <Head
                                style={{
                                    "fontSize" : "26px",
                                    "fontWeight" : "700",
                                    "marginTop" : "20px",
                                    "marginBottom" : "20px",
                                }}
                            >{this.props.data.sections[3].resumes[1].carrier}</Head>
                            <CarrierBox>    
                                <Head
                                    style={{
                                        "lineHeight": "18px",
                                        "fontSize": "18px",
                                        "fontWeight": "600",
                                        "textTransform": "uppercase",
                                        "fontFamily": "'Poppins', sans-serif",
                                        "color": "#0563bb",
                                        "marginBottom": "10px"
                                    }}
                                >{this.props.data.sections[3].resumes[1].items[0].title}</Head>
                                <Head
                                    style={{
                                        "fontSize": "16px",
                                        "background": "#f7f8f9",
                                        "padding": "5px 15px",
                                        "display": "inline-block",
                                        "fontWeight": "600",
                                        "marginBottom": "10px"
                                    }}
                                >{this.props.data.sections[3].resumes[1].items[0].period}</Head>
                                <Paragraph>
                                    <em>{this.props.data.sections[3].resumes[1].items[0].emphasized}</em>
                                </Paragraph>
                                <UnorderedList items={this.props.data.sections[3].resumes[1].items[0].activities}></UnorderedList>

                            </CarrierBox>
                        </Col>
                    </Row>
                </Section>
                {/* resume section */}

                {/* portfolio section */}
                <Section title={this.props.data.sections[4].title}>
                    <SectionTitle title={this.props.data.sections[4].title} subtitle={this.props.data.sections[4].subtitle}></SectionTitle>
                    <Row>
                        <PortfolioBox 
                            title={this.props.data.sections[4].portfolios[0].title}
                            subtitle={this.props.data.sections[4].portfolios[0].subtitle}
                            main={this.props.data.sections[4].portfolios[0].main}
                            detailPage={this.props.data.sections[4].portfolios[0].detailPage}
                            width={300}
                            height={200}>
                        </PortfolioBox>
                        <PortfolioBox 
                            title={this.props.data.sections[4].portfolios[1].title}
                            subtitle={this.props.data.sections[4].portfolios[1].subtitle}
                            main={this.props.data.sections[4].portfolios[1].main}
                            detailPage={this.props.data.sections[4].portfolios[1].detailPage}
                            width={300}
                            height={200}>
                        </PortfolioBox>
                        <PortfolioBox 
                            title={this.props.data.sections[4].portfolios[2].title}
                            subtitle={this.props.data.sections[4].portfolios[2].subtitle}
                            main={this.props.data.sections[4].portfolios[2].main}
                            detailPage={this.props.data.sections[4].portfolios[2].detailPage}
                            width={300}
                            height={200}>
                        </PortfolioBox>
                    </Row>
                </Section>
                {/* portfolio section end*/}

                {/* <Section title={this.props.data.sections[4].title}>
                    <SectionTitle title={this.props.data.sections[4].title} subtitle={this.props.data.sections[4].subtitle}></SectionTitle>
                    <Row>
                        <Col colNum={4}>
                            <ServiceBox
                                width={370}
                                height={250}
                                src={this.props.data.sections[4].services[0].src}
                                service={this.props.data.sections[4].services[0].service}
                                description={this.props.data.sections[4].services[0].description}
                                url={this.props.data.sections[4].services[0].url}
                                >
                            </ServiceBox>
                        </Col>
                        <Col colNum={4}>
                            <ServiceBox
                                width={370}
                                height={250}
                                src={this.props.data.sections[4].services[1].src}
                                service={this.props.data.sections[4].services[1].service}
                                description={this.props.data.sections[4].services[1].description}
                                url={this.props.data.sections[4].services[1].url}
                                >
                            </ServiceBox>
                        </Col>
                        <Col colNum={4}>
                            <ServiceBox
                                width={370}
                                height={250}
                                src={this.props.data.sections[4].services[2].src}
                                service={this.props.data.sections[4].services[2].service}
                                description={this.props.data.sections[4].services[2].description}
                                url={this.props.data.sections[4].services[2].url}
                                >
                            </ServiceBox>
                        </Col>
                    </Row>
                </Section> */}
            </main>
        )
    }

}

export default Main;
// export default withRequest('assets/json/data.json')(Main);