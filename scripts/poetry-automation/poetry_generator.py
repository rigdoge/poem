import json
import os
import time
from pypinyin import lazy_pinyin, Style
import random
from chinese_converter import to_simplified, to_traditional
import sys

class PoetryGenerator:
    def __init__(self):
        # 注释数据库
        self.annotations_db = {
            '将进酒': {
                'char_annotations': {
                    '君': '对话中对对方的尊称。',
                    '黄河': '中国第二长河，发源于青海省巴颜克拉山脉，流经九个省区。',
                    '天上': '指很高的地方，这里形容黄河水来势凶猛，如从天而降。',
                    '奔流': '急速流动。形容水流湍急。',
                    '不复': '不再。',
                    '高堂': '堂屋，正屋。古代建筑的主体建筑。这里指人到中年。',
                    '明镜': '明亮的镜子。这里指照镜自鉴。',
                    '悲': '伤感。',
                    '白发': '花白的头发，这里指人的衰老。',
                    '朝': '早晨。',
                    '青丝': '乌黑的头发，形容年轻。',
                    '暮': '傍晚，这里与"朝"对应，形容时间短暂。',
                    '成雪': '像雪一样白，形容头发全白。',
                    '得意': '心满意足，志得意满。',
                    '须': '应该。',
                    '尽欢': '尽情欢乐。',
                    '莫使': '不要让。',
                    '金樽': '美酒器皿，古代用以盛酒的金属容器。',
                    '空': '空虚，这里指没有酒。',
                    '对月': '面对月亮。',
                    '天生': '天赋，天生就有的。',
                    '材': '才能。',
                    '必有用': '一定有用处。',
                    '千金': '形容很多钱财。',
                    '散尽': '全部花完。',
                    '复来': '会再来。',
                    '烹羊': '煮羊肉。',
                    '宰牛': '杀牛。',
                    '为乐': '作为快乐。',
                    '会须': '理应。',
                    '一饮': '一次喝。',
                    '三百杯': '形容痛饮，夸张的说法。',
                    '岑夫子': '岑勋，李白的好友。',
                    '丹丘生': '道士孔巢父，李白的另一位好友。',
                    '将进酒': '请快点把酒拿上来。',
                    '杯莫停': '不要停止斟酒。',
                    '歌一曲': '唱一首歌。',
                    '倾耳听': '专心听。',
                    '钟鼓': '古代的打击乐器，这里指奢华的享受。',
                    '馔玉': '精美的食物。',
                    '不足贵': '不值得珍贵。',
                    '长醉': '一直醉着。',
                    '不愿醒': '不愿意清醒。',
                    '圣贤': '有道德、有学问的人。',
                    '寂寞': '这里指默默无闻。',
                    '惟有': '只有。',
                    '饮者': '喝酒的人。',
                    '留其名': '留下名声。',
                    '陈王': '指陈思王曹植。',
                    '昔时': '从前。',
                    '平乐': '地名，在今山东省。',
                    '斗酒': '一斗酒，约10升。',
                    '十千': '万钱。',
                    '恣': '放纵，随意。',
                    '欢谑': '欢乐嬉戏。',
                    '主人': '这里指酒家主人。',
                    '何为': '为什么。',
                    '言少钱': '说钱不够。',
                    '径须': '一定要。',
                    '沽取': '买酒。',
                    '对君酌': '与你对饮。',
                    '五花马': '身上有五种花纹的骏马。',
                    '千金裘': '价值千金的皮袍。',
                    '呼儿': '叫仆人。',
                    '将出': '拿出去。',
                    '换美酒': '换取好酒。',
                    '与尔': '和你。',
                    '同销': '一起消除。',
                    '万古愁': '亘古以来的愁苦。'
                },
                'line_annotations': {
                    '君不见黄河之水天上来': '开篇用设问，描写黄河之水奔腾而下的壮观景象。"天上来"形容黄河水势之大。',
                    '奔流到海不复回': '形容黄河水流向大海后永不回返，暗示时光流逝永不复返。',
                    '君不见高堂明镜悲白发': '再次用设问，写照镜自照时见到白发而悲伤。',
                    '朝如青丝暮成雪': '形容人容易衰老，早晨还是黑发，傍晚就白了。夸张地写出时光飞逝。',
                    '人生得意须尽欢': '人生得志得意之时应当尽情欢乐。',
                    '莫使金樽空对月': '不要让酒杯空对明月，要及时行乐。',
                    '天生我材必有用': '表达自信，相信自己的才能终有用武之地。',
                    '千金散尽还复来': '钱财花完了还会再来，不必吝惜。',
                    '烹羊宰牛且为乐': '形容及时行乐的奢侈场面。',
                    '会须一饮三百杯': '表达痛饮的豪迈之情。',
                    '岑夫子，丹丘生': '点出两位朋友的名字，表达对知己的珍重。',
                    '将进酒，杯莫停': '催促快点上酒，杯中不要无酒。',
                    '与君歌一曲': '要和朋友一起唱歌。',
                    '请君为我倾耳听': '请朋友认真听我唱歌。',
                    '钟鼓馔玉不足贵': '钟鼓美食等物质享受都不足珍贵。',
                    '但愿长醉不愿醒': '只愿一直醉着，不愿清醒。表达对现实的不满。',
                    '古来圣贤皆寂寞': '从古至今的圣贤都寂寞无闻。',
                    '惟有饮者留其名': '只有会喝酒的人才能留下名声，表达对饮酒的推崇。',
                    '陈王昔时宴平乐': '引用曹植在平乐观设宴的典故。',
                    '斗酒十千恣欢谑': '形容宴会上痛饮作乐的场面。',
                    '主人何为言少钱': '为什么说钱不够呢？',
                    '径须沽取对君酌': '一定要去买酒来与你对饮。',
                    '五花马，千金裘': '名贵的马和昂贵的皮袍。',
                    '呼儿将出换美酒': '叫仆人把它们拿去换取美酒。',
                    '与尔同销万古愁': '与你一起借酒消愁。这句总结全诗，表达借酒消除亘古以来的愁苦之情。'
                }
            },
            '水调歌头·明月几时有': {
                'char_annotations': {
                    '明': '明亮的，光明的。',
                    '月': '月亮，天上的星体。',
                    '几': '疑问词，询问数量。',
                    '时': '时候，时间。',
                    '有': '存在，出现。',
                    '把': '拿，持。',
                    '酒': '酒，饮料。',
                    '问': '询问，发问。',
                    '青': '青色的，形容天空的颜色。',
                    '天': '天空。',
                    '不': '否定词。',
                    '知': '知道，了解。',
                    '上': '上面。',
                    '宫阙': '宫殿，皇宫。',
                    '今': '现在。',
                    '夕': '夜晚，傍晚。',
                    '是': '是，表肯定。',
                    '何': '疑问词，什么。',
                    '年': '年份。',
                    '我': '第一人称代词。',
                    '欲': '想要，愿望。',
                    '乘': '乘坐，驾驭。',
                    '风': '风，气流。',
                    '归': '回去。',
                    '去': '离开，前往。',
                    '又': '又，再。',
                    '恐': '害怕，担心。',
                    '琼楼玉宇': '华丽的楼宇，形容天上的宫殿。',
                    '高': '高的，高度大的。',
                    '处': '地方，处所。',
                    '胜': '承受，经受。',
                    '寒': '寒冷。',
                    '起': '起来。',
                    '舞': '跳舞。',
                    '弄': '玩弄，戏弄。',
                    '清': '清澈的，明净的。',
                    '影': '影子，身影。',
                    '何': '多么。',
                    '似': '像，好像。',
                    '在': '存在于。',
                    '人间': '人世间。',
                    '转': '转动，转向。',
                    '朱阁': '朱红色的楼阁。',
                    '低': '低垂。',
                    '绮户': '雕花的门扇。',
                    '照': '照射，照耀。',
                    '无': '没有。',
                    '眠': '睡眠。',
                    '应': '应该。',
                    '恨': '怨恨。',
                    '事': '事情。',
                    '长': '长久。',
                    '向': '朝向。',
                    '别': '分别，离别。',
                    '圆': '圆满。',
                    '悲欢离合': '悲伤欢乐，聚散离合。',
                    '阴晴圆缺': '阴天晴天，圆满亏缺。',
                    '此': '这个。',
                    '古': '古代，从前。',
                    '难': '困难。',
                    '全': '完整，完全。',
                    '但': '只。',
                    '愿': '愿望，希望。',
                    '久': '长久。',
                    '千里': '很远的距离。',
                    '共': '一起。',
                    '婵娟': '月亮的美称。'
                },
                'line_annotations': {
                    '明月几时有': '明月何时才会出现。',
                    '把酒问青天': '举起酒杯问苍天。',
                    '不知天上宫阙': '不知道天上的宫殿。',
                    '今夕是何年': '今晚是什么年份。',
                    '我欲乘风归去': '我想乘风回到天上。',
                    '又恐琼楼玉宇': '又怕那华丽的宫殿。',
                    '高处不胜寒': '在高处经受不住寒冷。',
                    '起舞弄清影': '起来舞蹈玩弄月影。',
                    '何似在人间': '哪里比得上在人间。',
                    '转朱阁': '转过朱红的楼阁。',
                    '低绮户': '低垂的雕花门扇。',
                    '照无眠': '照着未眠的人。',
                    '不应有恨': '本不该有怨恨。',
                    '何事长向别时圆': '为何总是在离别时圆满。',
                    '人有悲欢离合': '人世间有悲欢离合。',
                    '月有阴晴圆缺': '月亮有阴晴圆缺。',
                    '此事古难全': '这种事从古至今都难以完满。',
                    '但愿人长久': '只愿人能长久。',
                    '千里共婵娟': '千里共赏这美丽的月亮。'
                }
            },
            '如梦令·昨夜雨疏风骤': {
                'char_annotations': {
                    '昨': '昨天。',
                    '夜': '夜晚。',
                    '雨': '雨水。',
                    '疏': '稀疏的。',
                    '风': '风。',
                    '骤': '急促的。',
                    '浓': '浓重的。',
                    '睡': '睡眠。',
                    '不': '不，否定词。',
                    '消': '消除。',
                    '残': '残留的。',
                    '酒': '酒。',
                    '试': '尝试。',
                    '问': '询问。',
                    '卷帘人': '负责卷帘的仆人。',
                    '却': '却，转折词。',
                    '道': '说。',
                    '海棠': '一种花，春天开花。',
                    '依': '依然。',
                    '旧': '原来的样子。',
                    '知': '知道。',
                    '否': '否，表示疑问。',
                    '应': '应该。',
                    '是': '是。',
                    '绿肥红瘦': '绿叶茂盛，红花凋谢。'
                },
                'line_annotations': {
                    '昨夜雨疏风骤': '昨天夜里雨点稀疏风却急骤。',
                    '浓睡不消残酒': '酣睡未醒还有残留的酒意。',
                    '试问卷帘人': '试着询问卷帘的仆人。',
                    '却道海棠依旧': '他却说海棠花依然如故。',
                    '知否，知否': '你知道吗，你知道吗。',
                    '应是绿肥红瘦': '应该是绿叶茂盛而红花憔悴了。'
                }
            }
        }
        self.test_data = [
            {
                'title': '静夜思',
                'author': '李白',
                'dynasty': '唐',
                'content': ['床前明月光，', '疑是地上霜。', '举头望明月，', '低头思故乡。']
            },
            {
                'title': '登鹳雀楼',
                'author': '王之涣',
                'dynasty': '唐',
                'content': ['白日依山尽，', '黄河入海流。', '欲穷千里目，', '更上一层楼。']
            },
            {
                'title': '春晓',
                'author': '孟浩然',
                'dynasty': '唐',
                'content': ['春眠不觉晓，', '处处闻啼鸟。', '夜来风雨声，', '花落知多少。']
            },
            {
                'title': '将进酒',
                'author': '李白',
                'dynasty': '唐',
                'content': [
                    '君不见黄河之水天上来，',
                    '奔流到海不复回。',
                    '君不见高堂明镜悲白发，',
                    '朝如青丝暮成雪。',
                    '人生得意须尽欢，',
                    '莫使金樽空对月。',
                    '天生我材必有用，',
                    '千金散尽还复来。',
                    '烹羊宰牛且为乐，',
                    '会须一饮三百杯。',
                    '岑夫子，丹丘生，',
                    '将进酒，杯莫停。',
                    '与君歌一曲，',
                    '请君为我倾耳听。',
                    '钟鼓馔玉不足贵，',
                    '但愿长醉不愿醒。',
                    '古来圣贤皆寂寞，',
                    '惟有饮者留其名。',
                    '陈王昔时宴平乐，',
                    '斗酒十千恣欢谑。',
                    '主人何为言少钱，',
                    '径须沽取对君酌。',
                    '五花马，千金裘，',
                    '呼儿将出换美酒，',
                    '与尔同销万古愁。'
                ]
            },
            {
                'title': '水调歌头·明月几时有',
                'author': '苏轼',
                'dynasty': '宋',
                'content': [
                    "明月几时有",
                    "把酒问青天",
                    "不知天上宫阙",
                    "今夕是何年",
                    "我欲乘风归去",
                    "又恐琼楼玉宇",
                    "高处不胜寒",
                    "起舞弄清影",
                    "何似在人间",
                    "转朱阁",
                    "低绮户",
                    "照无眠",
                    "不应有恨",
                    "何事长向别时圆",
                    "人有悲欢离合",
                    "月有阴晴圆缺",
                    "此事古难全",
                    "但愿人长久",
                    "千里共婵娟"
                ]
            },
            {
                'title': '如梦令·昨夜雨疏风骤',
                'author': '李清照',
                'dynasty': '宋',
                'content': [
                    "昨夜雨疏风骤",
                    "浓睡不消残酒",
                    "试问卷帘人",
                    "却道海棠依旧",
                    "知否，知否",
                    "应是绿肥红瘦"
                ]
            }
        ]

    def get_random_poetry(self):
        try:
            return random.choice(self.test_data)
        except Exception as e:
            print(f"Error getting random poetry: {e}")
            return None

    def generate_pinyin(self, text):
        """生成拼音，去除标点符号"""
        text = text.replace('。', '').replace('，', '')
        return ' '.join(lazy_pinyin(text, style=Style.TONE))

    def generate_tones(self, text):
        """生成平仄标记"""
        # 简单的平仄规则：一、二、四声为仄声，三声为平声
        tones = []
        for char in text:
            if char in ['，', '。']:
                continue
            pinyin = lazy_pinyin(char, style=Style.TONE3)[0]
            # 获取声调数字
            tone = pinyin[-1] if pinyin[-1].isdigit() else '0'
            # 三声为平声，其他为仄声
            tones.append('ping' if tone == '3' else 'ze')
        return tones

    def generate_annotations(self, text, title, line_idx=None, char_idx=None):
        """生成注释"""
        if title in self.annotations_db:
            poem_annotations = self.annotations_db[title]
            if line_idx is not None and char_idx is not None:
                # 获取字级注释
                if text in poem_annotations['char_annotations']:
                    return poem_annotations['char_annotations'][text]
                # 如果没有找到字级注释，尝试查找包含这个字的词语注释
                for key, value in poem_annotations['char_annotations'].items():
                    if text in key and len(key) > 1:
                        return f'见"{key}"。{value}'
                # 如果还是没有找到，返回基本解释
                return self.get_basic_char_annotation(text)
            else:
                # 获取句级注释
                if text in poem_annotations['line_annotations']:
                    return poem_annotations['line_annotations'][text]
        return self.get_basic_char_annotation(text)

    def get_basic_char_annotation(self, char):
        """获取字的基本注释"""
        basic_annotations = {
            # 基本动作
            '见': '看见；看到。',
            '来': '来到；到达。',
            '去': '离开；前往。',
            '望': '看；观望。',
            '思': '思考；想念。',
            '听': '用耳朵感知声音。',
            '饮': '喝；饮用。',
            '歌': '唱歌；歌唱。',
            '醉': '因饮酒而神志不清。',
            '宴': '聚会吃喝。',
            '沽': '买；购买。',
            '换': '交换；替换。',
            '销': '消除；销毁。',
            
            # 方位词
            '上': '上面；在上方。',
            '下': '下面；在下方。',
            '中': '中间；之中。',
            '内': '里面；内部。',
            '外': '外面；外部。',
            
            # 时间词
            '朝': '早晨；清晨。',
            '暮': '傍晚；黄昏。',
            '昔': '过去；从前。',
            '今': '现在；当前。',
            
            # 数量词
            '一': '数词，最小的正整数。',
            '三': '数词，三个；第三。',
            '千': '数词，一千；形容数量多。',
            '万': '数词，一万；形容极多。',
            
            # 代词
            '我': '第一人称代词。',
            '其': '代词，他的；它的。',
            '之': '代词，的；之物。',
            '尔': '你；你的。',
            
            # 形容词
            '高': '高度大；崇高。',
            '明': '明亮；清楚。',
            '白': '白色；清楚。',
            '空': '空虚；没有。',
            '古': '古代；从前。',
            '寂': '寂静；冷清。',
            '寞': '寂寞；孤单。',
            
            # 连词和语气词
            '且': '而且；并且。',
            '与': '和；跟。',
            '为': '是；作为。',
            '何': '什么；为什么。',
            
            # 名词
            '水': '水；液体。',
            '河': '河流；江河。',
            '海': '海洋；大水域。',
            '山': '山；山岳。',
            '月': '月亮；月份。',
            '雪': '雪；白色的降水。',
            '金': '黄金；金属。',
            '马': '马；骏马。',
            '牛': '牛；牲畜。',
            '羊': '羊；牲畜。',
            '花': '花朵；花卉。',
            '酒': '酒；含酒精的饮料。',
            '杯': '杯子；酒杯。',
            '裘': '皮衣；皮袍。',
            '愁': '忧愁；烦恼。',
            
            # 其他常用字
            '不': '否定词，表示否定。',
            '必': '一定；必定。',
            '有': '存在；具有。',
            '无': '没有；不存在。',
            '复': '再次；重新。',
            '须': '应该；必须。',
            '使': '使得；让。',
            '言': '说；说话。',
            '出': '出去；外出。',
            '入': '进入；进去。',
            '生': '生长；活着。',
            '成': '变成；完成。',
            '得': '获得；得到。',
            '欲': '想要；愿望。',
            '留': '停留；保留。',
            '同': '相同；一起。',
            '少': '少量；年少。',
            '长': '长久；生长。'
        }
        return basic_annotations.get(char, f"{char}：待补充注释。")

    def process_poetry(self, poetry_data):
        if not poetry_data:
            return None
        
        processed_data = poetry_data.copy()
        title = processed_data['title']
        
        # 检查并生成拼音数据
        if 'pinyinData' not in processed_data:
            print("Generating pinyin data...")
            pinyin_data = []
            for line in processed_data['content']:
                pinyin = self.generate_pinyin(line)
                pinyin_data.append([pinyin])
            processed_data['pinyinData'] = pinyin_data

        # 检查并生成繁体版本
        if 'traditional' not in processed_data:
            print("Generating traditional text...")
            traditional_content = []
            for line in processed_data['content']:
                traditional_content.append(to_traditional(line))
            processed_data['traditional'] = traditional_content

        # 检查并生成平仄数据
        if 'toneData' not in processed_data:
            print("Generating tone data...")
            tone_data = []
            for line in processed_data['content']:
                tone_data.append(self.generate_tones(line))
            processed_data['toneData'] = tone_data

        # 检查并生成注释
        if 'annotations' not in processed_data:
            print("Generating annotations...")
            annotations = {}
            for line_idx, line in enumerate(processed_data['content']):
                # 生成字级注释
                for char_idx, char in enumerate(line):
                    if char not in ['，', '。']:
                        key = f"{line_idx}-{char_idx}"
                        annotations[key] = self.generate_annotations(char, title, line_idx, char_idx)
            processed_data['annotations'] = annotations

        return processed_data

    def generate_markdown_content(self, poetry_data):
        title = poetry_data.get('title', '')
        author = poetry_data.get('author', '')
        dynasty = poetry_data.get('dynasty', '')
        content = poetry_data.get('content', [])
        pinyin_data = poetry_data.get('pinyinData', [])
        tone_data = poetry_data.get('toneData', [])
        annotations = poetry_data.get('annotations', {})

        # 保存当前处理的诗歌标题
        self.current_title = title

        # 格式化数据为JSON字符串，并用花括号包裹
        content_str = '{' + json.dumps(content, ensure_ascii=False) + '}'
        pinyin_data_str = '{' + json.dumps(pinyin_data, ensure_ascii=False) + '}'
        tone_data_str = '{' + json.dumps(tone_data, ensure_ascii=False) + '}'
        annotations_str = '{' + json.dumps(annotations, ensure_ascii=False) + '}'

        template = f"""# {title}

{title}是一首{dynasty}诗歌，作者是{author}。

<details>
<summary>创作背景</summary>

这首诗作于{dynasty}，具体创作年代已不可考。

</details>

## 原文

import PinyinPoem from '@site/src/components/PinyinPoem';

<PinyinPoem 
  title="{title}"
  author="{author}"
  dynasty="{dynasty}"
  content={content_str}
  pinyinData={pinyin_data_str}
  toneData={tone_data_str}
  annotations={annotations_str}
/>

## 赏析

<details>
<summary>艺术特色</summary>

1. **语言特点**
   - 语言优美凝练
   - 意境深远
   - 韵律和谐

2. **表现手法**
   - 善用比喻和象征
   - 意象鲜明
   - 结构严谨

</details>

<details>
<summary>主题思想</summary>

1. **主题内容**
   - 待补充

2. **思想特色**
   - 待补充

</details>

<details>
<summary>写作背景</summary>

这首诗创作于{dynasty}，反映了当时的社会状况和文人心态。

</details>

<details>
<summary>影响意义</summary>

1. 艺术价值
   - 意境优美
   - 格律工整
   - 语言精炼

2. 历史价值
   - 反映时代特征
   - 展现文人情怀
   - 传承文化精神

</details>

## 注释

<details>
<summary>词语注释</summary>

{self._generate_word_annotations(content)}

</details>
"""
        return template

    def _generate_word_annotations(self, content_lines):
        """生成词语注释"""
        annotations = []
        for line in content_lines:
            clean_line = line.replace('。', '').replace('，', '')
            if len(clean_line) >= 2:
                annotation = self.generate_annotations(clean_line, self.current_title)
                annotations.append(f"- {clean_line}：{annotation}")
        return '\n'.join(annotations) if annotations else "- 待添加"

    def save_to_file(self, content, poetry_data):
        # 创建目录
        base_dir = 'docs/poetry/others'
        os.makedirs(base_dir, exist_ok=True)
        
        # 生成文件名
        timestamp = int(time.time())
        filename = f'poem-{timestamp}.md'
        filepath = os.path.join(base_dir, filename)
        
        # 写入文件
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Generated poem file: {filepath}")
        return filepath

    def get_poetry_by_title(self, title):
        """根据标题获取诗歌"""
        for poetry in self.test_data:
            if poetry['title'] == title:
                return poetry
        return None

def main():
    generator = PoetryGenerator()
    
    # 获取随机诗歌或指定诗歌
    print("Fetching poetry...")
    if len(sys.argv) > 1:
        title = sys.argv[1]
        poetry_data = generator.get_poetry_by_title(title)
        if not poetry_data:
            print(f"Poetry with title '{title}' not found.")
            return
    else:
        poetry_data = generator.get_random_poetry()
    
    if poetry_data:
        # 处理诗歌数据
        print("Processing poetry data...")
        processed_data = generator.process_poetry(poetry_data)
        
        # 生成Markdown内容
        print("Generating markdown content...")
        content = generator.generate_markdown_content(processed_data)
        
        # 保存到文件
        print("Saving to file...")
        filepath = generator.save_to_file(content, processed_data)
        
        print("\nDone! Poetry generated successfully.")
        print(f"Title: {poetry_data['title']}")
        print(f"Author: {poetry_data['author']}")
        print(f"Dynasty: {poetry_data['dynasty']}")
    else:
        print("Failed to generate poetry.")

if __name__ == '__main__':
    main() 