/**
 * Created by Sam on 11/10/2015.
 */
var dataArray = function(){
    var titleArray = [
        "HR+乳腺癌靶向治疗新选择",
        "HR+ ABC领域的治疗进展及展望",
        "内分泌治疗是乳腺癌治疗中最早的靶向治疗",
        "转移性乳腺癌的治疗策略",
        "ER阳性MBC",
        "化疗与内分泌治疗的真实世界模式 ",
        "激素受体阳性乳腺癌治疗中面临的主要挑战",
        "HR+HER2– 晚期乳腺癌的内分泌治疗及靶向治疗",
        "PI3K抑制剂",
        "PI3K被认为是有希望对 HR+乳腺癌进行治疗的靶向药物",
        "在HR+乳腺癌中已发现了多种PI3K/AKT/mTOR通路改变情况",
        "临床前模型显示加用buparlisib可增强氟维司群的活性并逆转耐药现象",
        "CBKM120F2302 BELLE-2",
        "BELLE-3：在HR+/HER2– BC绝经后妇女中使用Buparlisib与氟维司群",
        "BELLE-2的关键入选标准",
        "FERGI II期研究第 I部分：AI耐药 （ER+）局部晚期或转移性乳腺癌（ MBC ）患者中使用Pictilisib (GDC-0941) +氟维司群vs.氟维司群",
        "FERGI研究：无疾病进展存活期",
        "FERGI 研究：基于肿瘤PIK3CA 突变状态的PFS",
        "SANDPIPER ：在PIK3CA突变的ER+/HER2− 局部晚期或转移性乳腺癌患者中应用taselisib（GDC-0032）+氟维司群的III期研究",
        "CDK4/6抑制剂",
        "细胞周期蛋白D/CDK4/6通路",
        "PALOMA-1/TRIO-18：研究设计（NCT00721409）",
        "PALOMA-1/TRIO-18：无疾病进展时间（ITT）",
        "PALOMA-1/TRIO-18 ：无疾病进展时间（第1部分和 第2部分）",
        "PALOMA-1/TRIO-18：总生存时间（ITT）",
        "PALOMA-1/TRIO-18：结论",
        "PALOMA-2：研究设计（NCT01740427）",
        "PALOMA-3： FUL ± PAL治疗既往内分泌治疗中疾病进展的绝经前、后HR+/HER2– MBC的III期试验",
        "不良事件：所有原因",
        "主要终点：PFS（ITT 人群）",
        "PFS：患者亚组分析– 一些见解",
        "关键次要疗效终点总结",
        "结论",
        "PALOMA-3 vs. BOLERO-2：PFS （研究者评估）",
        "LEE011：主要特征",
        "LEE011在ER+ 乳腺癌中的抗肿瘤活性",
        "MONALEESA-2：研究设计",
        "MONALEESA-3：研究设计",
        "MONALEESA-7：HR+/HER2− ABC的绝经前患者中使用ribociclib与他莫昔芬/NSAI+戈舍瑞林的研究",
        "在一线HR+ ABC 中进行的PALOMA-2、MONALEESA-2和MONARCH-3 III期临床试验的总结",
        "HR+乳腺癌领域目前以内分泌为基础的治疗模式以及进行中的临床研究",
        "以证据为基础的诊断，治疗指南，年度更新",
        "我们到底是在哪里",
        "激素受体阳性（HR+）晚期乳腺癌（ABC）：标准治疗",
        "激素受体阳性晚期乳腺癌：新选择",
        "MBC领域将来的治疗策略",
        "HR+ 晚期乳腺癌靶向治疗：希望与挑战",
        "循证乳腺癌治疗"];

    var imageArray = ["2-Emerging01.png","2-Emerging02.png","2-Emerging03.png","2-Emerging04.png","2-Emerging05.png",
                      "2-Emerging06.png","2-Emerging07.png","2-Emerging08.png","2-Emerging09.png","2-Emerging10.png",
                      "2-Emerging11.png","2-Emerging12.png","2-Emerging13.png","2-Emerging14.png","2-Emerging15.png",
                      "2-Emerging16.png","2-Emerging17.png","2-Emerging18.png","2-Emerging19.png","2-Emerging20.png",
                      "2-Emerging21.png","2-Emerging22.png","2-Emerging23.png","2-Emerging24.png","2-Emerging25.png",
                      "2-Emerging26.png","2-Emerging27.png","2-Emerging28.png","2-Emerging29.png","2-Emerging30.png",
                      "2-Emerging31.png","2-Emerging32.png","2-Emerging33.png","2-Emerging34.png","2-Emerging35.png",
                      "2-Emerging36.png","2-Emerging37.png","2-Emerging38.png","2-Emerging39.png","2-Emerging40.png",
                      "2-Emerging41.png","2-Emerging42.png","2-Emerging43.png","2-Emerging44.png","2-Emerging45.png",
                      "2-Emerging46.png","2-Emerging47.png","2-Emerging48.png"];

    var timeArray = [0,18,50,78,129,172,252,268,326,352,388,424,467,486,537,585,640,706,752,830,865,915,975,1019,1040,
                    1072,1133,1177,1210,1252,1298,1363,1407,1489,1525,1587,1612,1641,1680,1711,1762,1804,1815,1833,
                    1917,1989,2062,2100];

    var showTimeArray = ["0:00","0:18","0:50","1:18","2:09","2:52","4:12","4:28","5:26","5:52","6:28","7:04","7:47",
                         "8:06","8:57","9:45","10:40","11:46","12:32","13:50","14:25","15:15","16:15","16:59","17:20",
                         "17:52","18:53","19:37","20:10","20:52","21:38","22:43","23:27","24:49","25:25","26:27",
                         "26:52","27:21","28:00","28:31","29:22","30:04","30:15","30:33","31:57","33:09","34:22",
                         "35:00"];

    var sections = new Array();
    for(var i = 0; i < titleArray.length; i ++){
        var section = new Object();
        section.time = timeArray[i];
        section.title = titleArray[i];
        section.image = imageArray[i];
        section.showTime = showTimeArray[i];
        sections.push(section);
        section = null;
    }
    return sections;
};