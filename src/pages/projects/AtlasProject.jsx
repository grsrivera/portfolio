import figure1 from "../../assets/atlas/figure1.png"
import figure2 from "../../assets/atlas/figure2.png"
import figure3a from "../../assets/atlas/figure3a.png"
import figure3b from "../../assets/atlas/figure3b.png"
import figure4 from "../../assets/atlas/figure4.png"
import figure5 from "../../assets/atlas/figure5.png"
import figure6 from "../../assets/atlas/figure6.png"
import figure7a from "../../assets/atlas/figure7a.png"
import figure7b from "../../assets/atlas/figure7b.png"
import figure8 from "../../assets/atlas/figure8.png"


export default function AtlasProject() {
	return (
		<main className="project-page">
			<h1 className="text-4xl font-bold mb-10">Income Mobility in Anchorage, Alaska</h1>
			<p>
				The following is the final project for <a href="https://www.hks.harvard.edu/courses/using-big-data-solve-economic-and-social-problems">Prof. Greg Bruich's</a> Using Big Data to Solve Economic and Social Problems class at Harvard Kennedy School. The prompt was to explore a question using the <a href="https://www.opportunityatlas.org/">Opportunity Atlas</a>, an interactive data tool that maps the long-term outcomes of children in the U.S. based on where they grew up. 
			</p>

			<h3>Files</h3>
			<ul>
				<li><a href="atlas/project_part2_code_GRivera.Rmd">R Code</a></li>
				<li><a href="atlas/atlas.dta">Opportunity Atlas Data</a></li>
				<li><a href="atlas/social_capital_high_school.csv">Social Capital Data</a></li>
				<li><a href="atlas/lockbox_atlas.dta">Lockbox Data</a></li>
			</ul>
			
			<br />
			<hr />

			<h2>Write-Up</h2>
			<p>
				This memo investigates whether higher-quality high schools lead to greater income mobility. Using regression analysis and machine learning, the results showed that demographic characteristics of school zones, particularly racial composition, are the strongest predictors of child income. Still, there is strong evidence that school quality plays an important role. The memo concludes by outlining two quasi-experimental approaches — regression discontinuity design and difference-in-differences—that the city could use to more accurately estimate the causal effect of school quality on long-term outcomes. 
			</p>

			<h3>Background</h3>
			<figure>
				<img src={figure1} className="max-h-[70vh]" />
				<figcaption>Figure 1<br />Note: The teal lines depict the school zones. For context, the border of Anchorage is just east of Bartlett High School. Tracts to the east of Bartlett, like Joint Base Elemendorf-Richardson, are ignored in this analysis.</figcaption>
			</figure>
			<p>
				The motivation for this analysis grew from my initial exploration of my hometown on the Opportunity Atlas. As depicted in Figure 1, the tracts with children who experience the greatest upward mobility in adulthood are located around only a few schools.<sup>1</sup>
			</p>
			<p>
				Growing up in Anchorage, there was a common belief that the best schools in the city were Service and South Anchorage High Schools. This perception possibly stemmed from the notion that many wealthy families lived on the south side of town, and consequently, those schools received greater resources through private donations. That belief was supported by the Atlas map, which showed those schools surrounded by the tracts with the greatest mobility. I set out to test whether attending them had any measurable impact on long-term outcomes. 
			</p>
			<p>
				I hypothesized that higher school quality leads to greater upward mobility for children in Anchorage. Specifically, students zoned to schools with better teachers are more likely to succeed in college because they develop a strong academic foundation and effective study habits in high school. In turn, having a college degree enables access to higher-paying jobs. I test this hypothesis by combining and analyzing data from the Opportunity Atlas, Social Capital Atlas, and the Alaska Department of Education.
			</p>


			<h3>Methodology</h3>
			<p>The following data sources were used to combine numerous variables:</p>
			<ul>
				<li><strong>The Opportunity Atlas: </strong>Census tract level demographic data, including children’s income in adulthood (kfr_pooled_pooled_p25), share of white population (share_white2010), and share of single parents (singleparent_share2010).<sup>2</sup></li>
				<br />
				<li><strong>The Social Capital Atlas: </strong>High school level economic connectedness score (ec_own_ses_hs) was used for the analysis.<sup>3</sup></li>
				<br />
				<li><strong>Alaska Department of Education: </strong>The state collects data along various dimensions to quantify the quality of schools. There are three variables used in the analysis by which the state measures teacher quality: percentage of teachers that have been at the school for 5 or more years (retention), percentage that are teaching in their field of study (field), and percentage that are in their first year of teaching (inexperienced).<sup>4</sup> In addition, the state shares geospatial boundary data for school zones, which were used to link Census tracts to school zones.<sup>5</sup> This comparison of the six Anchorage high schools.<br />
				<br />
				One key assumption had to be made to combine the Alaska and Atlas datasets: The quality of Anchorage high schools remains consistent over time. The state began tracking school scores in 2017, roughly 18 years after the children in the Opportunity Atlas were in high school. The analysis would ideally use school quality data from the same period, but that information was unavailable. As a result, any changes in school quality over time may bias the estimated relationship between teacher quality and children’s income.</li>
			</ul>

			<p>
				Two notable decisions were made in the data pre-processing stage. The first was how Census tracts were assigned to school zones, which are not in the Atlas data. Using the map of zones provided by the Department of Education, R vectors were created holding the tracts found within the zones. The Anchorage School District zones do not perfectly match the tracts, so some zones split tracts. The average predictor values of the tracts were used for such cases, ensuring the tracts reflect the qualities of the different schools.
			</p>

			<p>
				Second, to conduct certain comparisons across schools, a composite teacher quality score was created by multiplying the three metrics—retention, field, and experience—with equal weight. This enabled ranking of the schools by overall teacher quality in a way consistent with the methods of the Department of Education, which distributes weights equally for those scores.
			</p>

			<p>
				After cleaning and structuring the data, several analytical techniques were applied to test the hypothesis that school quality influences upward mobility. Child income for children born to parents at the 25th percentile is used as the outcome metric, while a mix of schoollevel and community-level factors is used as inputs. The following were conducted: 
			</p>
			<ul>
				<li><strong>Regression of college degree attainment on teacher quality: </strong>The relationship between the share of tract residents with a college degree (frac_coll_plus2010) and teacher quality metrics was modeled to test the causal mechanism</li>
				<br />
				<li><strong>Mean child income by school: </strong>Average child income by school was visualized to reveal if better schools were associated with higher income.</li>
				<br />
				<li><strong>Mean child income by school, conditional on race: </strong>The income analysis was repeated while conditioning on white and Native American racial groups to test whether the differences held constant.</li>
				<br />
				<li><strong>Multivariate regressions: </strong>Child income was regressed on all three teacher quality metrics while controlling for tract-level socioeconomic variables.</li>
				<br />
				<li><strong>Random forest modeling: </strong>A random forest model was created to assess the importance of teacher quality compared to other tract-level demographic predictors.</li>
			</ul>

			<h3>Findings</h3>
			<ol>
				<li><strong>Teacher Quality is Positively Correlated with Higher Education Degree Attainment</strong><br />The first test of the hypothesis was checking the causal mechanism, which is that better teachers contribute to success in college. A regression of the proportion of a tract with a college degree or more over the three teacher quality metrics supported this (Figure 2). Both sameschool (teacher retention) and field (teaching their subject of expertise) were statistically significant. The inexperienced variable was not statistically significant, suggesting no relationship between the proportion of new teachers and higher educational outcomes.
					<figure>
						<img src={figure2} className="max-h-60 w-auto" />
						<figcaption>Figure 2: Rate of College Level Degree Attainment Regressed on Teacher Quality</figcaption>
					</figure></li>
				<li><strong>School Quality is <i>Initially</i> Moderately Associated with Child Income</strong><br />There appears to be a moderate correlation between child income and school quality. As depicted in Figure 3, South High, which has the highest teacher quality score, also has the highest mean child income, while West, which has the lowest teacher quality score, is among the lowest in income mobility. Although the overall trend is downward, the relationship is not perfectly linear—East, Bartlett, and Dimond do not follow the pattern exactly, suggesting that other factors may influence the outcomes.
					<figure>
						<img src={figure3a} className="max-h-60 w-auto md:max-h-70"  />
						<figcaption>Figure 3a</figcaption>
					</figure>
					To test this relationship further, child income (kfr_pooled_pooled_p25) was regressed on the three teacher quality metrics. The results, shown in Figure A1 in the Appendix, indicate that field and inexperienced are both statistically significant, while sameschool is not. In other words, two of the metrics for teacher quality are correlated with child income in this model. However, the model explained a low amount of the variation, with an adjusted R2 of only 0.21. These findings suggest that while teacher quality may matter, there may be other factors contributing to upward mobility across schools.
					<figure>
						<img src={figure3b} className="max-h-60 w-auto" />
						<figcaption>Figure 3b</figcaption>
					</figure></li>
				<li><strong>Child Income Differences by School Are Consistent Across Race</strong><br />The next test was to check if the pattern found between child income and school quality was constant between racial groups. If not, that would suggest that there are factors outside of teacher quality that contribute to child income. Separate bar charts were plotted for white and Native American children (Figure 4). Both charts reflect the same patterns found previously. These results show that the relationship between child income and school quality is not due to differences in the racial composition of school zones.
					<figure>
						<img src={figure4} className="md:max-h-70 w-auto" />
						<figcaption>Figure 4</figcaption>
					</figure></li>
				<li><strong>The Association Between Child Income and Teacher Quality Weakens When Controlling for Demographics</strong><br />Once community-level characteristics were added to the regression model of child income over teacher quality, the teacher quality predictors lost their significance (see Figure 5 for the stepwise addition of community-level variables). By the final model, only the proportion of white residents (share_white2010) remains a significant predictor. This suggests that the initial relationship between teacher quality and income may be confounded by neighborhood demographics rather than reflecting a causal effect of teacher quality alone.<br />
					<figure>
						<img src={figure5} className="max-h-[60vh] w-auto" />
						<figcaption>Figure 5</figcaption>
					</figure>
					Examining this further, the initial regression model from Finding 1 of the causal mechanism, that better teachers contribute to higher education success, was repeated but with the demographics variable. Similarly, the teacher quality predictors lost their significance, and the proportion of white residents was the single statistically significant predictor. 
				</li>
				<br />
				<li><strong>Random Forest Analysis Reveals Mixed Importance of Demographic and School Quality Predictors</strong><br />A random forest model was trained using the same six predictors used in the final multivariate regression to estimate the predictive power of the variables. The variable importance plot in Figure 6 shows that share_white2010 had the greatest predictive value, followed by sameschool and singleparent_share2010. While the regression model did not find sameschool to be statistically significant, its high ranking in the random forest suggests that teacher retention may still play a role in predicting child outcome.
					<figure>
						<img src={figure6} className="max-h-60 w-auto md:max-h-70" />
						<figcaption>Figure 6</figcaption>
					</figure></li>
				<li><strong>Lockbox Analysis Indicates Robustness of Models</strong><br />Some of the models were recreated on separate holdout data to evaluate whether the relationships identified in the original analysis remain when introduced to new data. The bar charts of mean child income by school were recreated using the lockbox dataset. As shown in Figure 7a, the general downward trend in mean income from South (highest teacher quality) to West (lowest) continues to hold for both white and Native American children, with some variation in the middle-ranked schools. These patterns are the same as those observed in the Atlas sample, strongly suggesting that the teacher quality-to-income relationship is not specific to that sample.
					<figure>
						<img src={figure7a} className="md:max-h-70 w-auto" />
						<figcaption>Figure 7a</figcaption>
					</figure>
					To further test the robustness of the models, a regression of child income on teacher quality metrics and economic connectedness was run on the lockbox data. The results were consistent with the Atlas model (Figure 7b). Notably, sameschool (teacher retention) was statistically significant in the lockbox model but not in the Atlas model, despite nearly identical coefficient estimates (133.1 and 130.8, respectively). This difference may reflect sampling fluctuation, as filtering for Anchorage tracts results in a smaller sample size of n = 42.
					<figure>
						<img src={figure7b} className="max-h-[50vh] w-auto" />
						<figcaption>Figure 7b</figcaption>
					</figure></li>
			</ol>


			<h3>Analysis</h3>
			<p>The results of the regression models suggested that demographic factors are stronger predictors of upward mobility than teacher quality. When the proportion of the white population was added to the multivariate regression, the three teacher quality metrics lost their statistical significance. This raises the question for policymakers: Should teacher quality be dismissed? There are several reasons that it should still be considered.</p>
			<p>First, while the models showed that demographic characteristics had a stronger association than the teacher quality variables, teacher quality still demonstrated some predictive power. When modeled on its own, teacher quality explained 21% of the variance in child income outcomes—not a negligible amount (Figure 3b). Moreover, when comparing income outcomes across schools, the pattern persisted across racial groups (Figure 4). This implies that school-level factors, like quality of instruction, still play a role independent of race. Additionally, in the random forest model, one of the teacher quality variables, sameschool, was the second most important factor, again providing further support that there is more at play than demographics alone. While overall the findings suggest that demographics play the biggest role in long-term outcomes for children, there is ample evidence that supports that the quality of the schools that the children attend is also important.</p>
			<p>The second reason is that the true mechanism for upward mobility is classroom instruction. School zone demographic factors are not direct pathways through which a child’s long-term outcome is shaped. A child does not earn a higher income because they live in a predominantly white neighborhood; rather, it is receiving quality instruction that leads to a college degree that leads to access to higher-paying jobs. Regardless of the racial composition of a child’s neighborhood, they will still go to school and interact with a teacher. Therefore, what happens in the classroom should still be a focus for policymakers.</p>
			<p>Third, the limitations of the data may understate the true effect of teacher quality. The metrics created by the Department of Education—teacher retention, subject alignment, and inexperience—may not fully capture what makes a teacher effective. There may be other dimensions of teacher quality, including teaching style, available classroom resources (equipment, books, lab equipment), and office hours that may be more of a factor. Teacher quality should not be ruled out only because of the results of the three variables used in the analysis. </p>
			<p>Lastly, there is still more information needed. When we observe that teacher quality loses statistical significance when we add demographic predictors, it is likely because the racial composition of school zones is confounding. However, the direction or magnitude of the relationship between child income and teacher quality is unknown. Perhaps better teachers are attracted to white neighborhoods because those schools can buy better resources through private donations. But equally as possible, white parents may generally have the financial means to move to neighborhoods with better schools. Regression analysis alone does not reveal the full causal mechanism.</p>
			<p>In summary, while not the strongest correlate of child income, teacher quality should not be overlooked. The findings suggest that schools, and more specifically, the classroom experience, still play a meaningful role in shaping long-term outcomes for children. The following section offers potential approaches that enable policymakers to more accurately describe that effect.</p>
			
			<h3>Potential Future Research</h3>
			<strong>Regression Discontinuity Design</strong>
			<br />
			<p>One method the Anchorage School District may leverage to estimate the causal effect of teacher quality on child income is a regression discontinuity design. Two groups can be made using the line drawn between schools. Figure 8 shows a neighborhood split by the East and Service HS boundary as an example. One group is the houses on the East side, and the other houses on the Service side. One side, chosen arbitrarily though it does not matter, would be designated the control group, and the other the treatment group. The identification assumption made in this analysis is that students living along the boundary are comparable. In other words, the student characteristics are identical, with the only difference being the school they attend.</p>
			<figure>
				<img src={figure8} className="md:max-h-90 w-auto" />
				<figcaption>Figure 8: Example DiD Design, East and Service HS Boundary.</figcaption>
			</figure>
			<p>The school district would collect household-level data for families that live along a boundary. This would be accomplished through a survey because the Census only publishes tract-level information, and Anchorage school zones typically split tracts. The distance from each house to the boundary line would also need to be measured, which is most easily accomplished through geospatial data. Once the data for the groups is aggregated, the city can start modeling regressions. For instance, it may regress child income over household distance to the boundary for both groups. The y-axis distance between the groups at the threshold would be the average effect of receiving the treatment. And this can be stated as a causal effect because the RDD mimics random assignment near the boundary, eliminating confounders like racial composition that posed an issue in the previous correlational analysis.</p>
			<p>There are several limitations to this research design, the first of which is that the identification assumption may not be true. The city may confirm this by summarizing school zone characteristics and checking if the test and control groups are significantly different. Ideally, only the teacher quality metrics differ significantly across the border. However, if other factors are different, then it cannot be stated that the differences in child incomes between the schools are only because of teacher quality</p>
			<p>There may also be non-compliance within the two groups. The Anchorage School District can grant waivers for students to attend schools outside of their school zone. Parents may request a waiver for reasons like convenience—for example, if a school is closer to their place of work. The non-compliance rate would need to be determined, and the local average treatment effect would need to be calculated in this case.</p>
			<p>A third limitation is that the findings are not generalizable to the entire city. This is because each school zone boundary compares only two schools, so the estimated treatment effect only captures the effect of switching from one school to its neighboring school, rather than revealing a city-wide relationship. To address this, the city could replicate the analysis across all school zone boundaries and then calculate the ratio between the estimated treatment effects on the differences in teacher quality between paired schools. That value would reflect the average effect of a one-point increase in teacher quality on child income.</p>
			<br />
			<strong>Difference-in-Differences</strong>
			<p>The city may also establish causality by using the construction of South HS to conduct a difference-in-differences (DiD) analysis. South was built in 2004 and re-zoned students from Dimond and Service High Schools, naturally providing a way for students to be divided into treatment and control groups. The students who were re-zoned to South would be the treatment group because they received the “treatment” of going to South; students who remained in their respective schools would comprise the control group.</p>
			<p>To conduct this quasi-experiment, the city would first need the original school zone boundaries before 2004. Old Census data would need to be used to determine demographic characteristics for those resulting areas. Child income from the Atlas dataset can be used because the cohort analyzed in the data was in high school around the time South was built. The Alaska Department of Education school quality metrics may be used again, so long as the same assumption made in the correlational analysis that school quality remains consistent through time is applied.</p>
			<p>The parallel trends assumption would need to first be verified. This assumption states that in the absence of South being built, the difference in child income between the control and test groups would have remained constant over time. The city could check for this by creating a time series of child income using different cohorts in the Atlas dataset by test and control groups, then comparing the slopes. Different slopes would indicate a violation of this assumption, precluding the claim that the differences observed post-treatment are attributable to the treatment alone.</p>
			<p>A limitation of this approach is again generalizability. The estimated effect of attending South may not apply to other schools, such as East High, where the student population differs. Additionally, Dimond and Service, which both had students re-zoned to South, should not be aggregated into a single control group without first confirming they are comparable. Differences in pre-treatment trends could violate the parallel trends assumption. The city may address this by conducting separate DiD analyses for each school to more accurately estimate the impact. </p>

			
			<h3>Conclusion</h3>
			<p>The research found that while the racial composition of a school zone is the strongest correlate of child income, there is still sufficient evidence to warrant further investigation of the effect of teacher quality. This is because teacher quality showed predictive power in models without demographic controls, held consistent patterns across racial groups, and ranked high in the random forest analysis. Furthermore, the limitations of the teacher quality metrics and correlational analysis leave open the possibility that causal analysis may reveal a stronger effect. The city may explore teacher quality further through a difference-in-differences analysis or a regression discontinuity design.</p>
			<p>While working on this project, it wasn’t lost on me that I grew up in one of the tracts with the highest upward mobility. My dad worked a low-wage job, but my parents still sent their three kids to good universities. I couldn’t help but think not only of my parents, but also of the great teachers I had at Service High School. With the right research and policy implementation, perhaps stories like mine can become more common across Anchorage.</p>


			<h3>References</h3>
			<ol className="break-words">
				<li><i>Opportunity Atlas.</i> Opportunity Insights, https://www.opportunityatlas.org. Anchorage School District. “Demographics & GIS Services: School Boundaries.” https://www.asdk12.org/demographics-gis/boundaries/.</li>
				<li><i>Opportunity Atlas.</i> Opportunity Insights, https://www.opportunityatlas.org.</li>
				<li><i>Social Capital Atlas.</i> Opportunity Insights, https://socialcapital.org/.</li>
				<li><i>Alaska Department of Education and Early Development: School Accountability Reports.</i> Alaska Department of Education and Early Development. https://education.alaska.gov/compass/Home/AccountabilitySchoolsInDistrict?districtId=5.</li>
				<li>Anchorage School District. “Demographics & GIS Services: School Boundaries.” https://www.asdk12.org/demographics-gis/boundaries/.</li>
			</ol>
    </main>
	)
}